import { Button, Drawer, Radio, RadioChangeEvent, Select, Space } from 'antd';
import Form from 'antd/lib/form/Form';
import { useState } from 'react';
import './style.css';

const { Option } = Select;

export const MapMenu = () => {
  const [visible, setVisible] = useState(true);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        title="Построение маршрута"
        placement="left"
        width={500}
        onClose={onClose}
        visible={visible}
        extra={null}
      >
        <Form>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            // filterOption={(input, option) =>
            //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            // filterSort={(optionA, optionB) =>
            //   optionA.children
            //     .toLowerCase()
            //     .localeCompare(optionB.children.toLowerCase())
            // }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
        </Form>
      </Drawer>
      <button onClick={() => setVisible(!visible)} className="menu-opener">
        {/* <p>+</p> */}
      </button>
    </>
  );
};
