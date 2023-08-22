import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { stationStore } from "../models/station-store.js"
import { readingStore } from "../models/reading-store.js";

const db = initStore("readings");

export const stationAnalytics ={
  
  async getLatestReading(stationId) {
    await db.read();
    const stationReadings = db.data.readings.filter((reading) => reading.stationid === stationId);
    if (stationReadings.length > 0) {
      return stationReadings[stationReadings.length - 1];
    }
    else {
        return stationReadings === "no readings to show. Please enter a reading.";
    };
  },
};
