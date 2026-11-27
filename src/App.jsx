import {Suspense, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import {BrowserRouter, Navigate, Route, Routes, Outlet, useLocation, useNavigate} from "react-router-dom";

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

// Normaliza rotas no formato hash (ex.: #/youtube, #/links, #/links/youtube) para rotas do BrowserRouter.
const normalizeHashPath = (hash) => {
  if (!hash || !hash.startsWith('#/')) {
    return null;
  }

  const rawPath = hash.slice(1);
  const [pathPart, queryAndHash = ''] = rawPath.split(/(?=[?#])/);

  let normalizedPath = pathPart.replace(/^\/links(?=\/|$)/, '') || '/';
  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return `${normalizedPath}${queryAndHash}`;
};

// Este componente irá forçar uma barra final apenas na rota base, preservando query e hash.
const GlobalSlashEnforcer = () => {
  const location = useLocation();
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/links') {
      window.history.replaceState(null, '', `${path}/${window.location.search}${window.location.hash}`);
    }
  }, [location]); // Re-executa quando a localização muda.
  
  return null;
};

// Permite que URLs no formato HashRouter (ex.: /links/#/youtube, /links/#/links) funcionem junto com o BrowserRouter.
const HashRouteHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const syncHashRoute = () => {
      const targetPath = normalizeHashPath(window.location.hash);
      if (targetPath) {
        navigate(targetPath, {replace: true});
      }
    };

    syncHashRoute();
    window.addEventListener('hashchange', syncHashRoute);

    return () => {
      window.removeEventListener('hashchange', syncHashRoute);
    };
  }, [location.hash, navigate]);

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
        <HashRouteHandler/>
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
                <Route path="/links" element={<Navigate to="/" replace/>}/>
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
