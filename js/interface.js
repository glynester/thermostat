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

  $("#psm-on").click(function(event){
    thermostat.turnOnPowerSavingMode();
    $("#power-saving-status").text('ON');
    $('#temperature').text(thermostat.temperature);
    $("#power-saving-status").attr("class", thermostat.powerSavingMode)
  });

  $("#psm-off").click(function(event){
    thermostat.turnOffPowerSavingMode();
    $("#power-saving-status").text('OFF');
    $("#power-saving-status").attr("class", thermostat.powerSavingMode)
  });

  function changeColour(){
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.colour())
    $("#power-saving-status").attr("class", thermostat.powerSavingMode)
  }

  $("#citysub").click(function(event){
    var city = $('#city').val() || "London";
    $('#citytemp').text(city);
    weather(city)
  });

   function weather(city){
     var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    //  var city = $('#city').val() || 'London' ;
     var api = '&appid=76a0e8d874a07c5652d4f694d040b672&units=metric'
    //  Ajax call to API.
    $.get(url + city + api, function(weatherData) {
      // References the temperature in the JSON? data returned.
      $( "#weather" ).text( weatherData.main.temp );
    });
   }

});
