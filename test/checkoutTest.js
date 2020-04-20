const config = require("../config/main-config");
import Form_PO from "../page-objects/Form_PO";
import Header_PO from "../page-objects/Header_PO";
import allureReporter from "@wdio/allure-reporter";
import Allure from "../utils/allureFunction";
import PaymentProcessor_PO from "../page-objects/PaymentProcessor_PO";
import Shipping_PO from "../page-objects/Shipping_PO";

describe("End to End Guest Checkout Test", () => {
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

  it("Test 1: Checkout", () => {
    expect(browser.getUrl()).to.contain("https://skinbeautyessentials.com/");
    Allure.step("Use search", () => {
      $(Header_PO.searchField).setValue(
        "Daily Essential Enzymes 500 mg. - 240 Capsules"
      );
      $(Header_PO.searchCTA).click();
    });
    Allure.step("Click on CLP image", () => {
      $(Form_PO.CLPImage).click();
    });
    Allure.step("Add Product to Cart", () => {
      $(Form_PO.addToCart).click();
    });
    Allure.step("Proceed to Cart", () => {
      Form_PO.goToCart();
      expect(browser.getUrl()).to.contain(
        "https://skinbeautyessentials.com/index.php?route=checkout/cart"
      );
      Form_PO.cartCheckoutCTA.click();
    });
    Allure.step("Login page", () => {
      Form_PO.guestRadioButton.click();
      Form_PO.goToShippingCTA.click();
    });
    Allure.step("Fill-in Shipping form and submit it", () => {
      Shipping_PO.submitShippingForm(
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
    Allure.step("Submit Checkout", () => {
      Form_PO.deliveryDetailsSubmitButton.click();
      Form_PO.paymentMethodSubmitButton.click();
      Form_PO.submitCheckout.click();
    });
    Allure.step("Fill-in Payment gate and submit it", () => {
      PaymentProcessor_PO.submitAllInformationViaContactUsFormPayment(
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
      $(PaymentProcessor_PO.submitPaymentGate).click();
    });
  });

  it("Test 2: Passed test", () => {
    expect(browser.getUrl()).to.contain("https://skinbeautyessentials.com/");
  });
});
