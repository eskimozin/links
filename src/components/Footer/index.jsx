import './index.css'

import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import moment from "moment";
import Util from "../../assets/Util.jsx";

moment.locale("pt-BR");

function Footer() {
  const [dataBuild, setDataBuild] = useState({datetimeCreate: null});
  
  useEffect(() => {
    fetch((window.location.pathname !== "/" ? "." : "") + "./links/info/register.build.json").then((response) => {
      response.json().then((data) => {
        setDataBuild({...data});
      });
    });
  }, []);
  
  const styles = {fontFamily: '"Inter Tight", "Inter", sans-serif', letterSpacing: -0.20};
  
  return (
    <footer className={"footer text-center pb-5"}>
      <div className={"text text-white text-always-balance m-0 p-0"}>
        <span className={"font-inter"} style={{...styles}}>Se algum link estiver desatualizado, avise os mods.</span><br/>
        <Link to={"https://github.com/gabriersdev"} className={"text-decoration-none d-flex align-items-center justify-content-center gap-1"} style={{...styles, color: "inherit"}}>
          <span>Feito com 💖 pelo Gabriel</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
          </svg>
        </Link>
      </div>
      
      <div>
        {
          dataBuild && (
            <div className={"p-0 m-0 fs-inherit text-white text-always-balance text-sml"}>
              {dataBuild.datetimeCreate && <span>Versão de build: {Util.renderText(moment(dataBuild.datetimeCreate).utc(true).format("HH[h]mm[m] DD/MM/YYYY [GMT-03:00]"))}</span>}
            </div>
          )
        }
        
        <Link to={"/create-campaigns"} className={"text-white-50 d-block"}>
          Gerenciamento de campanhas
        </Link>
      </div>
    </footer>
  );
}

export {Footer};
