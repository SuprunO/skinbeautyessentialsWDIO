import allureReporter from "@wdio/allure-reporter";
const config = require("../config/main-config");
import Base_PO from "../page-objects/Base_PO";
import Form_PO from "../page-objects/Form_PO";
import Registration_PO from "../page-objects/Registration_PO";

describe("My Account Test", () => {
  beforeEach(function() {
    Form_PO.open();
    allureReporter.addEnvironment("Browser:", config.browser);
    allureReporter.addEnvironment("Browser Version:", config.browserVersion);
    allureReporter.addEnvironment("Loglevel:", config.logLevel);
    allureReporter.addEnvironment("Author:", config.developer);
    allureReporter.addEnvironment("Platform Name:", config.platformName);
  });

  it("Register new account", () => {
    Registration_PO.goToRegistrationPage();
    Registration_PO.fillinRegistrationFields(
      "Jane",
      "Doe",
      "os@SpeechGrammarList.com",
      "3334444445",
      "Polyana",
      "United States",
      "Illinois",
      "New York","60062",
      "Qwerty!1",
      "Qwerty!1",    
    );
    Registration_PO.registrationPrivacyPolicyRadioCTA.click();
    Registration_PO.registrationContinueCTA.click();
  });

  it("Login to my account", () => {
  browser.url(config.baseUrl +"/index.php?route=account/login");
  $(Form_PO.returningCustomerEmailLocator).setValue("os@SpeechGrammarList.com");
  $(Form_PO.returningCustomerPasswordLocator).setValue("Qwerty!1");
  $(Form_PO.returningCustomerLoginCTA).click();
  expect(browser.getTitle()).to.contain("My Account");
  });

  it("Delete address", () => {});


  function step(step, func, attachment) {
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
  
});


      
   
    
     