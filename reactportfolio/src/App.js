import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <Header />

      <Footer />
    </Router>
  );
}

export default App;
