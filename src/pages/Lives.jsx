import {Section} from "../components/Section/index.jsx";
import {Link} from "react-router-dom";
import {sections} from "../data/lives.js";

function Lives() {
  const multiStreamSections = [...sections];

  if (!multiStreamSections) return null;
  
  return (
    <main className={"page-lives"}>
      {
        multiStreamSections.map((section, index) => (
          <Section
            key={index}
            id={0}
            title={section.title}
            legend={section.legend}
            className={section.className}
            link={section.link}
            sectionListType={"ms"}
          />
        ))
      }
      <Link to={`/`}><button className={"btn btn-dark border-0 rounded-2 w-100"}>Ver todos os outros links</button></Link>
    </main>
  )
}

export default Lives;