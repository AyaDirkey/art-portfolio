import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <Router>
        <HomePage />
      </Router>
  );
}

export default App;
