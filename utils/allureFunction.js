import allureReporter from "@wdio/allure-reporter";


module.exports = {
    step : function(step, func, attachment) {
        allureReporter.startStep(step);
    
        if (attachment) {
          allureReporter.addAttachment(attachment);
        }
    
        let status;
        try {
          func();
        } catch (error) {
          allureReporter.addAttachment(error);
          if (error && error.name === "AssertionError") {
            status = "failed";
          } else {
            status = "broken";
          }
        } finally {
          allureReporter.endStep(status); // undefined => passed
        }
      }


    
}