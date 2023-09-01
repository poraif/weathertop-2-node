import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/analytics.js";
import { conversions } from "../utils/conversions.js";
import { trends } from "../utils/trends.js";
import { userStore } from "../models/user-store.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const stations = await stationStore.getStationsByUserId(loggedInUser._id);
    const sortedStations = stations.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    const viewData = {
      title: "Station Dashboard",
      firstname: loggedInUser.firstname,
      lastname: loggedInUser.lastname,
      stations: sortedStations,
    };

    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      title: request.body.title,
      lat: request.body.lat,
      lon: request.body.lon,
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
  },
};
