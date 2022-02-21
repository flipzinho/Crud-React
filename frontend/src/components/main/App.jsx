import Logo from "../template/Logo";
import Footer from "../template/Footer";
import Routes from "./Routes";
import Nav from "../template/Nav";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter } from "react-router-dom";

    function App () {
        return(
            <BrowserRouter>
          
            <div className="app">
                
                <Logo/>
                <Nav/>
                <Routes/>
               <Footer/> 
             
            </div>
            </BrowserRouter>
                )

    }
      
    
  

export default App