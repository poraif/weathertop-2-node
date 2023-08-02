export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "About station",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};
