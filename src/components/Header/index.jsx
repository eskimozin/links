import './index.css'
import {contacts} from '../../data/contacts.js'
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../AppContext/AppContext.jsx";
import {useNavigate, useLocation, Link} from "react-router-dom";
import LiveBadge from "../LiveBadge/index.jsx";

import moment from "moment";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

moment.locale("America/Sao_Paulo")

function Header() {
  const {mail} = contacts;
  const {pathname} = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const show = useState(true);
  
  const now = moment();
  const maxDTSCenso = moment("2026-02-28T23:59:59");
  
  const [items, setItems] = useState(
    [
      ["Home", "/"],
      ["Youtube", "/youtube"],
      ["Lives", "/lives"],
    ]
  );
  
  const control = () => {
    // if (document.querySelector("body").classList.contains("modal-open")) setShow(false);
    // else setShow(true);
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
  
  useEffect(() => {
    if (now) {
      const diff = now.diff(maxDTSCenso, "seconds");
      if (diff < 1) setItems((prev) => {
        return [...prev, ["Censo", "/censo"]];
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      {
        show && (
          <section className={"animate-from-bottom menu d-flex align-items-center justify-content-center position-sticky z-3"} style={{top: "2rem", width: "100%"}}>
            <div className={"mb-5 top-0 px-4 py-2 rounded-2"} style={{background: "#FFFFFF35", border: "1px solid #FFFFFF25", backdropFilter: "blur(20px)"}}>
              <ul className={"m-0 p-0 d-flex align-items-center justify-content-evenly gap-3 gap-md-3"} style={{minWidth: "325px"}}>
                {
                  [...items].map((item, index) => (
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
          <Link
            to="https://instagram.com/eskimozin"
            rel="noreferrer noopener"
            data-toggle="tooltip"
            data-placement="top"
            data-bs-custom-class="custom-tooltip"
            title="Eskimo no Instagram"
            className={"position-relative"}
          >
            <div className={"d-block rounded-pill px-2 position-absolute top-50 text-body bg-white"} style={{left: "6rem"}}>
              <span className={"text-nowrap text-sml d-block d-none"} style={{margin: "0.125rem 0"}}>em hiato²</span>
            </div>
            <img src={pathname ? "../img/favicon.png" : "./img/favicon.png"} alt="Imagem do Eskimozin"/>
          </Link>
        </div>
        <div
          className={"d-flex flex-wrap gap-2 align-items-center justify-content-center bg-transparent p-0 mx-auto rounded-0 w-auto"}
          style={{background: "unset", padding: 0, margin: 0}}
        >
          
          <h1 className={"m-0 p-0"}>Eskimozin</h1>
          <span className={"text-white-50"}>|</span>
          <Link
            to={"https://brainmade.org/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <OverlayTrigger overlay={
              <Tooltip className={"text-sml"}>
                {
                  "Este projeto foi feito por humanos como você. Human = Good! Essa é a nossa causa."
                    .split(/(?<=[.!?])\s+/)
                    .map((sentence, index) => {
                    return (
                      <span
                        className={`text-balance align-items-center justify-content-center w-auto ${sentence.includes("Human = Good!") ? "bg-success d-inline-flex px-1" : "d-flex"}`}
                        key={index}
                      >
                      {sentence}
                    </span>
                    )
                  })
                }
              </Tooltip>
            }>
              <img
                className={"bg-transparent p-0 m-0 rounded-0 object-fit-contain"}
                src={pathname ? "../img/brain-made.svg" : "./img/brain-made.svg"}
                alt={"Logo da iniciativa \"Brain Made\" - projetos feitos por um humano"}
                style={{background: "unset", padding: 0, margin: 0, width: "80px", height: "40px"}}
              />
            </OverlayTrigger>
          </Link>
        </div>
        <a href={`mailto:${mail}`} className={"link-style"} rel={"noreferrer noopener"} data-ref={"eskimozin-mail"}>{mail}</a>
        <LiveBadge/>
      </header>
    </>
  )
}

export {Header}