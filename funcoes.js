$(document).ready(function(){

  $("#btnCalcular").click(function(){

   
    var altura = parseFloat($("input[name='altura']").val());
    var peso = parseFloat($("input[name='peso']").val());

    if(isNaN(peso)) {
      $("#peso").addClass("has-error");
      $("#alertaPeso").fadeIn();
      $("input[name='peso']").focus();
      $("input[name='peso']").val("");
      return;
    }

    if(isNaN(altura)) {
      $("#altura").addClass("has-error");
      $("#alertaAlt").fadeIn();
      $("input[name='altura']").focus();
      $("input[name='altura']").val("");
      return;
    }

      $("#altura").removeClass("has-error");
      $("#alertaAlt").hide();

      $("#peso").removeClass("has-error");
      $("#alertaPeso").hide();

      $("#resultado").removeClass("hide");

      var resultado = peso/(altura*altura);
      var pesoidealmmin = (altura*altura)*18.6;
      var pesoidealmax = (altura*altura)*24.9;

	  

	  if(resultado<=18.5){
	  $("#resultado").val("Resultado do IMC: "+resultado.toFixed(3)+": Subnutrição"+"\nPeso ideal: entre "+pesoidealmmin.toFixed(3)+" e "+pesoidealmax.toFixed(3));
	  return;
	  }
	  if(resultado>18.5&&resultado<=24.9){
	     $("#resultado").val("Resultado do IMC: "+resultado.toFixed(3)+": Peso saudável"+"\nPeso ideal: entre "+pesoidealmmin.toFixed(3)+" e "+pesoidealmax.toFixed(3));
	     return;
      }
      if(resultado>25&&resultado<=29){
	  	$("#resultado").val("Resultado do IMC: "+resultado.toFixed(3)+": Sobrepeso"+"\nPeso ideal: entre "+pesoidealmmin.toFixed(3)+" e "+pesoidealmax.toFixed(3));
	  	return;
      }
      if(resultado>30&&resultado<=34.9){
	  	$("#resultado").val("Resultado do IMC: "+resultado.toFixed(3)+": Obesidade grau 1"+"\nPeso ideal: entre "+pesoidealmmin.toFixed(3)+" e "+pesoidealmax.toFixed(3));
	  	return;
      }
      if(resultado>35&&resultado<=39.9){
	  	$("#resultado").val("Resultado do IMC: "+resultado.toFixed(3)+": Obesidade grau 2"+"\nPeso ideal: entre "+pesoidealmmin.toFixed(3)+" e "+pesoidealmax.toFixed(3));
	  	return;
      }
      if(resultado>40){
	  	$("#resultado").val("Resultado do IMC: "+resultado.toFixed(3)+": Obesidade grau 3"+"\nPeso ideal: entre "+pesoidealmmin.toFixed(3)+" e "+pesoidealmax.toFixed(3));
	  	return;
      }

     
 

  });


})
