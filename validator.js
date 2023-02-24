const validator = {
  isValid (creditCardNumber){
    const arrayNumbers = []; //uma array pra receber os numeros do cartao
    for (let i = 0; i < creditCardNumber.length; i++){ //
      const digitos = parseInt(creditCardNumber[i]); // o parseInt converte as strings em numeros inteiros 
      arrayNumbers.push(digitos);//
    }
    const reverseNumber = arrayNumbers.reverse();
    for (let i = 0; i < reverseNumber.length; i++){
      if((i+1)% 2 === 0) {reverseNumber[i] = reverseNumber[i]*2;
      }
      if (reverseNumber[i]>=10){
        reverseNumber[i] = reverseNumber[i] - 9;
      }
    }
    let total = 0;
    for (let i = 0; i < reverseNumber.length; i++){
      total = total + reverseNumber[i];
    }
    return total % 10 === 0
  },
  
  maskify (creditCardNumber) {
    if (creditCardNumber.length <= 4){
      return creditCardNumber;
    }
    const totalNumeros = creditCardNumber.length - 4; //verifica a qntd de caracteres na string e sub 4
    const mascarar = "#"
    const ultimosdigitos = creditCardNumber.substr(-4);
    const maskErepeat = mascarar.repeat(totalNumeros) + ultimosdigitos;
    return maskErepeat
  }
};

export default validator;
    