//  个人信息界面：展示个人信息

import { Descriptions } from '@arco-design/web-react';

// @ts-expect-error
function ShowPersonalInformation({ data }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '14%',
        right: '10%',
        left: '10%',
        border: 'solid 1.5px #DCDCDC',
        textAlign: 'center',
        backgroundColor: 'white',
      }}
    >
      <h2>个人信息</h2>
      <h3>学生实名字段</h3>
      <Descriptions
        column={1}
        labelStyle={{ paddingRight: 46, textAlign: 'right' }}
        size={'large'}
        data={data}
        style={{
          marginLeft: 100,
          marginBottom: 10,
        }}
      />
    </div>
  );
}

export default ShowPersonalInformation;
