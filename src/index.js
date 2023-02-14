import validator from './validator.js';

//manipular o DOM e interação do HTML e JS 

//Atribuir as funcionalidades ao inputnumero e o botao checkout 

const numeroCartao = document.getElementById("inputNumero");
const alerta = document.getElementById("mensagem");
const button = document.getElementById("botao");
button.addEventListener("click", validar);


  
function validar(e) {
  e.preventDefault();

  const digito = numeroCartao.value;
  const validacao = validator.isValid(digito);
  const mask = validator.maskify(digito);

  if (digito.trim() === ""|| digito.length <=4){
    alerta.innerHTML = "digito";
  }

  if (validacao){
    alerta.innerHTML = "Pagamento confirmado!" + mask
  } else {
    alerta.innerHTML = "Cartão inválido! tente novamente." 
  }

}
