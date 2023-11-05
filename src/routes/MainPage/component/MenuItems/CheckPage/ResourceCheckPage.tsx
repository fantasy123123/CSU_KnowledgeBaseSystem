// 资源审核列表界面

import {
  Button,
  Radio,
  Input,
  Table,
  TableColumnProps,
} from '@arco-design/web-react';

import { IconSearch } from '@arco-design/web-react/icon';
import { useRef, useState } from 'react';

const ResourceCheckPage = () => {
  const inputRef = useRef(null);

  // 表格纵列相关数据
  const columns: TableColumnProps[] = [
    {
      title: '资源标题',
      dataIndex: 'title',
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className="arco-table-custom-filter">
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder=""
              value={filterKeys[0] || ''}
              onChange={value => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) =>
        value ? row.operation.indexOf(value) !== -1 : true,
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
    },
    {
      title: '资源作者',
      dataIndex: 'author',
    },
    {
      title: '资源简介',
      dataIndex: 'introduction',
    },
    {
      title: '资源内容',
      dataIndex: 'content',
    },
    {
      title: '上传时间',
      dataIndex: 'time',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '审核',
      dataIndex: 'check',
    },
  ];

  // 初始数据
  const initData = [
    {
      key: 1,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      content: '资源内容',
      time: '2023年7月3日',
      status: '已审核',
      check: (
        <Button type={'primary'} disabled>
          点击审核
        </Button>
      ),
    },
    {
      key: 2,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      content: '资源内容',
      status: '未审核',
      time: '2023年7月31日',
      check: <Button type={'primary'}>点击审核</Button>,
    },
    {
      key: 3,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      content: '资源内容',
      status: '已审核',
      time: '2023年7月31日',
      check: (
        <Button type={'primary'} disabled>
          点击审核
        </Button>
      ),
    },
    {
      key: 4,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      content: '资源内容',
      status: '已审核',
      time: '2023年7月31日',
      check: (
        <Button type={'primary'} disabled>
          点击审核
        </Button>
      ),
    },
    {
      key: 5,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      status: '未审核',
      content: '资源内容',
      time: '2023年7月31日',
      check: <Button type={'primary'}>点击审核</Button>,
    },
    {
      key: 6,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      content: '资源内容',
      status: '已审核',
      time: '2023年7月31日',
      check: (
        <Button type={'primary'} disabled>
          点击审核
        </Button>
      ),
    },
    {
      key: 7,
      title: '资源标题',
      introduction: '资源简介',
      author: '资源作者',
      content: '资源内容',
      status: '未审核',
      time: '2023年7月31日',
      check: <Button type={'primary'}>点击审核</Button>,
    },
  ];

  // 用于渲染表格的数据
  const [data, setData] = useState(initData);

  // 筛选所有、已审核与未审核
  function sortAll() {
    setData(initData);
  }

  function sortChecked() {
    setData(initData.filter(item => item.status === '已审核'));
  }
  function sortNotChecked() {
    setData(initData.filter(item => item.status === '未审核'));
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
      <div
        style={{ fontSize: '25px', paddingTop: '15px', textAlign: 'center' }}
      >
        资源审核列表
      </div>
      <div
        style={{
          fontSize: '20px',
          paddingLeft: '100px',
          paddingTop: '15px',
        }}
      >
        筛选
        <Radio.Group
          defaultValue={'所有'}
          name="sort"
          style={{ marginLeft: 15 }}
        >
          {['所有', '待审核', '已审核'].map(item => {
            return (
              <Radio key={item} value={item}>
                {({ checked }) => {
                  return (
                    <Button
                      tabIndex={-1}
                      key={item}
                      type={checked ? 'primary' : 'outline'}
                      onClick={() => {
                        if (item === '所有') {
                          sortAll();
                        } else if (item === '待审核') {
                          sortNotChecked();
                        } else if (item === '已审核') {
                          sortChecked();
                        }
                      }}
                    >
                      {item}
                    </Button>
                  );
                }}
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
      <Table
        borderCell={true}
        stripe={true}
        columns={columns}
        data={data}
        pagination={{
          showTotal: true,
          pageSize: 5,
        }}
        style={{
          marginRight: '75px',
          marginLeft: '75px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      />
    </div>
  );
};
export default ResourceCheckPage;
