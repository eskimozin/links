import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    new bootstrap.Tooltip(document.body, {
      selector: '[data-toggle="tooltip"]',
    });
  }, [])

  return (
    <div className="App">
      <Header className="Header"></Header>
      <Main className="Main"/>
      <Footer/>
    </div>
  );
}

export default App;
