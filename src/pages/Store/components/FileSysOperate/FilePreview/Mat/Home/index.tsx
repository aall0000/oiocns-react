import React from 'react';
import { Button, Layout } from 'antd';

const { Content, Footer } = Layout;

const Home: React.FC<any> = (props: any) => {
  const { REDOnClick, PSDOnClick } = props;

  return (
    <>
      <Layout>
        <Content>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '70px' }}>
              EEG <br />
              Digital Signal Process
            </h1>
          </div>
        </Content>
        <Footer style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            type="primary"
            style={{
              width: '150px',
              height: '70px',
              fontSize: '50px',
              lineHeight: '0px',
            }}
            onClick={REDOnClick}>
            ERD{' '}
          </Button>
          <Button
            type="primary"
            style={{
              width: '150px',
              height: '70px',
              fontSize: '50px',
              lineHeight: '0px',
            }}
            onClick={PSDOnClick}>
            PSD
          </Button>
        </Footer>
      </Layout>
    </>
  );
};
export default Home;
