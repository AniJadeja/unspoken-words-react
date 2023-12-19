class HomePageModel {
    constructor(data) {
      this.displayPictureUrl = data.displayPictureUrl;
      this.role = data.role;
      this.name = data.name;
    }
  }


  function createHomePageModel(data) {

    if(data.displayPictureUrl !== undefined && data.displayPictureUrl !== null && data.displayPictureUrl !== "" && data.displayPictureUrl !== " " 
    && data.displayPictureUrl !== "undefined" && data.displayPictureUrl !== "null" && data.displayPictureUrl !== "N/A" && data.displayPictureUrl !== "n/a") {
      if(data.displayPictureUrl.includes("http://") || data.displayPictureUrl.includes("https://")) {

        if(data.role !== undefined && data.role !== null && data.role !== "" && data.role !== " "  && data.role !== "undefined" && data.role !== "null" && data.role !== "N/A" && data.role !== "n/a") {
          return new HomePageModel(data);
        } else {
          return new Error("Invalid role");
        } 
      } else {
        return new Error("Invalid displayPictureUrl");
      }
    }
    else {
      return new Error("Invalid displayPictureUrl");
    }
    
  }

  module.exports = { HomePageModel, createHomePageModel };