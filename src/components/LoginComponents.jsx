import React from 'react';

const LoginComponents = () => {
  return (
    <>
      <div className="login">
  <div className="container">
    <div className="row">
      <div className="col-7">
        <div className="align-center">
          <div className="content">
            <img src="img/fb.png" alt="" />
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </div>
      </div>
      <div className="col-5 col-xs-12">
        <div className="login-form">
          <form action="">
            <input
              id="email"
              type="text"
              placeholder="Email address or phone number"
            />
            <br />
            <input id="pass" type="text" placeholder="Password" />
            <br />
            <button id="login-btn">Log In</button>
            <br />
            <a href="#">Forgotten password?</a>
            <br />
            <button id="create-btn">Create New Account</button>
            <br />
          </form>
        </div>
        <footer>
          <a
            href="#"
            style={{
              fontWeight: "bold",
              color: "var(--black)",
              textDecoration: "none"
            }}
          >
            Create a Page
          </a>
          for a celebrity, band or business.
        </footer>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default LoginComponents;
