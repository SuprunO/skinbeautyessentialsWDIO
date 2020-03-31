import allureReporter from "@wdio/allure-reporter";
const config = require("../config/main-config");
import Form_PO from "../page-objects/Form_PO";

describe("My Account Test", () => {
    beforeEach(function() {
      Form_PO.open();
      allureReporter.addEnvironment("Browser:", config.browser);
      allureReporter.addEnvironment("Browser Version:", config.browserVersion);
      allureReporter.addEnvironment("Loglevel:", config.logLevel);
      allureReporter.addEnvironment("Author:", config.developer);
      allureReporter.addEnvironment("Platform Name:", config.platformName);
    });

    it("Create my account", () => {
         });

    it("Login to my account and add address", () => {

    });

    it("Delete address", () => {

    });
});