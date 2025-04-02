import './index.css'

function Footer () {
    const styles = {fontWeight: 300, fontFamily: '"Inter Tight", "Inter", sans-serif', letterSpacing: 0.20};
    
    return (
      <footer className={"footer"}>
        <p className={"text text-muted text-always-balance"}>
          <span className={"fw-light"} style={{...styles}}>Se algum link estiver desatualizado, avise os mods.</span><br/>
          <a href={"https://github.com/gabriersdev"} className={"text-decoration-none fw-light"} style={{...styles, color: "inherit"}}>Feito com 💖 pelo Gabriel.</a>
        </p>
      </footer>
    );
}

export {Footer};