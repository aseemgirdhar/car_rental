import React , {createContext, useEffect, useState} from "react";
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
const data = createContext();


function App() {
  const localUser = JSON.parse(localStorage.getItem('userInfo'))
  const sessionUser = JSON.parse(sessionStorage.getItem('userInfo'))
  const [user, setUser] = React.useState(localUser?localUser:sessionUser?sessionUser:null)

  useEffect(()=>{
    localStorage.setItem('userInfo',JSON.stringify(user))
  },[user])


  return (
    <div className="App">
      
      <main>
        <Router>
        
            <Header user={user} />
         
          <Routes>
            <Route path="/" element={<React.Suspense fallback='Loading...'><LazyHome /></React.Suspense>} />
            <Route path="/about" element={<About />} />
            <Route path="/getCar/:id" element={<CarDetails />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
            <Route path="/dashboard" element={<React.Suspense fallback='Loading...'><LazyHome user={user}/></React.Suspense>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/car-list" element={<CarList user={user}/>} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/login" element={<Login setUser={setUser}/>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
export {data};