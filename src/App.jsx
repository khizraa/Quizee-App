import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./scripts/NavBar";
import Frontpage from "./scripts/Frontpage";
import Categories from "./scripts/Categories";
import Quiz from "./scripts/Quiz";
import Result from "./scripts/Result";
import Footer from "./scripts/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Frontpage />} />
       
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
