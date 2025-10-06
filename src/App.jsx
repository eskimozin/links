import {Suspense, useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {baseUrl} from "./data/config.js";

import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import {HashRouter, Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {AppContext} from "./components/AppContext/AppContext.jsx";
import Loading from "./components/Loading/Loading.jsx";

import Home from "./pages/Home.jsx";
import YoutubeChannels from "./pages/YoutubeChannels.jsx";
import Lives from "./pages/Lives.jsx";
import ManageCampaigns from "./pages/ManageCampaigns.jsx";


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
  }, []);
  
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
  
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".overlay-appx").style.display = "none";
    }, 250);
  }, []);
  
  return (
    <AppContext value={{pathname, setPathname}}>
      <HashRouter>
        <Suspense fallback={<Loading/>}>
          <div className="App">
            <Header className="Header"/>
            <Routes>
              <Route path={`*`} element={<h3 className={"fs-3 text-white text-center my-5 py-5 lh-base fw-semibold"}>#404<br/>Desculpe, mas esta página não existe :(</h3>}/>
              <Route path={`/`} element={<Home/>}/>
              <Route path={`/youtube`} element={<YoutubeChannels/>}/>
              <Route path={`/lives`} element={<Lives/>}/>
              <Route path={`/create-campaigns`} element={<ManageCampaigns/>}/>
            </Routes>
            <Footer/>
          </div>
        </Suspense>
      </HashRouter>
    </AppContext>
  );
}

export default App;
