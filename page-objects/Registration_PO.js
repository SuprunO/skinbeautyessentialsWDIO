import Base_PO from "./Base_PO";
const config = require("../config/main-config");

class Registration_PO extends Base_PO {
  goToRegistrationPage() {
    super.open(config.baseUrl + "/index.php?route=account/register");
  }

  get registrationFirstNameLocator() {
    return $("[name=firstname]");
  }

  get registrationLastNameLocator() {
    return $("[name=lastname]");
  }

  get registrationEmailLocator() {
    return $("[name=email]");
  }

  get registrationPhoneLocator() {
    return $("[name=telephone]");
  }

  get registrationAddressLocator() {
    return $("[name=address_1]");
  }

  get registrationCityLocator() {
    return $("[name=city]");
  }

  get registrationPostCodeLocator() {
    return $("[name=postcode]");
  }

  get registrationCountryLocator() {
    return $("[name=country_id]");
  }

  get registrationRegionLocator() {
    return $("[name=zone_id]");
  }

    get registrationPasswordLocator() {
      return $("input#input-password");
    }
  
    get registrationPasswordConfirmLocator() {
      return $("input#input-confirm");
    }

    get registrationPrivacyPolicyRadioCTA(){
      return $("[name=agree]");
    }

    get registrationContinueCTA(){
      return $("[value=Continue]");
    }

    fillinRegistrationFields(
    firstName,
    lastName,
    email,
    phone,
    address,
    country,
    region,
    city,
    zip,  
    password,
    passwordConfirm
  ) {
    if (firstName) {
      "waitLocator",
        function() {
          $(this.firstNameSelector).waitForVisible(3000);
        };
      this.registrationFirstNameLocator.setValue(firstName);
    }
    if (lastName) {
      this.registrationLastNameLocator.setValue(lastName);
    }

    if (email) {
      this.registrationEmailLocator.setValue(email);
    }

    if (phone) {
      this.registrationPhoneLocator.setValue(phone);
    }

    if (address) {
      this.registrationAddressLocator.setValue(address);
    }

    if (city) {
      this.registrationCityLocator.setValue(city);
    }

    if (zip) {
      this.registrationPostCodeLocator.setValue(zip);
    }

    if (country) {
      this.registrationCountryLocator.selectByVisibleText(country);
    }

    if (region) {
      browser.pause(30000);
      this.registrationRegionLocator.selectByVisibleText(region);
    }

    if (password) {
      this.registrationPasswordLocator.setValue(password);
    }

    if (passwordConfirm) {
      this.registrationPasswordConfirmLocator.setValue(passwordConfirm);
    }
  }
}

export default new Registration_PO();