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
        return  "Heavy showers";
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
    return ((temperature * 1.8) + 32);
  },
  
  windSpeedtoBeaufort(windSpeed) {

    if ((windSpeed > 0) && (windSpeed <= 1.0)) {
      return 0;
    } else if ((windSpeed > 1.0) && (windSpeed <= 5.0)) {
      return 1;
    } else if ((windSpeed > 5.0) && (windSpeed <= 11.0)) {
      return 2;
    } else if ((windSpeed > 11.0) && (windSpeed <= 19.0)) {
      return 3;
    } else if ((windSpeed > 19.0) && (windSpeed <= 28.0)) {
      return 4;
    } else if ((windSpeed > 28.0) && (windSpeed <= 38.0)) {
      return 5;
    } else if ((windSpeed > 39.0) && (windSpeed <= 49.0)) {
      return 6;
    } else if ((windSpeed > 49.0) && (windSpeed <= 61.0)) {
      return 7;
    } else if ((windSpeed > 61.0) && (windSpeed <= 74.0)) {
      return 8;
    } else if ((windSpeed > 74.0) && (windSpeed <= 88.0)) {
      return 9;
    } else if ((windSpeed > 88.0) && (windSpeed <= 102.0)) {
      return 10;
    } else if ((windSpeed > 102.0) && (windSpeed <= 117.0)) {
      return 11;
    } else {
      return "please enter a number greater than 0";
    }
  },
  
  
}