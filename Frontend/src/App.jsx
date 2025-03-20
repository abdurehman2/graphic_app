import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ClassifierPage from "./pages/ClassifierPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to LandingPage */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/About-Us" element={<AboutUsPage />} />
        <Route path="/Classifier" element={<ClassifierPage />} />

        {/* Any unknown route redirects to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
