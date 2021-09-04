import "./Header.css";

import Nav from "./Nav";
import CompanyLogo from "../assets/images/BBRR Solutions without background.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header_item">
        <img src={CompanyLogo} alt="BBRR Logo" id="company_logo" />
      </div>

      <h1 className="header_item">You have the idea, we got you there...</h1>
      <Nav />
    </div>
  );
}
