import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export default function BaseComponents({children}) {
  const location = useLocation();
  
  useEffect(() => {
    try {
      // Verificar se #[id] existe e rolar a página até ele
      if (location.hash && (location.pathname !== "lines") && !location.pathname?.split("/")?.[1]?.match(/\d/)) {
        const id = location.hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) window.scrollTo({top: element.offsetTop, behavior: 'smooth'})
        else {
          setTimeout(() => {
            window.scrollTo({top: 0, behavior: 'smooth'})
          }, 100);
        }
      } else if (!location.pathname.match(/lines\/\d+\/#\w+/)) {
        setTimeout(() => {
          window.scrollTo({top: 0, behavior: 'smooth'})
        }, 100);
      }
    } catch (error) {
      console.log('Ocorreu um erro ao tentar verificar os parâmetros passados. %s', error);
    }
  }, [location]);
  
  return <>{children}</>
}

BaseComponents.propTypes = {
  children: PropTypes.node
}