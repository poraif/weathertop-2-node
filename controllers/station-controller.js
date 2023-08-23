import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/analytics.js";
import { conversions } from "../utils/conversions.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const latestReading = await stationAnalytics.getLatestReading(station._id);
    const latestWeather = conversions.convertWeatherCode(latestReading.code);
    const latestTempC = latestReading.temperature;
    const latestTempF = conversions.celsiusToFahrenheit(latestReading.temperature);
    const latestWindSpeedBft = conversions.windSpeedtoBeaufort(latestReading.windSpeed);
    const latestPressure = latestReading.pressure;
    const latestCompassDirection = conversions.windDirectionToCompassDirection(latestReading.windDirection);
    const viewData = {
      title: "Station",
      station: station,
      latestWeather: latestWeather,
      latestTempC: latestTempC,
      latestTempF: latestTempF,
      latestWindSpeedBft: latestWindSpeedBft,
      latestPressure: latestPressure,
      latestCompassDirection: latestCompassDirection,
    };
    response.render("station-view", viewData);
  },
  
    async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
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

