import "./Nav.css";

import NavBtn from "../components/NavBtn";

export default function Nav() {
  return (
    <div className="Nav">
      <NavBtn button_text="Home" button_path="/" />
      <NavBtn button_text="Contact us" button_path="/Contact-us" />
    </div>
  );
}
