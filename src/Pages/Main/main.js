import React, { Component } from "react";
import Aside from "../../components/Aside";
import RightSide from "../../components/RightSide";
import Card from "../../components/Card";
import Login from "../../components/Login";
import Registration from "../../components/Registration";
import { pages } from "../../config";
import "./main.css";

const Main = (props) => {
  const { currentPage, setPage } = props;
  return (
    <div className="page">
      <Aside />
      <RightSide>
        <Card>
          {
            {
              [pages.LOGIN]: <Login setPage={setPage} />,
              [pages.REGISTRATION]: <Registration setPage={setPage} />,
            }[currentPage]
          }
        </Card>
      </RightSide>
    </div>
  );
};

export default Main;
