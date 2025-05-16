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
        <div className={"d-flex align-items-center justify-content-between gap-2 flex-wrap"}>
          <h2 className={"fs-5 text-white-50 fw-bold text-lowercase mb-0"} style={{fontFamily: "'Inter Tight', 'Inter', sans-serif"}}>campanhas</h2>
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