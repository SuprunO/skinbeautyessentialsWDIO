import allureReporter from "@wdio/allure-reporter";
import Allure from "../utils/allureFunction";
const config = require("../config/main-config");
import Form_PO from "../page-objects/Form_PO";
import MyAccount_PO from "../page-objects/MyAccount_PO";
import Registration_PO from "../page-objects/Registration_PO";
import dataGenerators from "../utils/dataGenerators";

describe("My Account Test", () => {
  beforeEach(function() {
    Allure.step("Open site", () => {
      Form_PO.open();
    });
    allureReporter.addEnvironment("Browser:", config.browser);
    allureReporter.addEnvironment("Browser Version:", config.browserVersion);
    allureReporter.addEnvironment("Loglevel:", config.logLevel);
    allureReporter.addEnvironment("Author:", config.developer);
    allureReporter.addEnvironment("Platform Name:", config.platformName);
  });

  it.skip("Register new account", () => {
    Allure.step("Go to Registration page", () => {
      Registration_PO.goToRegistrationPage();
    });
    Allure.step("Fill-in registration form", () => {
      Registration_PO.fillinRegistrationFields(
        "Jane",
        "Doe",
        dataGenerators.generateRandomEmailAddress(),
        "3334444445",
        "Polyana",
        "United States",
        "Illinois",
        "New York",
        "60062",
        "Qwerty!1",
        "Qwerty!1"
      );
    });

    Allure.step("Click on PrivacyPolicyRadio-Button", () => {
      Registration_PO.registrationPrivacyPolicyRadioCTA.click();
    });
    Allure.step("Click on Continue Button", () => {
      Registration_PO.registrationContinueCTA.click();
    });

    Allure.step("Verify the User reach Account / success page", () => {
      expect(browser.getTitle()).to.contain("Your Account Has Been Created!");
    });
  });

  it.skip("Login to My account", () => {
    Allure.step("Go to Login Intercept page", () => {
      browser.url(config.baseUrl + "/index.php?route=account/login");
    });

    Allure.step("Fill-in returned customer credentials and submit form", () => {
      $(Form_PO.returningCustomerEmailLocator).setValue(
        "os@SpeechGrammarList.com"
      );
      $(Form_PO.returningCustomerPasswordLocator).setValue("Qwerty!1");
      $(Form_PO.returningCustomerLoginCTA).click();
    });
    Allure.step("Verify the User reach My account page", () => {
      expect(browser.getTitle()).to.contain("My Account");
    });
  });

  it("Login and add new address", () => {
    Allure.step("Go to Login Intercept page", () => {
      browser.url(config.baseUrl + "/index.php?route=account/login");
    });

    Allure.step("Fill-in returned customer credentials and submit form", () => {
      $(Form_PO.returningCustomerEmailLocator).setValue(
      "os@SpeechGrammarList.com");
      $(Form_PO.returningCustomerPasswordLocator).setValue("Qwerty!1");
      $(Form_PO.returningCustomerLoginCTA).click();
    });

    Allure.step("Click on 'Modify your address book entries' link", () => {
      $(MyAccount_PO.AddressBookLinkLocator).click();
    });
    Allure.step("Click on 'Add new address' CTA", () => {
      $(MyAccount_PO.NewAddressCTALocator).click();
    });
    Allure.step("Fill the EDIT Address form and submit it", () => {
      Registration_PO.fillinRegistrationFields(   
      "Jane",
      "Doe",
      dataGenerators.generateRandomEmailAddress(),
      "3334444445",
      "Polyana",
      "United States",
      "Illinois",
      "New York",
      "60062",
      "Qwerty!1",
      "Qwerty!1"
      );
      $(MyAccount_PO.ContinueCTALocator).click();
    });
  });

  it.skip("Delete new address", () => {
    Allure.step("Go to Login Intercept page", () => {
      browser.url(config.baseUrl + "/index.php?route=account/login");
    });

    Allure.step("Fill-in returned customer credentials and submit form", () => {
      $(Form_PO.returningCustomerEmailLocator).setValue(
        "os@SpeechGrammarList.com"
      );
      $(Form_PO.returningCustomerPasswordLocator).setValue("Qwerty!1");
      $(Form_PO.returningCustomerLoginCTA).click();
    });

    Allure.step("Click on 'Modify your address book entries' link", () => {
      $(MyAccount_PO.AddressBookLinkLocator).click();
    });
    Allure.step("Delete 2-nd address", () => {
      $(MyAccount_PO.DeleteCTA_2_Locator).click();
    });
  });
});
