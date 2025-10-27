export default class Util {
  static renderText = (text) => {
    // Usa regex para encontrar todas as barras e as envolve em spans
    
    if (!text.split) return text;
    
    return text.split(/(\/)/).map((part, index) => {
      if (part === "/") {
        // Adiciona uma key para o React
        return (<span key={index} style={{fontSize: 'inherit', fontFamily: "'Arial', sans-serif"}}>/</span>);
      }
      return part;
    });
  };
}
