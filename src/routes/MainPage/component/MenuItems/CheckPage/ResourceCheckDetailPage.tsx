// 具体资源审核，点击‘点击审核’按钮后进入的界面
import { Button, Descriptions, Image, Space } from '@arco-design/web-react';

const srcList = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
];
const ResourceCheckDetailPage = () => {
  const data = [
    {
      label: '资源标题',
      value: '资源标题',
    },
    {
      label: '资源作者',
      value: '作者',
    },
    {
      label: '资源简介',
      value: '简介',
    },
    {
      label: '资源内容',
      value: '内容',
    },
    {
      label: '上传时间',
      value: '时间',
    },
    {
      label: '资源预览',
      value: (
        <Image.PreviewGroup infinite>
          <Space>
            {srcList.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={100}
                alt={`lamp${index + 1}`}
              />
            ))}
          </Space>
        </Image.PreviewGroup>
      ),
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
      <div style={{ fontSize: '25px', paddingTop: '20px' }}>资源信息详情</div>
      <div
        style={{
          width: 900,
          border: 'solid 1.5px #DCDCDC',
          textAlign: 'center',
          backgroundColor: 'white',
          marginTop: 10,
          display: 'inline-block',
        }}
      >
        <Descriptions
          column={1}
          labelStyle={{ paddingRight: 46, textAlign: 'right' }}
          size={'large'}
          data={data}
          style={{
            marginLeft: 50,
            marginTop: 15,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 20,
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
          返回资源列表
        </Button>
      </div>
    </div>
  );
};

export default ResourceCheckDetailPage;
