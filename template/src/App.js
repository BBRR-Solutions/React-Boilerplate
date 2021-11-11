//* Dependencies imported on the JS File
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//* Components imported on the JS File
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";

//* Components rendered by react-router-dom
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
