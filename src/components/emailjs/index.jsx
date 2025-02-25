import emailjs from '@emailjs/browser';

const SendEmail = (formElement) => {
    console.log("Elemento do formulário:", formElement); 
  
    return emailjs
      .sendForm(
        "service_qm893p8", 
        "template_spyf0ov", 
        formElement, 
        "OM9S_fFHX6ALwMjzz"
      )
      .then((result) => {
        console.log("Mensagem enviada com sucesso!", result.text);
        return result;
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem", error.text);
        throw error;
      });
  };
  
  export default SendEmail;