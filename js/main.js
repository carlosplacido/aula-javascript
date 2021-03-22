
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}
function redirecionar(){
    window.open("https://www.uol.com.br"); //para abrir em aba diferente.
    window.location.href = "https://www.uol.com.br"; //para abrir na mesma aba.
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1+n2;

}


function validaidade(idade){
    var validar;
    if (idade >= 18){
    var validar = true
}else{
    validar = false
}
return validar;
}


var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));
*/


/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert (count)
    count++;
}
*/


//var idade = prompt("Qual é a sua idade?");
//if (idade >= 18){
//    alert("maior idade");
//}else{
//   alert("menor idade");
//}

//var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "Uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


//var fruta = {nome: "maçã", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Rafael";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert (idade + idade2);
//alert (nome + " tem " + idade + " anos.");
//console.log (nome);
//console.log (idade + idade2);
//console.log (frase.toUpperCase());
//alert(frase.replace ("Japão", "Brasil"));


