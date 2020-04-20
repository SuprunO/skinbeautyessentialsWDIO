import allureReporter from "@wdio/allure-reporter";
import Allure from "../utils/allureFunction";
const config = require("../config/main-config");
import Form_PO from "../page-objects/Form_PO";
import MyAccount_PO from "../page-objects/MyAccount_PO";
import Registration_PO from "../page-objects/Registration_PO";

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

  it("Login to My account", () => {
    Allure.step("Go to Login Intercept page", () => {
      MyAccount_PO.goToLoginPage();
     });

    Allure.step("Fill-in returned customer credentials and submit form", () => {
      $(MyAccount_PO.returningCustomerEmailLocator).setValue(
        "os@SpeechGrammarList.com"
      );
      $(MyAccount_PO.returningCustomerPasswordLocator).setValue("Qwerty!1");
      $(MyAccount_PO.returningCustomerLoginCTA).click();
    });
    Allure.step("Verify the User reach My account page", () => {
      expect(browser.getTitle()).to.contain("My Account");
    });
  });

  it("Login and add new address", () => {
     Allure.step("Go to Login Intercept page", () => {
      MyAccount_PO.goToMyAccountPage();
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
        null,
        null,
        "Polyana",
        "United States",
        "Illinois",
        "New York",
        "60062",
        null,
        null
      );
      $(MyAccount_PO.ContinueCTALocator).click();
    });
  });

  it("Delete new address", () => {
       Allure.step("Go to Account page", () => {
        MyAccount_PO.goToMyAccountPage();
     });
    Allure.step("Click on 'Modify your address book entries' link", () => {
      browser.pause(10000);
      $(MyAccount_PO.AddressBookLinkLocator).click();
    });
    Allure.step("Delete 2-nd address", () => {
      $(MyAccount_PO.DeleteCTA_2_Locator).click();
    });
  });
});
