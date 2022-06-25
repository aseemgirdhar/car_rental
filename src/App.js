import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import CarList from "./Pages/carList/CarList";


function App({location}) {
  return (
    <div className="App">
     
      <main>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/details" element={<CarDetails />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/car-list" element={<CarList />} />
          </Routes>
          <Footer />
        </Router>
      </main>
     
    </div>
  );
}

export default App;
