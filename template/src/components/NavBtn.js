import { Link } from "react-router-dom";

import "styles/NavBtn.css";

import StdBtn from "components/StdBtn";

export default function NavBtn({ ButtonPath, ButtonText }) {
  return (
    <div className="NavButtonContainer">
      <Link to={ButtonPath}>
        <StdBtn Text={ButtonText} />
      </Link>
    </div>
  );
}
