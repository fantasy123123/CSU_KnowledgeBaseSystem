// 具体举报审核，点击‘点击审核’按钮后进入的界面

import { Button, Descriptions } from '@arco-design/web-react';

const ReportCheckDetailPage = () => {
  const data = [
    {
      label: '举报资源',
      value: '资源',
    },
    {
      label: '资源作者',
      value: '作者',
    },
    {
      label: '举报人',
      value: '人',
    },
    {
      label: '举报时间',
      value: '时间',
    },
    {
      label: '举报原因',
      value: '原因',
    },
    {
      label: '状态',
      value: '未审核',
    },
  ];
  return (
    <div
      style={{
        position: 'absolute',
        left: '17%',
        right: '0',
        top: '18%',
        bottom: '0',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '25px', paddingTop: '20px' }}>举报信息详情</div>
      <div
        style={{
          width: 900,
          border: 'solid 1.5px #DCDCDC',
          textAlign: 'center',
          backgroundColor: 'white',
          marginTop: 30,
          display: 'inline-block',
        }}
      >
        <Descriptions
          column={1}
          labelStyle={{ paddingRight: 46, textAlign: 'right' }}
          size={'large'}
          data={data}
          style={{
            marginLeft: 100,
            marginBottom: 10,
            marginTop: 30,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 40,
          marginLeft: 250,
        }}
      >
        <Button
          type={'primary'}
          status={'success'}
          style={{ width: 120, height: 45, marginRight: 50, fontSize: 18 }}
        >
          通过审核
        </Button>
        <Button
          type={'primary'}
          status={'danger'}
          style={{ width: 120, height: 45, marginRight: 50, fontSize: 18 }}
        >
          不通过审核
        </Button>
        <Button
          type={'primary'}
          style={{ width: 140, height: 45, fontSize: 18 }}
        >
          返回举报列表
        </Button>
      </div>
    </div>
  );
};

export default ReportCheckDetailPage;
