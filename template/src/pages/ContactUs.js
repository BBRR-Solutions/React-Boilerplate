import "./Body.css";

import GoToTop from "../assets/scripts/go-to-top";

export default function ContactUs() {
  return (
    <div className="body">
      <p>
        For more projects visit our website at{" "}
        <a href="https://dev.bbrr.solutions">dev.bbrr.solutions</a>
      </p>
      <br />
      <p>
        See also the repository for <b>BBRR Solutions CRA Template</b> at{" "}
        <a href="https://dev.azure.com/BBRRSolutions/BBRR%20DevOps/_git/React%20Boilerplate">
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
