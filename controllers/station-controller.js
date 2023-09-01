import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/analytics.js";
import { conversions } from "../utils/conversions.js";
import { trends } from "../utils/trends.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const latestReading = await stationAnalytics.getLatestReading(station._id);
    const latestWeather = conversions.convertWeatherCode(latestReading.code);
    const latestTempC = latestReading.temperature;
    const latestTempF = conversions.celsiusToFahrenheit(
      latestReading.temperature
    );
    const latestWindSpeedBft = conversions.windSpeedtoBeaufort(
      latestReading.windSpeed
    );
    const latestPressure = latestReading.pressure;
    const latestCompassDirection = conversions.windDirectionToCompassDirection(
      latestReading.windDirection
    );
    const latestWindChill = conversions.calcWindChill(
      latestReading.windSpeed,
      latestReading.temperature
    );
    const minTemp = stationAnalytics.getMinTemp(station);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minWindSpeed = stationAnalytics.getMinWindSpeed(station);
    const maxWindSpeed = stationAnalytics.getMaxWindSpeed(station);
    const minPressure = stationAnalytics.getMinPressure(station);
    const maxPressure = stationAnalytics.getMaxPressure(station);
    const tempUpTrend = trends.checkTempUpTrend(station);
    const tempDownTrend = trends.checkTempDownTrend(station);
    const windUpTrend = trends.checkWindUpTrend(station);
    const windDownTrend = trends.checkWindDownTrend(station);
    const pressureUpTrend = trends.checkPressureUpTrend(station);
    const pressureDownTrend = trends.checkPressureDownTrend(station);
    const viewData = {
      title: "Station",
      station,
      latestReading: latestReading,
      station: station,
      latestWeather: latestWeather,
      latestTempC: latestTempC,
      latestTempF: latestTempF,
      latestWindSpeedBft: latestWindSpeedBft,
      latestPressure: latestPressure,
      latestCompassDirection: latestCompassDirection,
      latestWindChill: latestWindChill,
      minTemp: minTemp,
      maxTemp: maxTemp,
      minWindSpeed: minWindSpeed,
      maxWindSpeed: maxWindSpeed,
      minPressure: minPressure,
      maxPressure: maxPressure,
      tempUpTrend: tempUpTrend,
      tempDownTrend: tempDownTrend,
      windUpTrend: windUpTrend,
      windDownTrend: windDownTrend,
      pressureUpTrend: pressureUpTrend,
      pressureDownTrend: pressureDownTrend,
    };
    response.render("station-view", viewData);
  },

  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const dateTime = await stationAnalytics.getTimeStamp();
    const newReading = {
      timestamp: dateTime,
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding reading ${newReading.code}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },

  async deleteReading(request, response) {
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log(`Deleting reading ${readingId} from station ${stationId}`);
    await readingStore.deleteReading(readingId);
    response.redirect("/station/" + stationId);
  },
};
