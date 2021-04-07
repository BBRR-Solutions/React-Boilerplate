//* Dependencies imported on the JS File
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//* CSS Files applied on the JS File
import "./stylesheet.css";

//* Components imported on the JS File
import Header from "./blocks/header.js";
import Footer from "./blocks/footer.js";

//* Components rendered by react-router-dom
import Home from "./pages/home.js";
import Contactus from "./pages/contact-us.js";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact-us' component={Contactus} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
