import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";
import useScrollBounce from "./components/ScrollBounce";

function App() {
  useScrollBounce();
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
