import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/sign";

function NavBar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout({ user: "", token: "" }));
    navigate(`/`);
  };

  const state = useSelector((state) => {
    return {
      sign: state.sign
    };
  });

  return (
    <>
      <Link to="/">LOGO</Link>
      <ul>
        <Link to="/ListItem">
          <li>اضف منتجك</li>
        </Link>
        <Link to="/instruction">
          <li>كيف يعمل</li>
        </Link>
        {state.sign.token ? (
          <>
            {state.sign.role === "admin" ? (
              <Link to="/Dashboard">
                <li>لوحة التحكم</li>
              </Link>
            ) : (
              <>
                <Link to="/Inbox">
                  <li>الرسائل</li>
                </Link>
                <Link to="/Rentals">
                  <li>الايجارات</li>
                </Link>
                <Link to="/Favorites">
                  <li>المفضلة</li>
                </Link>
                <Link to="/Profile">
                  <li>الحساب</li>
                </Link>
                <Link to="/Profile">
                  <li>منتجاتي</li>
                </Link>
              </>
            )}

            <li>تسجيل خروج</li>
            {/* onClick={logOut} */}
          </>
        ) : (
          <Link to="/LoginOrSignup">
            <li>تسجيل الدخول أو الانضمام</li>
          </Link>
        )}
      </ul>
    </>
  );
}

export default NavBar;
