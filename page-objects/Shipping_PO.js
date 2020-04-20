class Shipping_PO {
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

  submitShippingForm(
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
}

export default new Shipping_PO();
