$(document).ready(function(){

    $("#respuesta").hide();
    $("#btn1").hide();

    $("#btn").click(function(){
      $("#respuesta").show();
      $("#btn").hide();
      $("#btn1").show();
    });

    $("#btn1").click(function(){
        $("#respuesta").hide();
        $("#btn").show();
        $("#btn1").hide();
      });
  });