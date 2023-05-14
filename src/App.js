import Home from "./views/Home/Home";
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner'
import axios from "axios";
import { Suspense } from "react";
import MedPharmRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
function App() {

  const [isLoading, setIsLoading] = useState(true);

 
  
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);
  
  const AppContainer = {
    minWidth:"600px",
    margin:"0 auto"
  }
  return (
    <Router>

    
   
      <div className="AppContainer">
      <Header />
      <Nav />
      {isLoading && (
       <div className="fixed inset-0 flex justify-center items-center">
       <TailSpin
         height="80"
         width="80"
         color="#10847e"
         ariaLabel="tail-spin-loading"
         radius="1"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
       />
     </div>  
      )}
      {!isLoading && <MedPharmRoutes />}
    </div>
    <Footer />
    </Router>
    
  );
}

export default App;
