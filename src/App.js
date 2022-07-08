import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import CarList from "./Pages/carList/CarList";
import About from "./Pages/About/About";
import AddCar from "./Pages/addCar/AddCar";
const LazyHome = React.lazy(() => import ("./Pages/Home/Home"));

function App() {


  return (
    <div className="App">
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/getCar/:id" element={<CarDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<React.Suspense fallback='Loading...'><LazyHome /></React.Suspense>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/car-list" element={<CarList />} />
            <Route path="/add-car" element={<AddCar />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
