import ProtoTypes from 'prop-types';
import {sections} from '../../data/sections.js'
import './index.css'

function List({className, id}) {
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
              title={item.title === undefined ? item.alt : item.title}
            >
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={item.link}>
                <img src={item.img}
                     alt={item.alt}
                     loading="lazy"
                />
              </a>
              <a target="_blank"
                 rel="noreferrer noopener"
                 href={item.link}>
                {className === "social-list" ? <h3 className={"title"}>{item.nick}</h3> :
                  <h3 className={"title"}>{item.name}</h3>}
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
  id: ProtoTypes.number
}

export {List}