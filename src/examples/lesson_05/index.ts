import { Certificate, privateDecrypt } from "node:crypto";

class FrontendDev {
  name: string;

  constructor(devName: string) {
    this.name = devName;
  }

  writeCode(featureName: string) {
    return { name: featureName, status: "written" };
  }
}

const devBill = new FrontendDev("Bill");

// console.log(devBill.name);
// console.log(devBill);
// console.log(devBill.writeCode("Weather-App"));

//?==========================================================================================================================================================================

class QAEngineer {
  name: string;
  private dev: FrontendDev;

  constructor(engineerName: string, devObj: FrontendDev) {
    this.name = engineerName;
    this.dev = devObj;
  }

  taskFeature(taskName: string) {
    const feature = this.dev.writeCode(taskName);

    return { ...feature, status: "tasted" };
  }
}

const engineerMax = new QAEngineer("Max", devBill);

// console.log(engineerMax);
// console.log(engineerMax.name);
// console.log(engineerMax.taskFeature("Serch-Panel"));

//!=============================================================================================================================================================

class ProjectManager {
  constructor(
    public name: string,
    private qa: QAEngineer,
  ) {
    this.name = name;
    this.qa = qa;
  }

  releaseTask(userStory: string) {
    const checkTask = this.qa.taskFeature(userStory);

    return {...checkTask, version: "v1.1"}
  }
}

const managerMartin = new ProjectManager("Martin", engineerMax); 

console.log(managerMartin); 
console.log(managerMartin.name); 
console.log(managerMartin.releaseTask("Relesed Weather-App"));
