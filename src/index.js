import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Teste from "./components/Teste";
import "./utils/styles/global.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Content } = Layout;

const App = () => {
  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Layout>
          <Sidenav />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                marginTop: 20,
                minHeight: 280
              }}
            >
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/teste">
                    <Teste />
                  </Route>
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
