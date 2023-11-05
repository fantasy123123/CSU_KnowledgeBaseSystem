// 文件入口

import { Helmet } from '@modern-js/runtime/head';
import RegisterPage from '@/routes/RegisterPage/RegisterPage';
import MainPage from '@/routes/MainPage/MainPage';
import SignInPage from '@/routes/SignInPage/SignInPage';

const Index = () => (
  <div>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      {/* <SignInPage /> */}
      <MainPage />
      {/* <RegisterPage /> */}
    </main>
  </div>
);

export default Index;
