import { color } from "@chakra-ui/react";
import React, { useState } from "react";
import SignIn from "./Signin";
import "./style/Signup.css";

function Signupforfree() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("set data in local login");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="buller">
      {login ? (
        <div className="bigdiv">
          <div className="imgdiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/245px-Airtable_Logo.svg.png?20190330165554
              "
              alt=""
            />
          </div>
          {flag && (
            <h4
              style={{
                color: "red",
                textAlign: "center",
              }}
            >
              Please Fill Every field
            </h4>
          )}
          <form onSubmit={handleSubmit}>
            <div className="textdiv">
              <h2>Create your free account</h2>

              <h6>Work email</h6>
              <input
                type="text"
                style={{
                  padding: "2px",
                }}
                placeholder="Enter Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <h6>Password</h6>
              <input
                type="text"
                style={{
                  padding: "2px",
                }}
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                style={{
                  border: "none",
                  background: "#47B5FF",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Continue
              </button>
            </div>
          </form>
           {/* *****************************GO TO NEXT PAGE BY LOGIN DATA  */}
          <p
            style={{
              textAlign: "center",
              margin: "auto",
            }}
          >
            ------------------------or----------------------
          </p>
          <div className="downdiv">
            <h5 style={{ color: "white" }}>
              Sign up today and try the Pro plan for free
            </h5>
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Signupforfree;
