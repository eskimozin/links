import { Section } from '../Section'
import { sections } from '../../data/sections.js'
import './index.css'
import {Campaings} from "../Campaings/index.jsx";

function Main() {
  return (
    <main>
      <Campaings key={"campaing"} />
      {
        sections.map(function (secao, index) {
          return (
            <Section
              id={index}
              key={index}
              title={secao.title}
              legend={secao.legend}
              className={secao.className}
              link={secao.link}
            />
          )
        })
      }
    </main>
  )
}

export { Main }