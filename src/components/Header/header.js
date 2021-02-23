import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import Menu from "../Menu";
import "./header.css";

const Header = ({ setPage, currentPage }) => {
  return (
    <header>
      <Logo />
      <Menu currentPage={currentPage} setPage={setPage} />
    </header>
  );
};

export default Header;
