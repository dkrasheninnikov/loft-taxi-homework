import React, { Component } from "react";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Modal from "../../components/Modal";
import { pages } from "../../config";
import "./map.css";
import MapBg from "./map.png";

const Map = (props) => {
  const { currentPage, setPage } = props;
  return (
    <div className="page map">
      <Header currentPage={currentPage} setPage={setPage} />
      <img src={MapBg} />
      {currentPage === pages.PROFILE && (
        <Modal>
          <Profile setPage={setPage} />
        </Modal>
      )}
    </div>
  );
};

export default Map;
