import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<CarDetails />} /> 
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
