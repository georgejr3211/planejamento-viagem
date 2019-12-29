import React from "react";
import { Layout, Menu, Row, Col } from "antd";

const Header = () => {
  return (
    <Layout.Header className="header">
      <Row type="flex" justify="space-between">
        <Col>
          <h2>Controle de Viagens</h2>
        </Col>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Header;
