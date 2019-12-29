import React from "react";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { Sider } = Layout;

const Sidenav = () => {
  return (
    <Router>
      <Sider width={250} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ borderRight: 0 }}
        >
          <Menu.Item>
            <span>
              <Icon type="home" />
              <Link to="/">Dashboard</Link>
            </span>
          </Menu.Item>
          <Menu.Item>
            <span>
              <Icon type="user-add" />
              <Link to="/teste">Teste</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Router>
  );
};

export default Sidenav;
