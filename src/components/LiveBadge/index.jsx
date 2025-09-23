import {useCallback, useEffect, useState} from "react";
import {host, links} from "../../data/config.js";

export default function LiveBadge() {
  const [liveInKick, setLiveInKick] = useState(false);
  const [liveInTwitch, setLiveInTwitch] = useState(false);
  
  useEffect(() => {
    const endpoints = {
      kick: "api/get-latest-result-scrapping-kick/",
      twitch: "api/get-latest-result-scrapping-twitch/"
    }
    
    Object.keys(endpoints).forEach(e => {
      fetch(`${host}/${endpoints[e]}`).then((res) => {
        return res.json()
      }).then(res => {
        if (e === "kick" && res?.rows?.[0]) setLiveInKick(res?.rows?.[0]?.["isLive"])
        else if (e === "twitch" && res?.rows?.[0]) setLiveInTwitch(res?.rows?.[0]?.["isLive"])
      }).catch(error => {
        console.error(`Error: ${error}`)
      })
    })
    
  }, []);
  
  const resContent = useCallback(() => {
    if (liveInTwitch && liveInKick) {
      return (
        <a href={links["liveKick"]} className={"animate-from-bottom rounded-pill text-decoration-none text-body mt-3 text-center px-3 py-1 d-inline-flex align-items-center mx-auto"} style={{background: "var(--gradient-5)"}}>
          <div className={"live-indicator me-1"}>
            <div className={"live-dot"}></div>
          </div>
          <span>Ao vivo na TWITCH e na KICK!</span>
        </a>
      )
    } else if (liveInTwitch) {
      return (
        <a href={links["liveTwitch"]} className={"animate-from-bottom rounded-pill text-decoration-none text-body mt-3 text-center px-3 py-1 d-inline-flex align-items-center mx-auto"} style={{background: "var(--gradient-6)"}}>
          <div className={"live-indicator me-1"}>
            <div className={"live-dot"}></div>
          </div>
          <span>Ao vivo na TWITCH!</span>
        </a>
      )
    } else if (liveInKick) {
      return (
        <a href={links["liveKick"]} className={"animate-from-bottom rounded-pill text-decoration-none text-body mt-3 text-center px-3 py-1 d-inline-flex align-items-center mx-auto"} style={{background: "var(--gradient-5)"}}>
          <div className={"live-indicator me-1"}>
            <div className={"live-dot"}></div>
          </div>
          <span>Ao vivo na KICK!</span>
        </a>
      )
    }
  }, [liveInKick, liveInTwitch]);
  
  return (
    <article className={"animate-from-bottom"}>{resContent()}</article>
  )
}