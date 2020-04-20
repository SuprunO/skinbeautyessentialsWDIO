import Base_PO from "./Base_PO";
const config = require("../config/main-config");

class Form_PO extends Base_PO {
  open() {
    super.open(config.baseUrl);
  }

  goToCart() {
    super.open(config.baseUrl + "/index.php?route=checkout/cart");
  }

  get CLPImage() {
    return $(".image");
  }

  get addToCart() {
    return $("#button-cart");
  }

  get cartCheckoutCTA() {
    return $(".buttons.clearfix>.pull-right>a");
  }

  get guestRadioButton() {
    return $("[value=guest]");
  }

  get goToShippingCTA() {
    return $("#button-account");
  }

  // Submit buttons
  get billingDetailsSubmitButton() {
    return $(".pull-right>[value=Continue]");
  }

  get deliveryDetailsSubmitButton() {
    browser.pause(5000);
    return $("#button-shipping-method");
  }

  get paymentMethodSubmitButton() {
    return $("#button-payment-method_check");
  }

  get confirmOrderSubmitButton() {
    return $("[value*=Confirm]");
  }

  get submitCheckout() {
    return $('//*[@id="cardgate-confirm"]');
  }
}

export default new Form_PO();
