$( document ).ready(function(){
var thermostat = new Thermostat();
changeColour();
weather();
getSettingsApi();

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
    weather(city);
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

   $("#city").on("change", function(){
     updateSettingsApi();
     console.log("city changed!!!")
   });

   $("body").on('DOMSubtreeModified','#temperature',function(){
     updateSettingsApi();
     console.log("temperature changed!!!")
   })

   //Problem - there are 2 temp changes happening so 2 api calls.

   // This is working!
   function updateSettingsApi(){
     var url = "http://localhost:9292/update";
     var city = $('#city').val() || "London";       //Dry this out!!!!
     var temp = $('#temperature').html();
     var string = url + "?city=" + city + "&temp=" + temp;
    //  console.log(string);
     $.get(url + "?city=" + city + "&temp=" + temp,function(){
     });
   }

// function getSettingsApi(){
//   $.ajax({
//   dataType: "json",
//   url: 'http://localhost:9292/retrieve.json',
//   data: data,
//   success: success
// });
  //  $.ajax({
  //      url: 'http://localhost:9292/retrieve.json',
  //      data: myData,
  //      type: 'GET',
  //      crossDomain: true,
  //      dataType: 'jsonp',
  //      success: function() { alert("Success"); },
  //      error: function() { alert('Failed!'); },
  //      beforeSend: setHeader
  //  });
// }

   function getSettingsApi(){
     var url = "http://localhost:9292/retrieve.json";
     $.getJSON(url,function(thermoData){
        console.log(thermoData);
        $('#city').val(thermoData.city);
        $('#citytemp').html(thermoData.city);
        $('#temperature').html(thermoData.temp);
     });
   }


});
