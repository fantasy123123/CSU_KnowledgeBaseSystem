//  个人信息界面：编辑个人信息
import { useRef, useEffect } from 'react';
import { Form, Input, Button, Message } from '@arco-design/web-react';

const FormItem = Form.Item;
const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 10,
  },
};
// @ts-expect-error
function EditPersonalInformation({ data, getNewInformation }) {
  const formRef = useRef();
  useEffect(() => {
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  // @ts-expect-error
  let nameInput;
  // @ts-expect-error
  let collegeInput;
  // @ts-expect-error
  let classInput;
  // @ts-expect-error
  let studentNumberInput;
  // @ts-expect-error
  let telephoneInput;
  function telephoneInputInitialValue() {
    if (data[4]) {
      return data[4].value;
    } else {
      return '';
    }
  }
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
      <h2>编辑个人信息</h2>
      <h3>学生实名字段</h3>
      <div style={{ maxWidth: 650, marginLeft: 50, marginBottom: 10 }}>
        <Form
          ref={formRef}
          autoComplete="off"
          size={'large'}
          scrollToFirstError
        >
          <FormItem
            label="姓名"
            field="姓名"
            initialValue={data[0].value}
            disabled={true}
          >
            <Input
              style={{ width: '250px', position: 'relative', right: '20%' }}
              ref={ref => (nameInput = ref)}
            />
          </FormItem>

          <FormItem
            label="学院"
            field="学院"
            initialValue={data[1].value}
            disabled={true}
          >
            <Input
              style={{ width: '250px', position: 'relative', right: '20%' }}
              ref={ref => (collegeInput = ref)}
            />
          </FormItem>

          <FormItem
            label="专业班级"
            field="专业班级"
            initialValue={data[2].value}
            disabled={true}
          >
            <Input
              style={{ width: '250px', position: 'relative', right: '20%' }}
              ref={ref => (classInput = ref)}
            />
          </FormItem>

          <FormItem
            label="学号"
            field="学号"
            initialValue={data[3].value}
            disabled={true}
          >
            <Input
              style={{ width: '250px', position: 'relative', right: '20%' }}
              ref={ref => (studentNumberInput = ref)}
            />
          </FormItem>

          <FormItem
            label="联系方式"
            field="联系方式"
            initialValue={telephoneInputInitialValue()}
          >
            <Input
              style={{ width: '250px', position: 'relative', right: '20%' }}
              ref={ref => (telephoneInput = ref)}
            />
          </FormItem>
          <FormItem {...noLabelLayout}>
            <Button
              onClick={async () => {
                if (formRef.current) {
                  try {
                    await formRef.current.validate();
                    Message.info('校验通过，提交成功！');
                    if (telephoneInput.dom.value.trim() === '') {
                      getNewInformation({
                        姓名: nameInput.dom.value,
                        学院: collegeInput.dom.value,
                        专业班级: classInput.dom.value,
                        学号: studentNumberInput.dom.value,
                      });
                    } else {
                      getNewInformation({
                        姓名: nameInput.dom.value,
                        学院: collegeInput.dom.value,
                        专业班级: classInput.dom.value,
                        学号: studentNumberInput.dom.value,
                        联系方式: telephoneInput.dom.value.trim(),
                      });
                    }
                  } catch (_) {
                    console.log(formRef.current.getFieldsError());
                    Message.error('校验失败，请检查字段！');
                  }
                }
              }}
              type="primary"
              style={{ marginRight: 24 }}
            >
              提交
            </Button>
            <Button
              onClick={() => {
                formRef.current.resetFields();
              }}
            >
              重置
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}

export default EditPersonalInformation;
