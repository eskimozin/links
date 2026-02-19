import {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

export default function Censo() {
  const url = useRef("https://docs.google.com/forms/d/e/1FAIpQLScgW8PzmjIDrAWpOY8ArJPZh-HElN0pb5XTkFRlhPr84UvdPQ/viewform")
  
  useEffect(() => {
    const action = () => {
      setTimeout(() => {
        window.location.href = url.current;
      }, 2500);
    }
    
    if (url.current) action();
  }, [url]);

  return (
    <div className={"text-white text-center mb-5 mt-5 animate-from-bottom"}>
      <p className={"text-balance mx-auto"} style={{maxWidth: "500px"}}>
        Redirecionando... Aguarde alguns segundos. Se demorar demais ou o navegador impedir o redirecionamento, <Link to={url?.current ?? "#"} className={"text-body"}>clique aqui</Link>.
      </p>
    </div>
  );
}
