import {Suspense, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import {BrowserRouter, Route, Routes, Outlet, useLocation} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Loading from "./components/Loading/Loading.jsx";
import {AppContext} from "./components/AppContext/AppContext.jsx";
import BaseComponent from "./components/BaseComponents/BaseComponents.jsx";
import NoExists from "./pages/NoExists.jsx";
import {routes} from "./routes.js";

const MainLayout = () => {
  return (
    <BaseComponent>
      <Header className="Header"/>
      <Outlet/>
      <Footer/>
    </BaseComponent>
  );
};

// Este componente irá forçar uma barra final apenas na rota base.
const GlobalSlashEnforcer = () => {
  const location = useLocation();
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/links') {
      window.history.replaceState(null, '', path + '/');
    }
  }, [location]); // Re-executa quando a localização muda.
  
  return null;
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
        <GlobalSlashEnforcer/>
        <Suspense fallback={<Loading/>}>
          <div className="App">
            <Routes>
              {/* Rotas que utilizam o layout principal */}
              <Route element={<MainLayout/>}>
                {routes.map((route) => {
                  const {path, component: Component, isIndex} = route;
                  if (isIndex) return <Route index element={<Component/>} key="index"/>;
                  return <Route path={path} element={<Component/>} key={path}/>;
                })}
                <Route path="*" element={<NoExists/>}/>
              </Route>
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
