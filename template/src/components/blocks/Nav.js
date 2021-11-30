import "styles/Nav.css";

import NavBtn from "components/NavBtn";

export default function Nav() {
  return (
    <div className="Nav">
      <NavBtn ButtonText="Home" ButtonPath="/" />
      <NavBtn ButtonText="Contact us" ButtonPath="/Contact-us" />
      <NavBtn ButtonText="Test Features" ButtonPath="/Test-Features" />
    </div>
  );
}
