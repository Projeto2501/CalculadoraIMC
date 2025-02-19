const calc = document.getElementById("calc");

function calcular(){
    const nome = document.getElementById('nome').value;
    const altura = (document.getElementById('altura').value)/100;
    const peso = document.getElementById('peso').value;
   
    if (nome !== '' && altura !=='' && peso !==''){
    const imc = (peso/(altura*altura)).toFixed(1);

    let classificacao = '';
    if(imc<18.5){
      classificacao = 'abaixo do peso ideal'
    }else if(imc < 25) {
      classificacao = 'com o peso ideal'
    }else if(imc < 30){
      classificacao = 'levemente acima do peso'
    }else if (imc < 35){
      classificacao = 'obeso';
    }else {
      classificacao = 'com obesidade severa';
        }

    resultado.textContent = `${nome}, seu imc é ${imc}. Você está ${classificacao}`;
  }else{
    resultado.textContent = 'Preencha todos os campos'
  }
}

