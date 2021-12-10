//cria arrays para armazenar//
var par = [];
var impar = [];

//separa em par ou impar
function separar() {
    //pega os dez valores
    const primeiro = document.getElementById("um").value;
    const segundo = document.getElementById("dois").value;
    const terceiro = document.getElementById("tres").value;
    const quarto = document.getElementById("quatro").value;
    const quinto = document.getElementById("cinco").value;
    const sexto = document.getElementById("seis").value;
    const setimo = document.getElementById("sete").value;
    const oitavo = document.getElementById("oito").value;
    const nono = document.getElementById("nove").value;
    const decimo = document.getElementById("dez").value;    
    //cria array para receber os valores
    var numeros = [primeiro, segundo, terceiro, quarto, quinto, sexto, setimo, oitavo, nono, decimo];
    console.log(typeof primeiro);
    console.log(primeiro);
    console.log(typeof segundo);
    console.log(numeros);
    //verifica se par ou impar
    numeros.forEach(element => {
        if (element %2 === 0) {
            par.push(element);
        }else{
            impar.push(element);
        }
    });
    //exibe reesultados//
    document.getElementById("parhtml").innerHTML = par;
    document.getElementById("imparhtml").innerHTML = impar;
}