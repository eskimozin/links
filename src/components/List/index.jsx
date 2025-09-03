import ProtoTypes from 'prop-types';
import {sections as sectionGeneral} from '../../data/sections.js'
import {sections as multiStreamSections} from '../../data/lives.js'
import './index.css'
import {useContext} from "react";
import {ThemeContext} from "../AppContext/AppContext.jsx";

const renderText = (text) => {
  // Usa regex para encontrar todas as barras e as envolve em spans
  return text.split(/(\/)/).map((part, index) => {
    if (part === "/") {
      return <span key={index} style={{fontSize: 'inherit', fontFamily: "'Arial', sans-serif"}}>/</span>; // Adiciona uma key para o React
    }
    return part;
  });
};

function List({className, id, type}) {
  const {pathname} = useContext(ThemeContext);
  
  const sections = type === "ms" ? multiStreamSections : sectionGeneral;
  const list = !sections[id].listItems[0].order ? sections[id].listItems.filter((e) => e.visible === undefined || e.visible === true).sort((a, b) => a.title ? a.title.localeCompare(b.title) : a.alt.localeCompare(b.alt)) : sections[id].listItems.sort((a, b) => a.order - b.order)
  
  return (
    <ul className={className}>
      {
        list.map((item, index) => {
          return (
            <li key={index} data-toggle="tooltip" data-placement="top" data-bs-custom-class="custom-tooltip" title={item.title === undefined ? item.alt : item.title}>
              <a target="_blank" rel="noreferrer noopener" href={item.link} onClick={(e) => e.stopPropagation()}>
                <img src={item.img.startsWith(".") ? ((pathname ? "." : "" ) + item.img) : item.img} alt={item.alt} className={item.imgStyle ? item.imgStyle : ''} loading="lazy"/>
              </a>
              <a target="_blank" rel="noreferrer noopener" href={item.link} onClick={(e) => e.stopPropagation()}>
                {className === "social-list" ? <h3 className={"title"}>{item.nick}</h3> : <h3 className={"title"}>{renderText(item.name)}</h3>}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

List.propTypes = {
  className: ProtoTypes.string,
  id: ProtoTypes.number,
  type: ProtoTypes.string,
}

export {List}