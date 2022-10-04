const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML= frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML= frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML= frutas[2]

// criei uma variavel para fazer uma função, dentro da função 
//crio uma variavel para guardar e add a fruta escolhida dentro. 
//document.getElementById-aviso que vou inserir dentro daquela id,
//innerHTM- inseri dentro
// laranja.innerHTM- chamei a variavel e acrescentei
// const inserirFrutas = () => {
//     const laranja = document.getElementById("fruta-1")
//     laranja.innerHTML += frutas[0]

//     const limao = document.getElementById("fruta-2")
//     limao.innerHTML += frutas[1]

//     const uva = document.getElementById("fruta-3")
//     limao.innerHTML += frutas[2]
// }



const capturaValores = () =>{

    let fruta= document.getElementById("nome").value
    let fruta4= document.getElementById("fruta-4")
    fruta4.innerHTML += fruta

    console.log(fruta)
}

capturaValores()







































