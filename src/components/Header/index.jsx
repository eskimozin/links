import './index.css'
import { contacts } from '../../data/contacts.js'

function Header() {
  const { mail } = contacts

  return (
    <header className="animate-from-bottom">
      <div className={"gradient-area"}>
        <a
          href="https://www.twitch.tv/eskimozin/"
          rel="noreferrer noopener"
          data-toggle="tooltip"
          data-placement="top"
          data-bs-custom-class="custom-tooltip"
          title="Whiskimo na Twitch"
        >
          <img src="./img/favicon.png" alt="Imagem do Eskimozin" />
        </a>
      </div>
      <h1>Eskimozin</h1>
      <a href={`mailto:${mail}`} className={"link-style"} rel={"noreferrer noopener"} data-ref={"eskimozin-mail"}>{mail}</a>
    </header>
  )
}

export { Header }