'use strict';

  function Thermostat(){
    this.powerSavingMode = true;
    this.MAX_TEMP_WITH_PS_MODE_ON = 25;
    this.MAX_TEMP_WITH_PS_MODE_OFF = 32;
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.MEDIUM_USAGE_LIMIT = 18;
    this.maxTemperature = this.MAX_TEMP_WITH_PS_MODE_ON;
    this.temperature = this.DEFAULT_TEMP;
  }

  Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperature = function(){
      if (this.isLessThanMaximumTemperature()) {
        this.temperature += 1;
      } else if (this.powerSavingMode === true) {
        throw new Error("Max temp exceeded in power saving mode");
      } else {
        throw new Error("Max temperature exceeded");
      }
   };

   Thermostat.prototype.isLessThanMaximumTemperature = function(){
     return (this.temperature < this.maxTemperature);
   };

  Thermostat.prototype.decreaseTemperature = function(){
    if (this.temperature > this.MINIMUM_TEMP){
     this.temperature -= 1;
    } else {
      throw new Error("Temperature cannot drop below 10 degrees");
    }
  };

  Thermostat.prototype.turnOnPowerSavingMode = function(){
    this.powerSavingMode = true;
    this.maxTemperature = this.MAX_TEMP_WITH_PS_MODE_ON;
    if (this.temperature > this.MAX_TEMP_WITH_PS_MODE_ON) {
      this.temperature = this.MAX_TEMP_WITH_PS_MODE_ON;
    }
  };

  Thermostat.prototype.turnOffPowerSavingMode = function () {
    this.powerSavingMode = false;
    this.maxTemperature = this.MAX_TEMP_WITH_PS_MODE_OFF;
  };

  Thermostat.prototype.resetTemperature = function(){
    this.temperature = this.DEFAULT_TEMP;
  };

  Thermostat.prototype.colour = function () {
    if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
      return 'lowUsage'
    } else if (this.temperature < this.MAX_TEMP_WITH_PS_MODE_ON) {
      return 'mediumUsage'
    } else {
      return 'highUsage'
    }
  };
