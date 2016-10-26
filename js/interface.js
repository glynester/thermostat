$( document ).ready(function(){
var thermostat = new Thermostat();
$("#temperature").text(thermostat.temperature);
  $("#temp-up").click(function(event){
    thermostat.increaseTemperature();
    $("#temperature").text(thermostat.temperature);
  });



});
