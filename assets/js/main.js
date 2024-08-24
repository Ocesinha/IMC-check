// mesmo teste da atv1, mas agora bem mais completo.



function tabela(){
    const form = document.querySelector('.form')
    const result = form.querySelector('.resultadofinal')

    function enviado(evento){

        evento.preventDefault()
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const valor1 = peso.value ;
        const valor2 = altura.value / 100 ;
        const calculo = (valor1 / (valor2*valor2));
        const imc = Number(calculo.toFixed(1));

        if (imc <= 18.5){
            result.innerHTML += `Seu IMC é de ${imc}, você está abaixo do peso. <br>`
        }else if (imc > 18.5 && imc <= 24.9){
            result.innerHTML += `Seu IMC é de ${imc}, você está com peso normal. <br>`
        }else if (imc > 24.9 && imc <= 29.9){
            result.innerHTML += `Seu IMC é de ${imc}, você está com sobrepeso. <br>`
        }else if (imc > 29.9 && imc <= 34.9){
            result.innerHTML += `Seu IMC é de ${imc}, você está com obesidade grau 1. <br>`
        }else if (imc > 34.9 && imc <= 39.9){
            result.innerHTML += `Seu IMC é de ${imc}, você está com obesidade grau 2. <br>`
        }else if (imc > 40){
            result.innerHTML += `Seu IMC é de ${imc}, você está com obesidade grau 3. <br>`
        }else{
            console.log('error')
        }
    }

    form.addEventListener('submit', enviado)
}
tabela();