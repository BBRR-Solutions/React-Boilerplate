import "styles/Header.css";

import Nav from "components/Nav";
import CompanyLogo from "assets/images/BBRR Solutions without background.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderItem">
        <img src={CompanyLogo} alt="BBRR Logo" id="CompanyLogo" />
      </div>

      <h1 className="HeaderItem">You have the idea, we got you there...</h1>
      <Nav />
    </div>
  );
}
