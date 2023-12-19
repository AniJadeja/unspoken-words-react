class AboutMeModel {
  constructor(data) {
    // Mandatory property: introParagraph
    if (!data.introParagraph) {
      throw new Error('Missing mandatory property: introParagraph');
    }
    this.introParagraph = data.introParagraph;

    // Mandatory property: introParagraph
    if (!data.name) {
      throw new Error('Missing mandatory property: introParagraph');
    }
    this.name = data.name;

    // Mandatory property: skills
    if (!data.skills || typeof data.skills !== 'object') {
      throw new Error('Missing mandatory property: skills');
    }
    this.skills = {
      androidSkills: data.skills.androidSkills,
      webDevelopmentSkills: data.skills.webDevelopmentSkills,
      uiuxSkills: data.skills.uiuxSkills,
      otherSkills: data.skills.otherSkills,
      personalSkills: data.skills.personalSkills,
      professionalSkills: data.skills.professionalSkills,
    };

    // Mandatory property: achievements
    if (!data.achievements) {
      throw new Error('Missing mandatory property: achievements');
    }
    this.achievements = data.achievements;
    
    // Mandatory property: education
    if (!data.education || typeof data.education !== 'object') {
      throw new Error('Missing mandatory property: education');
    }
    this.education = {
      primaryEducation: data.education.primaryEducation,
      secondaryEducation: data.education.secondaryEducation,
    };
    

    this.primaryInterestStart = data.primaryInterestStart;
    this.primaryInterestEnd = data.primaryInterestEnd;
    this.primaryInterestHighlight = data.primaryInterestHighlight;
  }

}


function createAboutMeModel(data) {

  if (data.introParagraph !== undefined && data.introParagraph !== null && data.introParagraph !== "" && data.introParagraph !== " "
    && data.introParagraph !== "undefined" && data.introParagraph !== "null" && data.introParagraph !== "N/A" && data.introParagraph !== "n/a") {
    if (data.skills !== undefined && data.skills !== null && data.skills !== "" && data.skills !== " " && data.skills !== "undefined" && data.skills !== "null" && data.skills !== "N/A" && data.skills !== "n/a") {
      if (data.skills.androdiSkills !== undefined && data.skills.androdiSkills !== null && data.skills.androdiSkills !== "" && data.skills.androdiSkills !== " "
        && data.skills.androdiSkills !== "undefined" && data.skills.androdiSkills !== "null" && data.skills.androdiSkills !== "N/A" && data.skills.androdiSkills !== "n/a") {
        if (data.skills.WebDevelopmentSkills !== undefined && data.skills.WebDevelopmentSkills !== null && data.skills.WebDevelopmentSkills !== "" && data.skills.WebDevelopmentSkills !== " "
          && data.skills.WebDevelopmentSkills !== "undefined" && data.skills.WebDevelopmentSkills !== "null" && data.skills.WebDevelopmentSkills !== "N/A" && data.skills.WebDevelopmentSkills !== "n/a") {
          if (data.skills.uiuxSkills !== undefined && data.skills.uiuxSkills !== null && data.skills.uiuxSkills !== "" && data.skills.uiuxSkills !== " "
            && data.skills.uiuxSkills !== "undefined" && data.skills.uiuxSkills !== "null" && data.skills.uiuxSkills !== "N/A" && data.skills.uiuxSkills !== "n/a") {
            if (data.skills.otherSkills !== undefined && data.skills.otherSkills !== null && data.skills.otherSkills !== "" && data.skills.otherSkills !== " "
              && data.skills.otherSkills !== "undefined" && data.skills.otherSkills !== "null" && data.skills.otherSkills !== "N/A" && data.skills.otherSkills !== "n/a") {
              if (data.skills.personalSkills !== undefined && data.skills.personalSkills !== null && data.skills.personalSkills !== "" && data.skills.personalSkills !== " "
                && data.skills.personalSkills !== "undefined" && data.skills.personalSkills !== "null" && data.skills.personalSkills !== "N/A" && data.skills.personalSkills !== "n/a") {
                if (data.skills.professionalSkills !== undefined && data.skills.professionalSkills !== null && data.skills.professionalSkills !== "" && data.skills.professionalSkills !== " "
                  && data.skills.professionalSkills !== "undefined" && data.skills.professionalSkills !== "null" && data.skills.professionalSkills !== "N/A" && data.skills.professionalSkills !== "n/a") {
                  if (data.achievements !== undefined && data.achievements !== null && data.achievements !== "" && data.achievements !== " "
                    && data.achievements !== "undefined" && data.achievements !== "null" && data.achievements !== "N/A" && data.achievements !== "n/a") {
                    if (data.primaryInterests !== undefined && data.primaryInterests !== null && data.primaryInterests !== "" && data.primaryInterests !== " "
                      && data.primaryInterests !== "undefined" && data.primaryInterests !== "null" && data.primaryInterests !== "N/A" && data.primaryInterests !== "n/a") {
                      if (data.education !== undefined && data.education !== null && data.education !== "" && data.education !== " "
                        && data.education !== "undefined" && data.education !== "null" && data.education !== "N/A" && data.education !== "n/a") {
                        if (data.education.primaryEducation !== undefined && data.education.primaryEducation !== null && data.education.primaryEducation !== "" && data.education.primaryEducation !== " "
                          && data.education.primaryEducation !== "undefined" && data.education.primaryEducation !== "null" && data.education.primaryEducation !== "N/A" && data.education.primaryEducation !== "n/a") {
                          if (data.education.secondaryEducation !== undefined && data.education.secondaryEducation !== null && data.education.secondaryEducation !== "" && data.education.secondaryEducation !== " "
                            && data.education.secondaryEducation !== "undefined" && data.education.secondaryEducation !== "null" && data.education.secondaryEducation !== "N/A" && data.education.secondaryEducation !== "n/a") {
                            return new AboutMeModel(data);
                          } else {
                            return new Error("Invalid secondaryEducation");
                          }
                        } else {
                          return new Error("Invalid primaryEducation");
                        }
                      }
                      else {
                        return new Error("Invalid education");
                      }
                    }
                    else {
                      return new Error("Invalid primaryInterests");
                    }
                  }
                  else {
                    return new Error("Invalid achievements");
                  }
                }
                else {
                  return new Error("Invalid professionalSkills");
                }
              }
              else {
                return new Error("Invalid personalSkills");
              }
            }
            else {
              return new Error("Invalid otherSkills");
            }
          }
          else {
            return new Error("Invalid uiuxSkills");
          }
        }
        else {
          return new Error("Invalid WebDevelopmentSkills");
        }
      }
      else {
        return new Error("Invalid androdiSkills");
      }
    }
    else {
      return new Error("Invalid skills");
    }
  }



}

module.exports = AboutMeModel;