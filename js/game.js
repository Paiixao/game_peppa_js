$(document).ready(carregamento_pagina);

function carregamento_pagina() {
  var tempoCriacao = 3000;
  var c = 1;

  setTimeout(criaBalao, tempoCriacao);

  function criaBalao() {

    var sorteLeft = Math.random() * 100;
    sorteLeft = parseInt(sorteLeft);

    $("#ceu").append("<div class='balao' id='b_" + c + "'></div>");
    $("#b_"+ c).animate({top: "-200px"}, 2000);
    $("#b_"+ c).css("left", sorteLeft+"%");


    tempoCriacao *= 0.9;
    setTimeout(criaBalao, tempoCriacao);
    c++;
  }
}
