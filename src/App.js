import Home from "./views/Home/Home";
import React, { useState, useEffect,useRef } from 'react';
import { TailSpin } from 'react-loader-spinner'
import store from "./store/store"
import MedPharmRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Headroom from "react-headroom";
import { Provider } from "react-redux";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import { Toaster } from "react-hot-toast";
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const tawkMessengerRef = useRef();


  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  const AppContainer = {
    minWidth: "600px",
    margin: "0 auto"
  }
  return (
    <div className="AppContainer max-w-7xl mx-auto">
      <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
      <Provider store={store}>
        <BrowserRouter>

          <div>
            <Headroom>
              <Header />
              <Nav />
            </Headroom>
            <TawkMessengerReact
              propertyId="649b1fdbcc26a871b025037d"
              widgetId="1h3uv8tcc"
              ref={tawkMessengerRef}
              />

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
        </BrowserRouter>
      </Provider>
    </div>


  );
}

export default App;
