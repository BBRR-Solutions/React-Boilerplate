import { Link } from "react-router-dom";

import "./NavBtn.css";

import StdBtn from "./StdBtn";

export default function NavBtn({ button_path, button_text }) {
  return (
    <div className="NavButtonContainer">
      <Link to={button_path}>
        <StdBtn text={button_text} />
      </Link>
    </div>
  );
}
