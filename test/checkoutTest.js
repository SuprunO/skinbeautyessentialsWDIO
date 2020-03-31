const config = require("../config/main-config");
var dataGenerators = require("../utils/dataGenerators");
import Form_PO from "../page-objects/Form_PO";
import allureReporter from "@wdio/allure-reporter";
import Base_PO from "../page-objects/Base_PO";

describe("End to End Guest Checkout Test", () => {
  beforeEach(function() {
    step("Open site", () => {
    Form_PO.open();
  });
    allureReporter.addEnvironment("Browser:", config.browser);
    allureReporter.addEnvironment("Browser Version:", config.browserVersion);
    allureReporter.addEnvironment("Loglevel:", config.logLevel);
    allureReporter.addEnvironment("Author:", config.developer);
    allureReporter.addEnvironment("Platform Name:", config.platformName);
  });

  it("Test 1 Checkout", () => {
    expect(browser.getUrl()).to.contain("https://skinbeautyessentials.com/");
    step("Use search", () => {
      $(Form_PO.searchField).setValue(
        "Daily Essential Enzymes 500 mg. - 240 Capsules"
      );
      $(Form_PO.searchCTA).click();
    });
    step("Click on CLP image", () => {
      $(Form_PO.CLPImage).click();
    });
    step("Add Product to Cart", () => {
      $(Form_PO.addToCart).click();
    });
    step("Proceed to Cart", () => {
      Form_PO.goToCart();
      expect(browser.getUrl()).to.contain(
        "https://skinbeautyessentials.com/index.php?route=checkout/cart"
      );
      Form_PO.cartCheckoutCTA.click();
    });
    step("Login page", () => {
      Form_PO.guestRadioButton.click();
      Form_PO.goToShippingCTA.click();
    });
    step("Fill-in Shipping form and submit it", () => {
      Form_PO.submitAllInformationViaContactUsForm(
        "John",
        "Doe",
        "os@gmail.com",
        "3333333333",
        "666 Quicksilver road",
        "Northbrook",
        "60062",
        "United States",
        "Illinois"
      );
      Form_PO.billingDetailsSubmitButton.click();
    });
    step("Submit Checkout", () => {
      Form_PO.deliveryDetailsSubmitButton.click();
      Form_PO.paymentMethodSubmitButton.click();
      Form_PO.submitCheckout.click();
    });
    step("Fill-in Payment gate and submit it", () => {
      Form_PO.submitAllInformationViaContactUsFormPayment(
        "John",
        "Doe",
        "666 Quicksilver road",
        "United States",
        "Northbrook",
        "60062",
        "3333333333",
        "os@gmail.com",
        "City",
        "4444333322221111",
        "09",
        "2025",
        "123"
      );
      $(Form_PO.submitPaymentGate).click();
    });
  });

  // it("Test 2 Failed test", () => {
  //   expect(browser.getUrl()).to.contain("https://skinbeautyessentials.co/");
  // });

  it("Test 3 Passed test", () => {
    expect(browser.getUrl()).to.contain("https://skinbeautyessentials.com/");
  });

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
