import Home from "./Components/Home/Home";
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner'
import axios from "axios";
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
   
      <div className="AppContainer">
      
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
      {!isLoading && <Home />}
      
    </div>
   
    
  );
}

export default App;
