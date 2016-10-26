'use strict';

describe ('Thermostat:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at twenty degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('temperature can be increased with up button',function(){
    thermostat.increaseTemperature();
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(22);
  });

  it('temperature can be decreased with down button',function(){
    thermostat.decreaseTemperature();
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(18);
  });

  it('will not allow the temperatue to drop below 10 degrees', function(){
    do { thermostat.decreaseTemperature(); }
    while (thermostat.temperature >= 10);
    expect(function(){thermostat.decreaseTemperature()}).toThrowError("Temperature cannot drop below 10 degrees");
  });

  it('is limited to 25 deg if powersaving mode is on', function(){
    thermostat.turnOnPowerSavingMode();
    for (var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    }
    expect(function(){thermostat.increaseTemperature()}).toThrowError("Max temp exceeded in power saving mode");
  });

  it('is limited to 32 deg if powersaving mode is off', function(){
    thermostat.turnOffPowerSavingMode();
    for (var i = 0; i < 12; i++) {
      thermostat.increaseTemperature();
    }
    expect(function(){thermostat()}).toThrowError("Max temp exceeded with poser saving mode");
  })

});
