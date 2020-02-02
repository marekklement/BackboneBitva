import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footer/Footer.js";
import About from "components/About/AboutUs.js";
import Contact from "components/Contacts/Contacts.js";
import Sponsors from "components/Sponsors/Sponsors.js";

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
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div id="o-nas">
          <About />
        </div>
        <div id="sponzori">
          <Sponsors />
        </div>
        <div id="kontakt">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
