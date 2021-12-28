import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <Link to="/listItem">
          <li>اضف منتجك</li>
        </Link>
        <Link to="instruction">
          <li>كيف يعمل</li>
        </Link>
      </ul>
    </>
  );
}

export default NavBar;
