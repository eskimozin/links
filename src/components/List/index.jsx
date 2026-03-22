import {images} from '../../utils/images.js'
import ProtoTypes from 'prop-types';
import {sections as sectionGeneral} from '../../data/sections.js'
import {sections as multiStreamSections} from '../../data/lives.js'
import './index.css'
import {useContext} from "react";
import {ThemeContext} from "../AppContext/AppContext.jsx";

// Função para processar imagens dinamicamente
const getImageSrc = (imgPath) => {
  // Se já for uma URL completa ou importação, retorna como está
  if (!imgPath.startsWith("./") && !imgPath.startsWith("../")) {
    return imgPath;
  }
  
  // Remove o prefixo "./" ou "../" e busca no objeto de imagens
  const cleanPath = imgPath.replace(/^\.+\//, "");
  const imageName = cleanPath.split("/").pop().split(".")[0];
  
  // Mapeamento de nomes de imagem para as importações
  const imageMap = {
    "favicon": images.favicon,
    "brain-made": images.brainMade,
    "back": images.back,
    "bsky": images.bsky,
    "discord": images.discord,
    "instagram": images.instagram,
    "kick": images.kick,
    "live-pix": images.livePix,
    "mentiras-medos-minhocas": images.mentirasMedosMinhocas,
    "paypal": images.paypal,
    "reddit": images.reddit,
    "soundcloud": images.soundcloud,
    "spotify": images.spotify,
    "steam": images.steam,
    "tiktok": images.tiktok,
    "twitch": images.twitch,
    "twitter": images.twitter,
    "youtube": images.youtube
  };
  
  return imageMap[imageName] || imgPath;
};

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
            <li
              key={index}
              data-toggle="tooltip"
              data-placement="top"
              data-bs-custom-class="custom-tooltip"
              title={
                (item.title === undefined ? item.alt : item.title).toUpperCase() === "KICK" ?
                  (item.title === undefined ? item.alt : item.title).toUpperCase() :
                  item.title === undefined ? item.alt : item.title
              }
            >
              <a target="_blank" className={"w-100"} rel="noreferrer noopener" href={item.link} onClick={(e) => e.stopPropagation()}>
                <div className={"d-flex justify-content-center align-items-center p-0 m-0 rounded-0 bg-transparent border-0"} style={{background: "unset"}}>
                  <img src={getImageSrc(item.img, pathname)} alt={item.alt} className={'w-auto bg-transparent border-0 ' + (item.imgStyle ? item.imgStyle : '')} loading="lazy"/>
                </div>
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
