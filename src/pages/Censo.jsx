import {useCallback, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

export default function Censo() {
  const url = useRef("https://docs.google.com/forms/d/e/1FAIpQLScgW8PzmjIDrAWpOY8ArJPZh-HElN0pb5XTkFRlhPr84UvdPQ/viewform")
  
  useEffect(() => {
    const action = () => {
      setTimeout(() => {
        window.location.href = url.current;
      }, 3000);
    }
    
    if (url.current) action();
  }, [url]);
  
  const splitPhrases = useCallback((phrase) => {
    if (!phrase) return <></>;
    return phrase.split("E!").map((word, index, self) => {
      return (
        <>
          <span key={index} className={"bg-warning text-black px-1 d-inline-flex my-1"}>{word}</span>
          {self.length === index + 1 ? "" : " "}
        </>
      )
    })
  }, []);
  
  return (
    <div className={"text-white text-center mb-5 mt-5 animate-from-bottom"}>
      <p className={"text-balance mx-auto"} style={{maxWidth: "500px"}}>
        {splitPhrases("Redirecionando...E!Aguarde alguns segundos.E!Se demorar demais ou o navegador impedir o redirecionamento:")}
        {" "}
        <Link to={url?.current ?? "#"} className={"text-decoration-none fw-bold text-capitalize"}>{splitPhrases("clique aqui.")}</Link>
      </p>
    </div>
  );
}
