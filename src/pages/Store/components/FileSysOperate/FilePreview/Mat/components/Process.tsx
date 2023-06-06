import React from 'react';
import {Col, Image, Row} from 'antd';
import cls from './index.module.less';

// const { Header, Footer, Sider, Content } = Layout;
const Process: React.FC<any> = (props: any) => {
  const {
    img, //图片钩子
    titleName, //头部标签
    isDescriptions, //文件数据信息
    froms,
  } = props;
  return (
    <div className={cls['homes']}>
      <Row className={cls['rows1']}>
        {/* <div className={cls["fan"]}>{"<-"}返回</div> */}
        <div>{titleName} Process</div>
      </Row>
      <Row className={cls['px']}>
        <Col span={15} className={cls['pdd']}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ display: 'block', width: '350px' }}>{isDescriptions()}</div>
            <div>
              <div style={{ textAlign: 'center', lineHeight: '35px' }}>{titleName}图</div>
              {/*<div className={cls['imgs']}> 加载失败</div>*/}
              <Image
                width='400px'
                height='400px'
                src = {img}
              />
            </div>
          </div>
        </Col>
        <Col span={9} className={cls['pdx']}>
          <div style={{ textAlign: 'left' }}>
            <h2>输入参数</h2>
          </div>
          {froms()}
          {/*<div style={{ textAlign: 'center' }}>*/}
          {/*  <Button icon={<UploadOutlined />} className={cls['button1']}>*/}
          {/*    运行*/}
          {/*  </Button>*/}
          {/*  <Button icon={<UploadOutlined />} className={cls['button1']}>*/}
          {/*    获取{titleName}表格*/}
          {/*  </Button>*/}
          {/*  <Button icon={<UploadOutlined />} className={cls['button1']}>*/}
          {/*    获取{titleName}图片*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </Col>
      </Row>
    </div>
  );
};
export default Process;
