import React, { Fragment } from "react";
import { Card, Avatar, Row, Col, Table } from "antd";
import Title from "antd/lib/typography/Title";
import { Chart, Axis, Legend, Tooltip, Geom } from "bizcharts";

const { Meta } = Card;

const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street"
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: name => <a href=".">{name}</a>
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ];

  const data = [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 }
  ];

  const Cards = data.map((m, i) => (
    <Col span={8} key={i}>
      <Card style={{ width: 250, marginTop: 16 }} loading={false}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={m.genre}
          description={m.sold}
        />
      </Card>
    </Col>
  ));

  return (
    <Fragment>
      <Title level={4}>Dashboard</Title>
      <Row>
        <Col span={12}>{Cards}</Col>
        <Col span={12} key={16}>
          <Card
            style={{ width: "100%", minHeight: 300, marginTop: 16 }}
            loading={false}
          >
            <Chart width={750} height={300} data={data}>
              <Axis name="genre" title />
              <Axis name="sold" title />
              <Legend position="top" dy={-20} />
              <Tooltip />
              <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 15 }}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
