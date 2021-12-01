import { Link } from "react-router-dom";

import "styles/NavBtn.css";

import StdBtn from "components/StdBtn";

const NavBtn = ({ ButtonPath, ButtonText }) => {
  return (
    <div className="NavButtonContainer">
      <Link to={ButtonPath}>
        <StdBtn Text={ButtonText} />
      </Link>
    </div>
  );
};

export default NavBtn;
