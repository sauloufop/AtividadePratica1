$(document).ready(function(){

  $("#btnCalcular").click(function(){

     var amplitude = parseFloat($("input[name='amplitude']").val());
    var intervalo = parseFloat($("input[name='intervalo']").val());

    if(isNaN(intervalo)) {
      $("#intervalo").addClass("has-error");
      $("#alertaintervalo").fadeIn();
      $("input[name='intervalo']").focus();
      $("input[name='intervalo']").val("");
      return;
    }

    if(isNaN(amplitude)) {
      $("#amplitude").addClass("has-error");
      $("#alertamplitude").fadeIn();
      $("input[name='amplitude']").focus();
      $("input[name='amplitude']").val("");
      return;
    }

      $("#amplitude").removeClass("has-error");
      $("#alertamplitude").hide();

      $("#intervalo").removeClass("has-error");
      $("#alertaintervalo").hide();

      $("#resultado").removeClass("hide");

      var resultado = Math.log10(amplitude) + 3 * Math.log10(8 * intervalo) - 2.92;

      
      if(resultado<3.5){
	  $("#resultado").val("Magnitude: "+resultado.toFixed(3)+" Geralmente não sentido, mas gravado.");
	  return;
	  }
	  if(resultado>=3.5&&resultado<=5.4){
	     $("#resultado").val("Magnitude: "+resultado.toFixed(3)+" Às vezes sentido, mas raramente causa danos.");
	     return;
      }
      if(resultado>=5.5&&resultado<=6){
	  	$("#resultado").val("Magnitude: "+resultado.toFixed(3)+" No máximo causa pequenos danos a prédios bem construídos, mas pode danificar seriamente casas mal construídas em regiões próximas.");
	  	return;
      }
      if(resultado>=6.1&&resultado<=6.9){
	  	$("#resultado").val("Magnitude: "+resultado.toFixed(3)+" Pode ser destrutivo em áreas em torno de até 100 km do epicentro.");
	  	return;
      }
      if(resultado>=7&&resultado<=7.9){
	  	$("#resultado").val("Magnitude: "+resultado.toFixed(3)+" Grande terremoto. Pode causar sérios danos numa grande faixa.");
	  	return;
      }
      if(resultado>8){
	  	$("#resultado").val("Magnitude: "+resultado.toFixed(3)+" Enorme terremoto. Pode causa graves danos em muitas áreas mesmo que estejam a centenas de quilômetros.");
	  	return;
      }




      

  });


})
