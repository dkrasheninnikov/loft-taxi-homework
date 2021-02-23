import React from "react";
import { menuItems } from "../../config";
import "./menu.css";

const Menu = ({ currentPage, setPage }) => {
  console.log(currentPage);
  return (
    <div className="menu">
      {menuItems.map((item) => (
        <a
          key={item.url}
          href="#"
          className={currentPage === item.url ? "menuItem active" : "menuItem"}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.url);
          }}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};
export default Menu;
