$(document).ready(function(){

  $("button[name='CONFIRMAR']").click(function(){

    var ischecked_1 = $("input[name=radio1]:checked").val();
    var ischecked_2 = $("input[name=radio2]:checked").val();
    var ischecked_3 = $("input[name=radio3]:checked").val();
    var ischecked_4 = $("input[name=radio4]:checked").val();

    var score = 0;

    if (ischecked_1 == "sabonete"){
      score+=1;
    }
    if (ischecked_2 == "algodao"){
      score+=1;
    }
    if (ischecked_3 == "maquina") {
      score+=1;
    }
    if (ischecked_4 == "chave") {
      score+=1;
    }

    //grupo1
    $("#badge1").css({'background-color': "#E84C3D"});
    $("#badge2").css({'background-color': "#2DCC70"});
    $("#badge3").css({'background-color': "#E84C3D"});
    $("#badge4").css({'background-color': "#E84C3D"});

    //grupo2
    $("#badge5").css({'background-color': "#E84C3D"});
    $("#badge6").css({'background-color': "#E84C3D"});
    $("#badge7").css({'background-color': "#2DCC70"});
    $("#badge8").css({'background-color': "#E84C3D"});

    //grupo3
    $("#badge9").css({'background-color': "#E84C3D"});
    $("#badge10").css({'background-color': "#E84C3D"});
    $("#badge11").css({'background-color': "#E84C3D"});
    $("#badge12").css({'background-color': "#2DCC70"});

    //grupo4
    $("#badge13").css({'background-color': "#E84C3D"});
    $("#badge14").css({'background-color': "#E84C3D"});
    $("#badge15").css({'background-color': "#E84C3D"});
    $("#badge16").css({'background-color': "#2DCC70"});


    $("h1[name='pontuacao']").text("Pontuação: você fez " + score + " ponto(s)!");
  });

  $("button[name='LIMPAR']").click(function(){
    
    $('input[name=radio1]').each(function() 
{ 
        this.checked = false; 
});
        $('input[name=radio2]').each(function() 
{ 
        this.checked = false; 
});
            $('input[name=radio3]').each(function() 
{ 
        this.checked = false; 
});
                $('input[name=radio4]').each(function() 
{ 
        this.checked = false; 
});

    $("h1[name='pontuacao']").text("Pontuação: ");

    var i=0;
    while (i<17) {
      i+=1;
      $("#badge" + i).css({'background-color': ""});
    }

  });

// ----------------------------------- //

var numP=0;

$("p").click(function(){
    $(this).removeClass();
  if (numP == 0) {
    $(this).addClass("prg-border-purple");
    numP+=1;
  }
  else if (numP == 1){
    $(this).toggleClass("prg-border-red")
    numP+=1;
  }
  else if (numP == 2){
    $(this).toggleClass("prg-border-green")
    numP+=1;
  }
  else {
    $(this).toggleClass("prg-border-yellow")
    numP = 0
  }
});

var numImg = 0

$("img").click(function(){
    $(this).removeClass();
  if (numImg == 0) {
    $(this).addClass("prg-border-purple");
    numImg+=1;
  }
  else if (numImg == 1){
    $(this).toggleClass("prg-border-red")
    numImg+=1;
  }
  else if (numImg == 2){
    $(this).toggleClass("prg-border-green")
    numImg+=1;
  }
  else {
    $(this).toggleClass("prg-border-yellow")
    numImg = 0
  }
});


$("button[name='CONFIRMAR2']").click(function(){

    var score2 = 0;
    var triangulo = "";
    var quadrado = "";
    var circulo = "";
    var retangulo = "";

    if($("p[id='triangulo']").attr('class') == $("p[id='quadrado']").attr('class') ||
       $("p[id='triangulo']").attr('class') == $("p[id='circulo']").attr('class') ||
       $("p[id='triangulo']").attr('class') == $("p[id='retangulo']").attr('class') ||
       $("p[id='circulo']").attr('class') == $("p[id='quadrado']").attr('class') ||
       $("p[id='circulo']").attr('class') == $("p[id='retangulo']").attr('class') ||
       $("p[id='quadrado']").attr('class') == $("p[id='retangulo']").attr('class') ||
       $("img[alt='triangulo']").attr('class') == $("img[alt='quadrado']").attr('class') ||
       $("img[alt='triangulo']").attr('class') == $("img[alt='circulo']").attr('class') ||
       $("img[alt='triangulo']").attr('class') == $("img[alt='retangulo']").attr('class') ||
       $("img[alt='circulo']").attr('class') == $("img[alt='quadrado']").attr('class') ||
       $("img[alt='circulo']").attr('class') == $("img[alt='retangulo']").attr('class') ||
       $("img[alt='quadrado']").attr('class') == $("img[alt='retangulo']").attr('class')){
         $("#alertaCor").slideDown();
         return;
    }

    $("#alertaCor").hide();

    if($("p[id='triangulo']").attr('class') == $("img[alt='triangulo']").attr('class')){
      //alert("gg wp")
      score2+=1;
      triangulo = "Você ACERTOU o triângulo! :D"
    }
    else {
      triangulo = "Você ERROU o triângulo! :("
    }
    if($("p[id='quadrado']").attr('class') == $("img[alt='quadrado']").attr('class')){
      score2+=1;
      quadrado = "Você ACERTOU o quadrado! :D"
    }
    else {
      quadrado = "Você ERROU o quadrado! :("
    }
    if($("p[id='circulo']").attr('class') == $("img[alt='circulo']").attr('class')){
      score2+=1;
      circulo = "Você ACERTOU o circulo! :D"
    }
    else {
      circulo = "Você ERROU o circulo! :("
    }
    if($("p[id='retangulo']").attr('class') == $("img[alt='retangulo']").attr('class')){
      score2+=1;
      retangulo = "Você ACERTOU o retângulo! :D"
    }
    else {
      retangulo = "Você ERROU o retângulo! :("
    }


    $("h5[name='pontuacao2']").text("Pontuação: você fez " + score2 + " ponto(s)!");
    $("h6[name='pontuacao3']").text(triangulo);
    $("h6[name='pontuacao4']").text(quadrado);
    $("h6[name='pontuacao5']").text(circulo);
    $("h6[name='pontuacao6']").text(retangulo);

});

$("button[name='LIMPAR2']").click(function(){

  $("#alertaCor").hide();

  $("h5[name='pontuacao2']").text("Pontuação: ");
  $("h6[name='pontuacao3']").text("");
  $("h6[name='pontuacao4']").text("");
  $("h6[name='pontuacao5']").text("");
  $("h6[name='pontuacao6']").text("");

  $("p[id='triangulo']").removeClass()
  $("p[id='triangulo']").addClass("prg-border-1")
  $("p[id='quadrado']").removeClass()
  $("p[id='quadrado']").addClass("prg-border-1")
  $("p[id='circulo']").removeClass()
  $("p[id='circulo']").addClass("prg-border-1")
  $("p[id='retangulo']").removeClass()
  $("p[id='retangulo']").addClass("prg-border-1")

  $("img[alt='triangulo']").removeClass()
  $("img[alt='triangulo']").addClass("prg-border-2")
  $("img[alt='quadrado']").removeClass()
  $("img[alt='quadrado']").addClass("prg-border-2")
  $("img[alt='circulo']").removeClass()
  $("img[alt='circulo']").addClass("prg-border-2")
  $("img[alt='retangulo']").removeClass()
  $("img[alt='retangulo']").addClass("prg-border-2")



});


}); // document ready
