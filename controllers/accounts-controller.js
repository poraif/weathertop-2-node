import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Sign up to the Service",
    };
    response.render("signup-view", viewData);
  },
  
    update(request, response) {
    const viewData = {
      title: "Update your details",
    };
    response.render("update-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },
  
    async updateDetails(request, response) {
    const user = await userStore.getUserById(request.params.id);
    const updatedDetails = {
    firstname: String(request.body.firstname),
    lastname: String(request.body.lastname),
    password: String(request.body.password),
    }
    console.log(`updating ${updatedDetails.firstname}`);
    response.redirect("/dashboard");
    },
 

  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },
  
};