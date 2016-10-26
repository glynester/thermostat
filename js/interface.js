$( document ).ready(function(){
var thermostat = new Thermostat();
changeColour();
weather();

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

  $("#citysub").click(function(event){
    $('#citytemp').text($('#city').val());
    weather()
  });

  $("#psm-on").click(function(event){
    thermostat.turnOnPowerSavingMode();
    $("#power-saving-status").text('on');
    $('#temperature').text(thermostat.temperature);
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

   function weather(){
     var url = 'http://api.openweathermap.org/data/2.5/weather?q='
     var city = $('#city').val() || 'London' ;
     var api = '&appid=76a0e8d874a07c5652d4f694d040b672&units=metric'
    $.get(url + city + api, function(temp) {
      $( "#weather" ).text( temp.main.temp );
    });
   }

// 3aa07a48be658a901acbe6b44ee42e17

});
