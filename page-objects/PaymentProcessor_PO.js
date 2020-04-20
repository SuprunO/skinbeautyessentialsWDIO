class PaymentProcessor_PO {
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

  // CC locators

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

  //Payment method
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
        function () {
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

export default new PaymentProcessor_PO();
