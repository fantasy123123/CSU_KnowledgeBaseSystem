// 个人模块界面（总界面）

import './style/MainPage.css';
import ReportCheckDetailPage from '@/routes/MainPage/component/MenuItems/CheckPage/ReportCheckDetailPage';
import ReportCheckPage from '@/routes/MainPage/component/MenuItems/CheckPage/ReportCheckPage';
import ResourceCheckDetailPage from '@/routes/MainPage/component/MenuItems/CheckPage/ResourceCheckDetailPage';
import ResourceCheckPage from '@/routes/MainPage/component/MenuItems/CheckPage/ResourceCheckPage';
import PersonalInformationPage from '@/routes/MainPage/component/MenuItems/EditInformationPage/PersonalInformationPage';
import IntegralPage from '@/routes/MainPage/component/MenuItems/IntegralPage/IntegralPage';
import MenuItems from '@/routes/MainPage/component/MenuItems/Menu/MenuItems';
import PersonalInformation from '@/routes/MainPage/component/PersonalInformation/PersonalInformation';
import ResourcePage from '@/routes/MainPage/component/MenuItems/ResourcePage/ResoursePage';

const MainPage = () => {
  return (
    <div className={'background'}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          right: '0',
          left: '0',
          top: '0',
          bottom: '86%',
        }}
      >
        <div className={'logo'} />
        <PersonalInformation />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '14%',
          bottom: '82%',
          background: '#186ff1',
        }}
      />
      <div className={'navigationBar'}>
        <MenuItems />
      </div>
      {/* <IntegralPage /> */}
      <ResourcePage />
      {/* <PersonalInformationPage /> */}
      {/* <ReportCheckPage /> */}
      {/* <ResourceCheckPage /> */}
      {/* <ReportCheckDetailPage /> */}
      {/* <ResourceCheckDetailPage /> */}
    </div>
  );
};

export default MainPage;
