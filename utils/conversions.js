export const conversions = {
  
  convertWeatherCode(weatherCode) {
    switch (weatherCode) {
      case 100:
        return "Clear";
        break;
      case 200:
        return "Partial clouds";
        break;
      case 300:
        return "Cloudy";
        break;
      case 400:
        return "Light showers";
        break;
      case 500:
        return "Heavy showers";
        break;
      case 600:
        return "Rain";
        break;
      case 700:
        return "Snow";
        break;
      case 800:
        return "Thunder";
        break;
      default:
        return "Please enter a valid code";
        break;
    }
  },
  
  celsiusToFahrenheit(temperature) {
    return temperature * 1.8 + 32;
  },

  windSpeedtoBeaufort(windSpeed) {
    if (windSpeed > 0 && windSpeed <= 1.0) {
      return 0;
    } else if (windSpeed > 1.0 && windSpeed <= 5.0) {
      return 1;
    } else if (windSpeed > 5.0 && windSpeed <= 11.0) {
      return 2;
    } else if (windSpeed > 11.0 && windSpeed <= 19.0) {
      return 3;
    } else if (windSpeed > 19.0 && windSpeed <= 28.0) {
      return 4;
    } else if (windSpeed > 28.0 && windSpeed <= 38.0) {
      return 5;
    } else if (windSpeed > 39.0 && windSpeed <= 49.0) {
      return 6;
    } else if (windSpeed > 49.0 && windSpeed <= 61.0) {
      return 7;
    } else if (windSpeed > 61.0 && windSpeed <= 74.0) {
      return 8;
    } else if (windSpeed > 74.0 && windSpeed <= 88.0) {
      return 9;
    } else if (windSpeed > 88.0 && windSpeed <= 102.0) {
      return 10;
    } else if (windSpeed > 102.0 && windSpeed <= 117.0) {
      return 11;
    } else {
      return "please enter a number greater than 0";
    }
  },

  windDirectionToCompassDirection(windDirection) {
    if (
      (windDirection > 348.75 && windDirection <= 360) ||
      (windDirection > 0 && windDirection <= 11.25)
    ) {
      return "North";
    } else if (windDirection > 11.25 && windDirection <= 33.75) {
      return "North North East";
    } else if (windDirection > 33.75 && windDirection <= 56.25) {
      return "North East";
    } else if (windDirection > 56.25 && windDirection <= 78.75) {
      return "East North East";
    } else if (windDirection > 78.75 && windDirection <= 101.25) {
      return "East";
    } else if (windDirection > 101.25 && windDirection <= 123.75) {
      return "East South East";
    } else if (windDirection > 123.75 && windDirection <= 146.25) {
      return "South East";
    } else if (windDirection > 146.25 && windDirection <= 168.75) {
      return "South South East";
    } else if (windDirection > 168.75 && windDirection <= 191.25) {
      return "South";
    } else if (windDirection > 191.25 && windDirection <= 213.75) {
      return "South South West";
    } else if (windDirection > 213.75 && windDirection <= 236.25) {
      return "South West";
    } else if (windDirection > 236.25 && windDirection <= 258.75) {
      return "West South West";
    } else if (windDirection > 258.75 && windDirection <= 281.25) {
      return "West";
    } else if (windDirection > 281.25 && windDirection <= 303.75) {
      return "West North West";
    } else if (windDirection > 303.75 && windDirection <= 326.25) {
      return "North West";
    } else if (windDirection > 326.25 && windDirection <= 348.75) {
      return "North North West";
    } else {
      return "Please enter a valid value";
    }
  },
  
  calcWindChill(windSpeed, temperature) {
    const i = windSpeed ** 0.16;
    return (Math.round((13.12 + (0.6215 * temperature) - (11.37 * i) + ((0.3965 * temperature) * i)) * 100) / 100.0);
  }
};
