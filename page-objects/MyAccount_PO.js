import Base_PO from "./Base_PO";
const config = require("../config/main-config");

class MyAccount_PO extends Base_PO {
  goToLoginPage() {
    super.open(config.baseUrl + "/index.php?route=account/login");
  }

  goToMyAccountPage() {
    super.open(config.baseUrl + "/index.php?route=account/account");
  }
  
  get returningCustomerEmailLocator() {
    return $("[name=email]");
  }

  get returningCustomerPasswordLocator() {
    return $("[name=password]");
  }

  get returningCustomerLoginCTA() {
    return $("form[method='post'] > input[value='Login']" ); 
  }

  get AddressBookLinkLocator() {
    return $("div#content > ul:nth-of-type(1) > li:nth-of-type(3) > a");
  }

  get NewAddressCTALocator() {
    return $("#content .btn-primary");
  }

  get ContinueCTALocator() {
    return $("input[value='Continue']");
  }

  get DeleteCTA_2_Locator() {
    return $("tr:nth-of-type(2) > .text-right > .btn.btn-danger");
  }
}
export default new MyAccount_PO();
