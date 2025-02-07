import { kernel, model, schema } from '../../../base';
import { Entity, IEntity } from '../../public';
import { PageAll } from '../../public/consts';
import { DictClass } from './dictclass';

/** 元数据字典接口 */
export interface IDict extends IEntity<schema.XDict> {
  /** 加载权限的自归属用户 */
  species: DictClass;
  /** 字典项 */
  items: schema.XDictItem[];
  /** 更新字典 */
  update(data: model.DictModel): Promise<boolean>;
  /** 删除字典 */
  delete(): Promise<boolean>;
  /** 加载字典项 */
  loadItems(reload?: boolean): Promise<schema.XDictItem[]>;
  /** 新增字典项 */
  createItem(data: model.DictItemModel): Promise<schema.XDictItem | undefined>;
  /** 删除字典项 */
  deleteItem(item: schema.XDictItem): Promise<boolean>;
  /** 更新字典项 */
  updateItem(data: model.DictItemModel): Promise<boolean>;
}

/** 元数据字典实现 */
export class Dict extends Entity<schema.XDict> implements IDict {
  constructor(_metadata: schema.XDict, _species: DictClass) {
    super({
      ..._metadata,
      typeName: '字典',
    });
    this.species = _species;
  }
  species: DictClass;
  items: schema.XDictItem[] = [];
  private _itemLoaded: boolean = false;
  async update(data: model.DictModel): Promise<boolean> {
    data.id = this.id;
    data.speciesId = this.species.id;
    const res = await kernel.updateDict(data);
    if (res.success && res.data?.id) {
      res.data.typeName = '字典';
      this.setMetadata(res.data);
    }
    return res.success;
  }
  async delete(): Promise<boolean> {
    const res = await kernel.deleteDict({
      id: this.id,
      page: PageAll,
    });
    if (res.success) {
      this.species._propertyChanged('deleted', [this]);
    }
    return res.success;
  }
  async loadItems(reload: boolean = false): Promise<schema.XDictItem[]> {
    if (!this._itemLoaded || reload) {
      const res = await kernel.queryDictItems({
        id: this.id,
        page: PageAll,
      });
      if (res.success) {
        this.items = res.data.result || [];
      }
    }
    return this.items;
  }
  async createItem(data: model.DictItemModel): Promise<schema.XDictItem | undefined> {
    data.dictId = this.id;
    const res = await kernel.createDictItem(data);
    if (res.success && res.data?.id) {
      this.items.push(res.data);
      return res.data;
    }
  }
  async deleteItem(item: schema.XDictItem): Promise<boolean> {
    const res = await kernel.deleteDictItem({
      id: item.id,
      page: PageAll,
    });
    if (res.success) {
      this.items = this.items.filter((i) => i.id != item.id);
    }
    return res.success;
  }
  async updateItem(data: model.DictItemModel): Promise<boolean> {
    data.dictId = this.id;
    const res = await kernel.updateDictItem(data);
    if (res.success) {
      this.items = this.items.filter((i) => i.id != data.id);
      this.items.push(res.data);
    }
    return res.success;
  }
}
