import {Section} from '../Section'
import {sections} from '../../data/sections.js'
import './index.css'
import {Campaings} from "../Campaings/index.jsx";
import {useEffect, useRef, useState} from "react";

function Main() {
  const [isCopyE, setCopiedE] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const btnCopyPostalBox = useRef(null);
  
  useEffect(() => {
    if (btnCopyPostalBox.current) btnCopyPostalBox.current.disabled = isCopying;
  }, [isCopying]);
  
  const setCopied = (bool) => {
    setCopiedE(bool);
    
    if (!bool) setIsCopying(false);
    
    setTimeout(() => {
      setCopiedE(false);
      if (bool) setIsCopying(false);
    }, 1500);
  }
  
  const handleCopy = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCopying(true);
    
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
    }).catch(() => {
      copyTextDeprecated(text);
    });
  }
  
  function copyTextDeprecated(text) {
    const textToCopy = text;
    
    // Create a temporary textarea element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.style.display = 'none';
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    
    // Select the content of the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
      // Execute the copy command
      const successful = document.execCommand('copy');
      if (!successful) throw new Error('Could not copy');
      else setCopied(true);
    } catch (err) {
      alert('Erro ao tentar copiar texto (método deprecated): ' + err);
      setCopied(false);
    } finally {
      // Remove the temporary textarea
      document.body.removeChild(tempTextArea);
    }
  }
  
  return (
    <main>
      <Campaings key={"campaing"}/>
      {
        sections.map(function (secao, index) {
          return (
            <Section
              id={index}
              key={index}
              title={secao.title}
              legend={secao.legend}
              className={secao.className}
              link={secao.link}
            />
          )
        })
      }
      
      <Section
        id={-1}
        title={"Caixa postal"}
        legend={"Se você tem ou viu algo legal e quer enviar para o eskimo, mande através da nossa Caixa Postal!"}
        className={"postal-box"}
        link={"#"}
      >
        <div>
          <button ref={btnCopyPostalBox} className={"p-0 m-0 border-0"} style={{background: "transparent"}} data-toggle="tooltip" data-placement="top" data-bs-custom-class="custom-tooltip" title={"Clique para copiar os dados"} onClick={(e) => handleCopy(e, "A caixa postal está em nome de XXXXXXXX. O número é XXXXXX, CEP: XXXXX-XXX - São Paulo, SP.")}>
            <p className={"m-0 px-3 py-2 text-balance rounded-0 text-white"} style={{background: "#FFFFFF15", border: "1px dashed #FFFFFF50"}}>
              <span>A caixa postal está em nome de XXXXXXXX. O número é XXXXXX, CEP: XXXXX-XXX - São Paulo, SP.</span>
              
              {
                isCopyE ? (
                  <span className={"text-center d-block text-color-success mt-2"} style={{fontSize: "13px"}}>Informações copiadas!</span>
                ) : (
                  <span className={"text-center d-block text-white-50 mt-2"} style={{fontSize: "13px"}}>Clique para copiar</span>
                )
              }
            </p>
          </button>
        </div>
      </Section>
    </main>
  )
}

export {Main}