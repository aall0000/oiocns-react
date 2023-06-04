// 处理Mat页面逻辑

import {FileItemShare} from "../../../../ts/base/model";
import React from 'react';
import { Button, Space } from 'antd';
import axios from "axios";



interface IProps {
  share: FileItemShare;
}


const App: React.FC = ({share}: IProps) => (
  <Space wrap>
    <Button type="primary" onClick={() => {
      console.log(share);
      axios.post('http://localhost:8081/erd/compute',{"sample_rate":1000,"smooth_param":0,"r_start":0,"r_end":1}).then(r => {
        console.log(r)
      })
    }}>Primary Button</Button>
  </Space>
);


const MatFileOperate = ({share}: IProps) => {
  if (!share) return <></>;
  return <App share={share}/>;
}

export default MatFileOperate;
