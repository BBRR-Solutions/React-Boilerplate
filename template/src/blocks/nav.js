import "./nav.css";

import Stdbtn from "../components/std-button.js";

export default function Nav() {
  return (
    <div className='nav'>
      <Stdbtn button_text='Home' button_path='/' />
      <Stdbtn button_text='Contact us' button_path='/Contact-us' />
    </div>
  );
}
