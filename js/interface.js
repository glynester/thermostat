$( document ).ready(function(){
var thermostat = new Thermostat();
changeColour();

  $("#temp-up").click(function(event){
    thermostat.increaseTemperature();
    changeColour();
  });

  $("#temp-down").click(function(event){
    thermostat.decreaseTemperature();
    changeColour();
  });

  $("#reset").click(function(event){
    thermostat.resetTemperature();
    changeColour();
  });

  $("#psm-on").click(function(event){
    thermostat.turnOnPowerSavingMode();
    $("#power-saving-status").text('on');
    $("#power-saving-status").attr("class", thermostat.powerSavingMode)
  });

  $("#psm-off").click(function(event){
    thermostat.turnOffPowerSavingMode();
    $("#power-saving-status").text('off');
    $("#power-saving-status").attr("class", thermostat.powerSavingMode)
  });

  function changeColour(){
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.colour())
    $("#power-saving-status").attr("class", thermostat.powerSavingMode)

    // if (thermostat.colour() === "lowUsage") {
    //   $("#temperature").css('background-color','green');
    // } else if (thermostat.colour() === "mediumUsage") {
    //   $("#temperature").css('background-color','yellow');
    // }
    // else {
    //   $("#temperature").css('background-color','red');
    // }
  }



});
