import {Suspense, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Loading from "./components/Loading/Loading.jsx";
import {AppContext} from "./components/AppContext/AppContext.jsx";
import BaseComponent from "./components/BaseComponents/BaseComponents.jsx";

import Home from "./pages/Home.jsx";
import Lives from "./pages/Lives.jsx";
import YoutubeChannels from "./pages/YoutubeChannels.jsx";
import ManageCampaigns from "./pages/ManageCampaigns.jsx";
import Censo from "./pages/Censo.jsx";

const MainLayout = () => {
  return (
    <BaseComponent>
      <Header className="Header"/>
      <Outlet />
      <Footer/>
    </BaseComponent>
  );
};

function App() {
  useEffect(() => {
    new bootstrap.Tooltip(document.body, {
      selector: '[data-toggle="tooltip"]',
    });
    
    document.querySelectorAll('a').forEach(link => {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
    });
  }, []);
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      if (document) document.querySelector(".overlay-appx").style.display = "none";
    }, 250);
  }, []);
  
  return (
    <AppContext value={{}}>
      <BrowserRouter basename="/links">
        <Suspense fallback={<Loading/>}>
          <div className="App">
            <Routes>
              {/* Rota especial sem o layout principal */}
              <Route path="/censo" element={<Censo />} />

              {/* Rotas que utilizam o layout principal */}
              <Route element={<MainLayout />}>
                <Route index element={<Home/>}/>
                <Route path="/youtube" element={<YoutubeChannels/>}/>
                <Route path="/lives" element={<Lives/>}/>
                <Route path="/create-campaigns" element={<ManageCampaigns/>}/>
              </Route>

              {/* Rota 404 - deve ser a última */}
              <Route path="*" element={<h3 className={"fs-3 text-white text-center my-5 py-5 lh-base fw-semibold"}>#404<br/>Desculpe, mas esta página não existe :(</h3>}/>
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
