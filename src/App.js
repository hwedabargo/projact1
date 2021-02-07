import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Navbar/FirstNavbar/Navbar/Home/Home';
// import SNavbar from './Components/Navbar/SecandNavbar/SNavbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import updates from "./Components/Navbar/FirstNavbar/Navbar/updates/updates";
import Gallery from "./Components/Navbar/FirstNavbar/Navbar/Gallery/Gallery";
import favorite from "./Components/Navbar/FirstNavbar/Navbar/favorite/favorite";
import Navbar from "./Components/Navbar/FirstNavbar/Navbar/NavbarMain/NavbarMain";
import Contact from "./Components/Navbar/FirstNavbar/Navbar/Contact/Contact";
import AboutUs from "./Components/Navbar/FirstNavbar/Navbar/AboutUs/AboutUs";
import Footer from "./Components/Navbar/FirstNavbar/Navbar/Contact/Footer/Footer";
import CallNow from "./Components/Navbar/FirstNavbar/Navbar/CallNow/CallNow";
import AdminDachboard from "./Components/AdminCard/AdminDashboard";

// import PrivetRouter from "./Components/AdminCard/PrivetRouter";

// import GalleryData from './components/GalleryData';

function App() {
  // const [gallery,setGallery]=useState(GalleryData);
  const [isAuth,setIsAuth]=useState(false);
  const login =()=>setIsAuth(true);
  const logout =()=>setIsAuth(false);
    return (
    <BrowserRouter>
    <div className="App">
      <Navbar login={login} logout={logout}  isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/updates" component={updates}  />
            <Route path="/favorite" component={favorite} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Contact" component={Contact} />
            <Route path="/CallNow" component={CallNow} />
            <Route path="/AdminDashboard"   component={AdminDachboard} />
          
            {/* <Route path="/favorite" component={} /> */}
            </Switch>
        {/* <Home/> */}
      {/* <SNavbar/>  */}
     {/* <Updates/> */}
     {/* <Gallery/> */}
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
