import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {links} from "../data/config.js";

export default function ManageCampaigns() {
  const [redirect, setRedirect] = useState(<></>);
  const {origin} = new URL(window.location);
  const {base} = links;
  
  useEffect(() => {
    setTimeout(() => {
      window.open(`${origin}${base}external/create-campaigns.html`);
      setRedirect(<Navigate to={"/"}/>);
    }, 1500);
  }, [base, origin]);
  
  return (
    <>
      <div className={"text-white text-center mb-5 mt-5 animate-from-bottom"}>Redirecionando...</div>
      {redirect}
    </>
  )
}