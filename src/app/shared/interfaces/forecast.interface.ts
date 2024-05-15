export interface IForecastItem {
  date:                     Date;
  weatherCode:              number;
  minTemperature:           number;
  maxTemperature:           number;
  estimatedGeneratedEnergy: number;
  energyUnits:              EnergyUnits;
}

export interface EnergyUnits {
  date:           string;
  weatherCode:    string;
  minTemperature: string;
  maxTemperature: string;
}
