import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";

const db = initStore("readings");

export const stationAnalytics = {
  async getLatestReading(stationId) {
    await db.read();
    const stationReadings = db.data.readings.filter(
      (reading) => reading.stationid === stationId
    );
    if (stationReadings.length > 0) {
      return stationReadings[stationReadings.length - 1];
    } else {
      return false;
    }
  },

  getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minTemp.temperature) {
          minTemp = station.readings[i];
        }
      }
    }
    return minTemp;
  },

  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maxTemp.temperature) {
          maxTemp = station.readings[i];
        }
      }
    }
    return maxTemp;
  },

  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if (station.readings.length > 0) {
      minWindSpeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed < minWindSpeed.windSpeed) {
          minWindSpeed = station.readings[i];
        }
      }
    }
    return minWindSpeed;
  },

  getMaxWindSpeed(station) {
    let maxWindSpeed = null;
    if (station.readings.length > 0) {
      maxWindSpeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed > maxWindSpeed.windSpeed) {
          maxWindSpeed = station.readings[i];
        }
      }
    }
    return maxWindSpeed;
  },

  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0) {
      minPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure < minPressure.pressure) {
          minPressure = station.readings[i];
        }
      }
    }
    return minPressure;
  },

  getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maxPressure.pressure) {
          maxPressure = station.readings[i];
        }
      }
    }
    return maxPressure;
  },

  getTimeStamp() {
    const timeStamp = new Date();
    return timeStamp.toLocaleString("en-IE", { timeZone: "Europe/Dublin" });
  },
};
