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
      <>
        {
          sortedCampaings(validCampaings).map((c, i) => (
            <Banner
              key={i}
              title={c.title}
              subtitle={c.subtitle}
              link={c.link}
              legend={c.legend}
              linkName={c.linkName}
            />
          ))
        }
      </>
    )
  } else {
    return null
  }
}

export {Campaings}