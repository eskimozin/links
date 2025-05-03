import './index.css'
import PropTypes from "prop-types";

function Banner({title, subtitle, link, legend, linkName}) {
  let linkImg = <></>

  if (linkName.toLowerCase().includes("spotify")) {
    linkImg = <>&nbsp;<img src={"./img/spotify.png"} alt={"Logo do Spotify"} width={"16px"} height={"16px"}/></>
  } else if (linkName.toLowerCase().includes("twitch")) {
    linkImg = <>&nbsp;<img src={"./img/twitch.jpg"} alt={"Logo da Twitch"} width={"16px"} height={"16px"}/></>
  } else if (linkName.toLowerCase().includes("discord")) {
    linkImg = <>&nbsp;<img src={"./img/discord.jpg"} alt={"Logo do Discord"} width={"16px"} height={"16px"}/></>
  } else if (linkName.toLowerCase().includes("youtube")) {
    linkImg = <>&nbsp;<img src={"./img/youtube.jpg"} alt={"Logo do YouTube"} width={"16px"} height={"16px"}/></>
  }

  const renderText = (text) => {
    // Usa regex para encontrar todas as barras e as envolve em spans
    return text.split(/(\/)/).map((part, index) => {
      if (part === "/") {
        return <span key={index} style={{fontSize: 'inherit', fontFamily: "'Arial', sans-serif"}}>/</span>; // Adiciona uma key para o React
      }
      return part;
    });
  };

  return (
    // Display the banner only when the class "d-none" is not present
    <a href={link}
       className="text-decoration-none"
       target="_blank"
       rel="noreferrer noopener"
    >
      <section className="banner">
        <span className={"badge"}>OUT NOW</span>
        <h2 className={"title mb-0 text-balance"}>{title}</h2>
        <h2 className={"title mt-1 emphasis fw-bold text-balance"}>{renderText(subtitle)}</h2>
        <p className={"description text-balance"}>
          <span className={"text-muted"}>{legend}</span>{legend ? " " : null}
          <span>{renderText(linkName)}</span>
          <span>{linkImg}</span>
        </p>
      </section>
    </a>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  legend: PropTypes.string,
  linkName: PropTypes.string.isRequired
}

export {Banner}
