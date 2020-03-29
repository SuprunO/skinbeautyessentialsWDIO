const config = require("../config/main-config");
var dataGenerators = require("../utils/dataGenerators");
import Form_PO from "../page-objects/Form_PO";
import allureReporter from "@wdio/allure-reporter";
import Base_PO from "../page-objects/Base_PO";

describe("End to End Guest Checkout Test", () => {
  beforeEach(function() {
    Form_PO.open();
    allureReporter.addEnvironment("Browser:", config.browser);
    allureReporter.addEnvironment("Browser Version:", config.browserVersion);
    allureReporter.addEnvironment("Loglevel:", config.logLevel);
    allureReporter.addEnvironment("Author:", config.developer)
  });

  it("Checkout", () => {
    expect(browser.getUrl()).to.contain("https://skinbeautyessentials.com/");
    // $(Form_PO.searchField).setValue("Daily Essential Enzymes 500 mg. - 240 Capsules");
    // $(Form_PO.searchCTA).click();
    // $(Form_PO.CLPImage).click();
    // $(Form_PO.addToCart).click();
    // Form_PO.goToCart();
    // expect(browser.getUrl()).to.contain("https://skinbeautyessentials.com/index.php?route=checkout/cart");
    // Form_PO.cartCheckoutCTA.click();
    // Form_PO.guestRadioButton.click();
    // Form_PO.goToShippingCTA.click();
    // allureReporter.addStep('Shipping page');
    // Form_PO.submitAllInformationViaContactUsForm(
    //   "John",
    //   "Doe",
    //   "os@gmail.com",
    //   "3333333333",
    //   "666 Quicksilver road",
    //   "Northbrook",
    //   "60062",
    //   "United States",
    //   "Illinois"
    // );
    // Form_PO.billingDetailsSubmitButton.click();
    // Form_PO.deliveryDetailsSubmitButton.click();
    // Form_PO.paymentMethodSubmitButton.click();
    // Form_PO.submitCheckout.click();
    // allureReporter.addStep('Payment gate');
    //   Form_PO.submitAllInformationViaContactUsFormPayment(
    //   "John",
    //   "Doe",
    //   "666 Quicksilver road",
    //   "United States",
    //   "Northbrook",
    //   "60062",
    //   "3333333333",
    //   "os@gmail.com",
    //   "City",
    //   "4444333322221111",
    //   "09",
    //   "2025",
    //   "123"
    // );
    // $(Form_PO.submitPaymentGate).click();
  });

  // it("Test 2 Failed test", () => {
  //   expect(browser.getUrl()).to.contain("https://skinbeautyessentials.co/");
  // });
});


