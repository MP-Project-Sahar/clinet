import React, { useState } from "react";

function LoginOrSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkEmail, setCheckEmail] = useState(false); // true if checked
  const [login, setLogin] = useState(false); // true if email exist

  return (
    <>
      {checkEmail ? (
        <>
          {login ? (
            <>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={""}>تسجيل الدخول</button>
            </>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <button onClick={""}>انضمام</button>
            </>
          )}
        </>
      ) : (
        <>
          {" "}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={""}>مواصلة</button>{" "}
        </>
      )}
    </>
  );
}

export default LoginOrSignup;
