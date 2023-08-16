// 注册界面：通过账号密码注册

import { Button, Checkbox, Form, Input, Message } from '@arco-design/web-react';
import { IconSafe, IconUnlock, IconUser } from '@arco-design/web-react/icon';
import { useEffect, useRef } from 'react';
import '../style/RegisterPage.css';

const FormItem = Form.Item;

const AccountRegister = () => {
  const formRef = useRef();

  useEffect(() => {
    // @ts-expect-error
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  return (
    <div
      style={{
        marginTop: '20px',
      }}
    >
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="学号" rules={[{ required: true }]}>
          <Input
            placeholder="请输入学号"
            prefix={<IconUser />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="密码" rules={[{ required: true }]}>
          <Input
            placeholder="请输入密码（由6-20个字符组成）"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="确认密码" rules={[{ required: true }]}>
          <Input
            placeholder="请再次输入密码"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="验证码" rules={[{ required: true }]}>
          <Input
            placeholder="请输入验证码"
            prefix={<IconSafe />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem
          style={{ textAlign: 'left' }}
          field="readme"
          triggerPropName="checked"
          rules={[{ type: 'boolean', true: true }]}
        >
          <Checkbox>我已阅读并同意相关协议</Checkbox>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            style={{
              fontSize: '20px',
              height: '50px',
              width: '125%',
              borderRadius: '5px',
            }}
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  Message.info('校验通过，提交成功！');
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
          >
            注 册
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default AccountRegister;
