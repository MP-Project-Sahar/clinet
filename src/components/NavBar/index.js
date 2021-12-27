import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <h1>Nav</h1>
      <ul>
        <Link to="/listItem">
          <li>إضافة</li>
        </Link>
        <Link to="instruction">
          <li>كيف يعمل</li>
        </Link>
      </ul>
    </>
  );
}

export default NavBar;
