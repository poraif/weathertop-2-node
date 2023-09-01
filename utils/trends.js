import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { stationStore } from "../models/station-store.js"
import { readingStore } from "../models/reading-store.js";

const db = initStore("readings");

export const trends ={
  
    checkTempUpTrend(station){
    let latestThreeReadings = null;
    if (station.readings.length > 2) {
      latestThreeReadings = station.readings.slice(-3);
      if ((latestThreeReadings[2].temperature > latestThreeReadings[1].temperature) && (latestThreeReadings[1].temperature > latestThreeReadings[0].temperature)) {
    return true;
  }
    }
      else {
        return false;
      }
  },
  
    checkTempDownTrend(station){
    let latestThreeReadings = null;
    if (station.readings.length > 2) {
      latestThreeReadings = station.readings.slice(-3);
      if ((latestThreeReadings[2].temperature < latestThreeReadings[1].temperature) && (latestThreeReadings[1].temperature < latestThreeReadings[0].temperature)) {
    return true;
  }
    }
      else {
        return false;
      }
  },
  
  
    checkWindUpTrend(station){
    let latestThreeReadings = null;
    if (station.readings.length > 2) {
      latestThreeReadings = station.readings.slice(-3);
      if ((latestThreeReadings[2].windSpeed > latestThreeReadings[1].windSpeed) && (latestThreeReadings[1].windSpeed > latestThreeReadings[0].windSpeed)) {
    return true;
  }
    }
      else {
        return false;
      }
  },
  
    checkWindDownTrend(station){
    let latestThreeReadings = null;
    if (station.readings.length > 2) {
      latestThreeReadings = station.readings.slice(-3);
      if ((latestThreeReadings[2].windSpeed < latestThreeReadings[1].windSpeed) && (latestThreeReadings[1].windSpeed < latestThreeReadings[0].windSpeed)) {
    return true;
  }
    }
      else {
        return false;
      }
  },
  
  
      checkPressureUpTrend(station){
    let latestThreeReadings = null;
    if (station.readings.length > 2) {
      latestThreeReadings = station.readings.slice(-3);
      if ((latestThreeReadings[2].pressure > latestThreeReadings[1].pressure) && (latestThreeReadings[1].pressure > latestThreeReadings[0].pressure)) {
    return true;
  }
    }
      else {
        return false;
      }
  },
  
  
    checkPressureDownTrend(station){
    let latestThreeReadings = null;
    if (station.readings.length > 2) {
      latestThreeReadings = station.readings.slice(-3);
      if ((latestThreeReadings[2].pressure < latestThreeReadings[1].pressure) && (latestThreeReadings[1].pressure < latestThreeReadings[0].pressure)) {
    return true;
  }
    }
      else {
        return false;
      }
  },
  
  
}