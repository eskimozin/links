import './index.css'
import {contacts} from '../../data/contacts.js'
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../AppContext/AppContext.jsx";
import {useNavigate, useLocation} from "react-router-dom";

function Header() {
  const {mail} = contacts;
  const {pathname} = useContext(ThemeContext);
  const location = useLocation();

  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  
  const control = () => {
    if (document.querySelector("body").classList.contains("modal-open")) setShow(false);
    else setShow(true);
  }
  
  useEffect(() => {
    control();
    
    const int = setInterval(() => {
      control();
    }, 1000);
    
    return () => {
      clearInterval(int);
    }
  }, []);
  
  return (
    <>
      {
        show && (
          <section className={"animate-from-bottom menu d-flex align-items-center justify-content-center position-sticky z-3"} style={{top: "2rem", left: "0"}}>
            <div className={"mb-5 top-0 d-inline-flex px-4 py-2 rounded-2"} style={{background: "#FFFFFF35", border: "1px solid #FFFFFF25", backdropFilter: "blur(20px)"}}>
              <ul className={"m-0 p-0 d-flex align-items-center flex-wrap gap-3 gap-md-4"}>
                {
                  [
                    ["Home", "/"],
                    ["Youtube", "/youtube"],
                    ["Lives", "/lives"]
                  ].map((item, index) => (
                    <li className={`menu-item-link rounded-pill cursor-pointer ${location?.pathname === item[1] ? "fw-bold" : ""}`} role={"link"} key={index} onClick={(e) => {
                      e.preventDefault();
                      navigate(item[1] || "/");
                    }}
                    >
                      {item[0]}
                    </li>
                  ))
                }
              </ul>
            </div>
          </section>
        )
      }
      
      <header className="animate-from-bottom">
        <div className={"gradient-area"}>
          <a
            href="https://kick.com/eskimozin"
            rel="noreferrer noopener"
            data-toggle="tooltip"
            data-placement="top"
            data-bs-custom-class="custom-tooltip"
            title="Whiskimo na KICK"
          >
            <img src={pathname ? "../img/favicon.png" : "./img/favicon.png"} alt="Imagem do Eskimozin"/>
          </a>
        </div>
        <h1>Eskimozin</h1>
        <a href={`mailto:${mail}`} className={"link-style"} rel={"noreferrer noopener"} data-ref={"eskimozin-mail"}>{mail}</a>
      </header>
    </>
  )
}

export {Header}