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

  //Shipping form
  get firstNameSelector() {
    return $("#input-payment-firstname");
  }

  get lastNameSelector() {
    return $("#input-payment-lastname");
  }

  get emailSelector() {
    return $("#input-payment-email");
  }

  get telephoneSelector() {
    return $("#input-payment-telephone");
  }

  get addressSelector() {
    return $("#input-payment-address-1");
  }

  get citySelector() {
    return $("#input-payment-city");
  }

  get postcodeSelector() {
    return $("#input-payment-postcode");
  }

  get countrySelector() {
    return $("#input-payment-country");
  }

  get regionSelector() {
    return $("[name=zone_id]");
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

  //Payment processor
  get firstNameSelectorPayment() {
    return $("[name=first_name]");
  }

  get lastNameSelectorPayment() {
    return $("[name=last_name]");
  }

  get addressSelectorPayment() {
    return $("[name=address]");
  }

  get countrySelectorPayment() {
    return $("[name=country_code]");
  }

  get citySelectorPayment() {
    return $("[name=city]");
  }

  get postcodeSelectorPayment() {
    return $("[name=postal_code]");
  }

  get telephoneSelectorPayment() {
    return $("[name=phone_number]");
  }

  get emailSelectorPayment() {
    return $("[name=email]");
  }

  get successfulConfirmationPageHeader() {
    return $("//div[@id='contact_reply']/h1");
  }

  // Payment locators

  get ccIssuerLocator() {
    return $("[name=cc_issuer]");
  }

  get ccNumberLocator() {
    return $("[name=cc_number]");
  }

  get ccMonthLocator() {
    return $("[name=cc_exp_month]");
  }

  get ccYearLocator() {
    return $("[name=cc_exp_year]");
  }

  get ccCVVLocator() {
    return $("[name=cc_cvv]");
  }

  get submitPaymentGate() {
    return $("#formsubmit");
  }

  //TODO: need architect 
  // Login intercept
  get returningCustomerEmailLocator(){
    return $("[name=email]");
  }

  get returningCustomerPasswordLocator(){
    return $("[name=password]");
  }

  get returningCustomerLoginCTA(){
    return $("[value=Login");
  }

  submitAllInformationViaContactUsForm(
    firstName,
    lastName,
    emailAddress,
    phone,
    address,
    city,
    zip,
    country,
    region
  ) {
    if (firstName) {
      this.firstNameSelector.setValue(firstName);
    }
    if (lastName) {
      this.lastNameSelector.setValue(lastName);
    }
    if (emailAddress) {
      this.emailSelector.setValue(emailAddress);
    }
    if (phone) {
      this.telephoneSelector.setValue(phone);
    }

    if (address) {
      this.addressSelector.setValue(address);
    }

    if (city) {
      this.citySelector.setValue(city);
    }

    if (zip) {
      this.postcodeSelector.setValue(zip);
    }

    if (country) {
      this.countrySelector.selectByVisibleText(country);
    }

    if (region) {
      browser.pause(20000);
      this.regionSelector.selectByVisibleText(region);
      browser.pause(10000);
    }
  }

  //Payment
  submitAllInformationViaContactUsFormPayment(
    firstName,
    lastName,
    address,
    country,
    city,
    zip,
    phone,
    emailAddress,
    ccIssuer,
    ccNumber,
    ccMonth,
    ccYear,
    ccCVV
  ) {
    if (firstName) {
      "waitLocator",
        function() {
          $(this.firstNameSelector).waitForVisible(3000);
        };
      this.firstNameSelectorPayment.setValue(firstName);
    }
    if (lastName) {
      this.lastNameSelectorPayment.setValue(lastName);
    }

    if (address) {
      this.addressSelectorPayment.setValue(address);
    }

    if (country) {
      this.countrySelectorPayment.selectByVisibleText(country);
    }

    if (city) {
      this.citySelectorPayment.setValue(city);
    }

    if (zip) {
      this.postcodeSelectorPayment.setValue(zip);
    }

    if (phone) {
      this.telephoneSelectorPayment.setValue(phone);
    }

    if (emailAddress) {
      this.emailSelectorPayment.setValue(emailAddress);
    }

    if (ccIssuer) {
      this.ccIssuerLocator.setValue(ccIssuer);
    }

    if (ccNumber) {
      this.ccNumberLocator.setValue(ccNumber);
    }

    if (ccMonth) {
      this.ccMonthLocator.selectByVisibleText(ccMonth);
    }

    if (ccYear) {
      this.ccYearLocator.selectByVisibleText(ccYear);
    }

    if (ccCVV) {
      this.ccCVVLocator.setValue(ccCVV);
    }
  }
}

export default new Form_PO();
