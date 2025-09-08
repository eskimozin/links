import {Link} from "react-router-dom";
import {Section} from "../components/Section/index.jsx";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Importar o componente Form
import {sections} from "../data/lives.js";
import {useState, useEffect, useRef} from "react"; // Importar useEffect

function Lives() {
  const multiStreamSections = [...sections];
  
  // Estado para controlar a visibilidade do conteúdo principal
  const [captchaComplete, setCaptchaComplete] = useState(false);
  
  // Estados para o CAPTCHA
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('soma'); // 'soma' ou 'multiplicação'
  const [userInput, setUserInput] = useState(''); // Armazena a resposta do usuário
  const inputRef = useRef();
  
  useEffect(() => {
    focusInputRef();
  }, [inputRef]);
  
  // Lógica de Randomização
  // Roda apenas uma vez quando o componente é montado
  useEffect(() => {
    generateNewCaptcha();
  }, []);
  
  const focusInputRef = () => {
    if (inputRef.current) inputRef.current?.focus();
  }
  
  const generateNewCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1; // Número aleatório de 1 a 10
    const newNum2 = Math.floor(Math.random() * 10) + 1; // Número aleatório de 1 a 10
    const operators = ['soma', 'multiplicação'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    
    if (newNum1 === newNum2) generateNewCaptcha();
    
    setNum1(newNum1);
    setNum2(newNum2);
    setOperator(randomOperator);
  };
  
  // Lógica de Validação
  const handleCaptchaSubmit = () => {
    // Calcula a resposta correta
    const correctAnswer = operator === 'soma' ? num1 + num2 : num1 * num2;
    
    // Valida o input do usuário (convertendo para número)
    if (parseInt(userInput) === correctAnswer) {
      setCaptchaComplete(true); // Libera o conteúdo
    } else {
      alert('Resposta incorreta. Tente novamente!'); // Feedback para o usuário
      setUserInput(''); // Limpa o input
      generateNewCaptcha(); // Gera um novo desafio
    }
  };
  
  // Define o texto da operação para exibição
  const operatorText = operator === 'soma' ? 'mais' : 'multiplicado por';
  
  // Se o CAPTCHA NÃO estiver completo, mostra o Modal
  if (!captchaComplete) {
    return (
      <>
        {/* Estilos para o Modal, mantidos do código original */}
        <style>{`
          .modal-content {
            border: 0 !important;
            background: unset !important;
          }
        `}</style>
        <div
          className="modal show"
          style={{display: 'block', position: 'initial'}}
        >
          <Modal show={true} className="modal-dialog border-0 rounded-0" centered>
            <Modal.Header className={"bg-dark border-0 rounded-top-3 text-white-50"}>
              <Modal.Title className={"fs-3"}>Complete a verificação</Modal.Title>
            </Modal.Header>
            
            <form onSubmit={handleCaptchaSubmit}>
              <Modal.Body className={"bg-dark border-0 rounded-0 text-white font-inter"}>
                <p>Qual o resultado de {num1} {operatorText} {num2}?</p>
                
                {/* Input para o usuário inserir a resposta */}
                <Form.Control
                  ref={inputRef}
                  type="text"
                  placeholder="Digite o resultado"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  required={true}
                  maxLength={3}
                  autoComplete={"off"}
                  autoFocus={true}
                  className={"bg-dark mt-3 text-white border-1 border-secondary"}
                />
              </Modal.Body>
              
              <Modal.Footer className={"bg-dark border-0 rounded-bottom-3 d-flex gap-1 flex-wrap"}>
                <Button variant="dark" tabIndex={-1} className={"py-0 px-2 m-0 bg-transparent border-0"} onClick={() => {
                  generateNewCaptcha();
                  focusInputRef();
                }}>
                  <div className={"d-flex align-items-center gap-1 flex-wrap"}>
                    <span>Randomizar cálculo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg>
                  </div>
                </Button>
                <Button as={Link} to="/" variant="dark" tabIndex={-1} className={"py-0 px-2 m-0 bg-transparent border-0"}>Sair</Button>
                <Button variant="dark" className={"bg-theme border-0 text-dark fw-bold"} onClick={handleCaptchaSubmit}>
                  Confirmar!
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </>
    );
  }
  
  // Se o CAPTCHA ESTIVER completo, mostra o conteúdo da página
  return (
    <main className={"page-lives"}>
      {
        multiStreamSections.map((section, index) => (
          <Section
            key={index}
            id={index} // Corrigido para usar o index como ID único
            title={section.title}
            legend={section.legend}
            className={section.className}
            link={section.link}
            sectionListType={"ms"}
          />
        ))
      }
      <Link to={`/`}>
        <button className={"btn btn-dark border-0 rounded-2 w-100"}>Ver todos os outros links</button>
      </Link>
    </main>
  );
}

export default Lives;