//1
document.addEventListener("DOMContentLoaded", function () {
    const quadrado = document.getElementById("quadrado");
    quadrado.style.backgroundColor = "green";
});

//2
document.getElementById("retangulo").style.backgroundColor = "red";

//3
document.getElementById("circulo").style.backgroundColor = "purple";

//4
document.getElementById("q1").style.backgroundColor = "blue";
document.getElementById("q2").style.backgroundColor = "orange";
document.getElementById("q3").style.backgroundColor = "pink";

//5
const p = document.getElementById("paragrafo");
p.style.backgroundColor = "black";
p.style.color = "white";

//6
document.getElementById("banner").style.backgroundColor = "#333333";

//7
document.getElementById("triangulo").style.borderBottomColor = "lime";

//8
const c2 = document.getElementById("circulo2");
const q2 = document.getElementById("quadrado");
const temp = c2.style.backgroundColor;
q2.style.backgroundColor = temp;

//9
const titulo = document.getElementById("titulo");
titulo.style.color = "green";
titulo.style.backgroundColor = "yellow";

//10
const cores = ["red", "orange", "yellow", "green", "blue"];
const caixas = document.querySelectorAll(".caixa");
caixas.forEach((c, i) => c.style.backgroundColor = cores[i]);

//11
document.getElementById("div11").style.backgroundColor = "black";
document.getElementById("p11").style.color = "pink";

//12
document.getElementById("oval").style.backgroundColor = "cyan";
