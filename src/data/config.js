const baseUrl = "links";
const postalBox = false;
const host = window.location.hostname === "localhost" ? "http://localhost:8001" : "https://gabriers.up.railway.app";

const links = {
  liveKick: "https://kick.com/eskimozin",
  liveTwitch: "https://www.twitch.tv/eskimozin/"
}

export {
  baseUrl,
  postalBox,
  host,
  links
}
