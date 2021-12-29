import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const state = useSelector((state) => {
    return {
      sign: state.sign
    };
  });

  return (
    <>
      <ul>
        {state.sign.token ? (
          ""
        ) : (
          <Link to="/LoginOrSignup">
            <li>تسجيل الدخول / الانضمام</li>
          </Link>
        )}
        <Link to="/Instruction">
          <li>كيف يعمل</li>
        </Link>
        <Link to="/ListItem">
          <li>تصفح المنتجات</li>
        </Link>
        <Link to="/ContactUs">
          <li>المساعدة</li>
        </Link>
      </ul>
    </>
  );
}

export default Footer;
