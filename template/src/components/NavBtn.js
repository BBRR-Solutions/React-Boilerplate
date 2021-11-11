import { Link } from "react-router-dom";

import "./NavBtn.css";

import StdBtn from "./StdBtn";

export default function NavBtn({ ButtonPath, ButtonText }) {
  return (
    <div className="NavButtonContainer">
      <Link to={ButtonPath}>
        <StdBtn Text={ButtonText} />
      </Link>
    </div>
  );
}
