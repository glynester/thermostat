$( document ).ready(function(){
var thermostat = new Thermostat();
$("#temperature").text(thermostat.temperature);

  $("#temp-up").click(function(event){
    thermostat.increaseTemperature();
    $("#temperature").text(thermostat.temperature);
  });

  $("#temp-down").click(function(event){
    thermostat.decreaseTemperature();
    $("#temperature").text(thermostat.temperature);
  });

  $("#reset").click(function(event){
    thermostat.resetTemperature();
    $("#temperature").text(thermostat.temperature);
  });

  $("#psm-on").click(function(event){
    thermostat.turnOnPowerSavingMode();
    $("#power-saving-status").text('on');
  });

  $("#psm-off").click(function(event){
    thermostat.turnOffPowerSavingMode();
    $("#power-saving-status").text('off');
  });





});
