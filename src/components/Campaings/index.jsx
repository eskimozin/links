import {Banner} from "../Banner/index.jsx";
import {campaings} from "../../../public/campaings.js";

const convertDatetime = (datetime) => {
  if (!datetime) return null
  else if (typeof new Date(datetime).getTime() !== 'number') return null
  return new Date(datetime).getTime()
}

const verifyIsValidCampaings = (campaings) => {
  if (!campaings) return false
  else if (!Array.isArray(campaings)) return false
  const actualDate = Date.now()
  return campaings.filter((c) => {
    const [init, finish] = [convertDatetime(c.datetimeInit), convertDatetime(c.datetimeFinish)]
    if (!init || !finish) return null
    if (actualDate < init || actualDate > finish) return null
    return c
  })
}

const sortedCampaings = (campaings) => {
  if (campaings.length === 1) return campaings
  return campaings.toSorted((a, b) => {
    return convertDatetime(a.datetimeFinish) - convertDatetime(b.datetimeFinish)
  })
}

const Campaings = () => {
  const validCampaings = verifyIsValidCampaings(campaings)
  
  if (validCampaings && validCampaings.length > 0) {
    return (
      <div className={"mt-2 mb-4 d-flex flex-column gap-3"}>
        <div className={"d-flex align-items-center justify-content-between gap-2 flex-wrap animate-from-bottom"}>
          <h2 className={"fs-5 text-white-50 fw-bold text-lowercase mb-0"} style={{fontFamily: "'Inter Tight', 'Inter', sans-serif"}}>campanhas</h2>
          <button type={"button"} onClick={() => {alert("Sob implementação!")}} className={"btn btn-sm border-0 p-0 pe-1"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF50" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
            </svg>
          </button>
        </div>
        {
          sortedCampaings(validCampaings).map((c, i) => (
            <div key={i}>
              <Banner
                title={c.title}
                subtitle={c.subtitle}
                link={c.link}
                legend={c.legend}
                linkName={c.linkName}
              />
            </div>
          ))
        }
      </div>
    )
  } else {
    return null
  }
}

export {Campaings}