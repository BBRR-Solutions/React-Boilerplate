import "./Body.css";

import GoToTop from "../assets/scripts/GoToTop";

export default function ContactUs() {
  return (
    <div className="body">
      <p>
        Visit our website at{" "}
        <a href="https://www.bbrr.solutions">www.bbrr.solutions</a>
      </p>
      <br />
      <p>
        See also the repository for <b>BBRR Solutions CRA Template</b> at{" "}
        <a href="https://github.com/BBRR-Solutions/React-Boilerplate">
          React Boilerplate
        </a>
      </p>
      <br />
      <p>
        Please enjoy our version of create-react-app and share your ideas at{" "}
        <a href="mailto:support@bbrr.solutions">support@bbrr.solutions</a>
      </p>
      <GoToTop />
    </div>
  );
}
