import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/analytics.js";
import { conversions } from "../utils/conversions.js";

export const dashboardController = {
  
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const stations = await stationStore.getStationsByUserId(loggedInUser._id);
    
        for(const station of stations){
      const latestReading = await stationAnalytics.getLatestReading(station._id);
      station.latestReading = latestReading;
    };
    
    const viewData = {
      title: "Station Dashboard",
      stations: stations,
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  }, 
  
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  }
};
