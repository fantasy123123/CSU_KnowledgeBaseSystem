// 个人信息界面

import { Button } from '@arco-design/web-react';
import { useState } from 'react';
import EditPersonalInformation from '@/routes/MainPage/component/MenuItems/EditInformationPage/EditPersonalInformation';
import ShowPersonalInformation from '@/routes/MainPage/component/MenuItems/EditInformationPage/ShowPersonalInformation';

const PersonalInformationPage = () => {
  // 数据信息
  const [person, setPerson] = useState({
    姓名: '夏铎恺',
    学院: '计算机学院',
    专业班级: '软件工程2206',
    学号: '8209220608',
    联系方式: '111111111',
  });
  // @ts-expect-error
  const data = [];
  Object.keys(person).forEach(key => {
    // @ts-expect-error
    data.push({ label: key, value: person[key] });
  });

  // 展示个人信息还是编辑个人信息
  const [ifShowInformation, setIfShowInformation] = useState(true);

  // 按钮状态
  const [buttonMessage, setButtonMessage] = useState('编辑个人信息');
  const [buttonStatus, setButtonStatus] = useState('');

  // 获取修改后的信息
  // @ts-expect-error
  function getNewInformation(value) {
    setPerson(value);
    setIfShowInformation(true);
    setButtonMessage('编辑个人信息');
    setButtonStatus('');
  }

  function Show() {
    if (ifShowInformation) {
      // @ts-expect-error
      return <ShowPersonalInformation data={data} />;
    } else {
      return null;
    }
  }

  function Edit() {
    if (ifShowInformation) {
      return null;
    } else {
      return (
        <EditPersonalInformation
          data={data}
          getNewInformation={getNewInformation}
        />
      );
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: '17%',
        right: '0',
        top: '18%',
        bottom: '0',
      }}
    >
      <Button
        type={'primary'}
        status={buttonStatus}
        style={{
          position: 'absolute',
          top: '4%',
          left: '12%',
          width: '150px',
          height: '40px',
          borderRadius: '5px',
        }}
        onClick={() => {
          if (ifShowInformation) {
            setIfShowInformation(false);
            setButtonMessage('取消编辑个人信息');
            setButtonStatus('danger');
          } else {
            setIfShowInformation(true);
            setButtonMessage('编辑个人信息');
            setButtonStatus('');
          }
        }}
      >
        {buttonMessage}
      </Button>
      <Show />
      <Edit />
    </div>
  );
};

export default PersonalInformationPage;
