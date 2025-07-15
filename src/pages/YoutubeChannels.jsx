import {sections} from "../data/sections.js";
import {Section} from "../components/Section/index.jsx";
import {Link} from "react-router-dom";

function YoutubeChannels() {
  const youtubeSection = sections.find(s => s.type === "youtube");

  if (!youtubeSection) return null;
  
  return (
    <main>
      <Section
        id={sections.indexOf(youtubeSection)}
        title={youtubeSection.title}
        legend={youtubeSection.legend}
        className={youtubeSection.className}
        link={youtubeSection.link}
      />
      <Link to={`/`}><button className={"btn btn-dark border-0 rounded-2 w-100"}>Ver todos os outros links</button></Link>
    </main>
  )
}

export default YoutubeChannels;