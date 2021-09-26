/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import LandingPage from 'views/examples/LandingPage.js';
import LoginPage from 'views/examples/LoginPage.js';
import ProfilePage from 'views/examples/ProfilePage.js';
import RegisterPage from 'views/examples/RegisterPage.js';

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      {/* <IndexNavbar />
      <IndexHeader /> */}
      <div className="main">
        <LandingPage />
        {/* <LoginPage/> */}
        {/* <ProfilePage/> */}
        {/* <RegisterPage/> */}
      </div>
    </>
  );
}

export default Index;
