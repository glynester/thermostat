'use strict';

function Thermostat(){
  this.temperature = 20;
  this.powerSavingMode = true;
  this.maxTemperature = 25;
  // MAX_TEMPERATURE_WITH_POWER_SAVING_MODE_ON = 25;
  // MAX_TEMPERATURE_WITH_POWER_SAVING_MODE_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
    if (this.temperature < this.maxTemperature) {     // && this.powerSavingMode == true) {
      this.temperature += 1;
    } else if (this.powerSavingMode === true) {
      throw new Error("Max temp exceeded in power saving mode");
    } else {
      throw new Error("Max temperature exceeded");
    }

};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature >= 10){
   this.temperature -= 1;
  } else {
    throw new Error("Temperature cannot drop below 10 degrees");
  }
};

Thermostat.prototype.turnOnPowerSavingMode = function(){
  this.powerSavingMode = true;
  this.maxTemperature = 25;      //MAX_TEMPERATURE_WITH_POWER_SAVING_MODE_ON;
};

Thermostat.prototype.turnOffPowerSavingMode = function () {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
};
