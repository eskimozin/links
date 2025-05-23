import PropTypes from 'prop-types';
import {List} from "../List";
import './index.css'

function Section({title, legend, className, id, link}) {
  return (
    <section className={"d-relative" + (className.includes("donate-section") ? " donate-section cursor-pointer" : "")}
             onClick={() => {
               if (className.includes("donate-section")) window.open(link, "_blank", "noopener noreferrer");
             }}
    >
      <div className={"d-absolute top-0 gradient-area"}></div>
      <div>
        {["channel-list", "general-list incidente"].includes(className) ?
          <hgroup className={"title-channel-list"}>
            <h2>{title}</h2>
            {className === "channel-list" ?
              <img src={"./img/youtube.jpg"} loading="lazy" className={"badge-channel-list"}/> : ""}
            {className === "general-list incidente" ?
              <img src={"./img/oincidente.jpg"} loading="lazy" className={"badge-channel-list"}/> : ""}
          </hgroup> :
          <h2>{title}</h2>}
        <p className={"text-muted"}>{legend}</p>
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