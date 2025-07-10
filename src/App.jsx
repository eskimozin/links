import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import YoutubeChannels from "./pages/YoutubeChannels.jsx";
import {baseUrl} from "./data/config.js";
import {AppContext} from "./components/AppContext/AppContext.jsx";

function App() {
  const [pathname, setPathname] = useState("");
  
  useEffect(() => {
    new bootstrap.Tooltip(document.body, {
      selector: '[data-toggle="tooltip"]',
    });
    
    document.querySelectorAll('a').forEach(link => {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
    });
  }, [])
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  useEffect(() => {
    const targetNode = document.body;
    const config = {attributes: true, childList: true, subtree: true};
    setPathname(window.location.pathname.replace(`/${baseUrl}/`, ""));
    
    const callback = () => {
      // const callback = (mutationList) => {
      setPathname(window.location.pathname.replace(`/${baseUrl}/`, ""));
      // for (const mutation of mutationList) {
      // if (mutation.type === "childList") console.log("A child node has been added or removed.");
      // else if (mutation.type === "attributes") console.log(`The ${mutation.attributeName} attribute was modified.`);
      // }
    }
    
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    
    return () => {
      observer.disconnect();
    }
  }, []);
  
  return (
    <AppContext value={{pathname, setPathname}}>
      <BrowserRouter>
        <div className="App">
          <Header className="Header"/>
          <div className="App">
            <Routes>
              <Route path={`${baseUrl}/`} element={<Home/>}/>
              <Route path={`${baseUrl}/youtube`} element={<YoutubeChannels/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
