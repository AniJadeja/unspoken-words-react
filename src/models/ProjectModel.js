class ProjectModel {
    constructor(data) {
      this.name = data.name;
      this.description = data.description;
      this.images = data.images;
      this.technologies = data.technologies;
      this.features = data.features;
      this.isDarken = data.isDarken;
    }
  }


export default ProjectModel;