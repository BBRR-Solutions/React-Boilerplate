import { Link } from "react-router-dom";

import "./NavBtn.css";

export default function NavBtn({ button_path, button_text }) {
  return (
    <div>
      <Link to={button_path}>
        <StdBtn text={button_text} />
      </Link>
    </div>
  );
}
