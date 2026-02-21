import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { routes } from "../routes.js"; // Importa as rotas da fonte única

export default function NoExists() {
  // Cria a lista de componentes ANTES do return para garantir a inferência de tipo correta.
  const routeItems = [...routes]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((route) => (
      <li
        key={route.path}
        className="list-group-item-action d-inline-flex w-auto">
        <Button
          as={Link}
          to={route.path}
          className={""}
          style={{background: "#FF000025", border: "1px solid #FF000025"}}
        >
          <span className={"text-danger"}>{route.name}</span>
        </Button>
      </li>
    ));
  
  return (
    <div className="container text-white text-center my-5 animate-from-bottom">
      <h1 className="display-4 fw-bold mb-3 text-danger">#404</h1>
      <p
        className="lead mb-4 text-danger mx-auto h2 fw-semibold text-balance"
        style={{maxWidth: "600px", margin: "auto"}}
      >
        A página que você procura não foi encontrada. <span className={"text-decoration-underline"} style={{fontSize: "inherit"}}>Talvez o link esteja quebrado</span> ou a <span className={"text-decoration-underline"} style={{fontSize: "inherit"}}>página tenha sido removida</span>. Você pode tentar um dos links abaixo:
      </p>
      
      <ul
        className="w-50 mx-auto bg-transparent d-flex flex-wrap justify-content-center align-items-center gap-2 w-100 mt-3"
        style={{maxWidth: "600px", margin: "auto"}}
      >
        {routeItems}
      </ul>
    </div>
  );
}
