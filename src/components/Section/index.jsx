import PropTypes from 'prop-types';
import {List} from "../List";
import './index.css'

const renderText = (text) => {
  // Usa regex para encontrar todas as barras e as envolve em spans
  return text.split(/(\/)/).map((part, index) => {
    if (part === "/") {
      return <span key={index} style={{fontSize: 'inherit', fontFamily: "'Arial', sans-serif"}}>/</span>; // Adiciona uma key para o React
    }
    return part;
  });
};

function Section({title, legend, className, id, link}) {
  return (
    <section className={"d-relative" + (className.includes("donate-section") ? " donate-section cursor-pointer" : "")}
             onClick={() => {
               if (className.includes("donate-section")) window.open(link, "_blank", "noopener noreferrer");
             }}
    >
      <div className={"d-absolute top-0 gradient-area"}></div>
      <div className={"d-flex justify-content-center align-items-center flex-column"}>
        {["channel-list", "general-list incidente"].includes(className) ?
          <hgroup className={"title-channel-list"}>
            <h2>{title}</h2>
            {className === "channel-list" ?
              <img src={"./img/youtube.jpg"} loading="lazy" className={"badge-channel-list"}/> : ""}
            {className === "general-list incidente" ?
              <img src={"./img/oincidente.jpg"} loading="lazy" className={"badge-channel-list"}/> : ""}
          </hgroup> :
          <h2>{renderText(title)}</h2>}
        <p className={"text-muted"}>{renderText(legend)}</p>
        <List
          id={id}
          className={className}
        />
      </div>
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  legend: PropTypes.string,
  link: PropTypes.string,
};

export {Section}