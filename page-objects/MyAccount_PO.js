class MyAccount_PO {
  get AddressBookLinkLocator() {
    return $("div#content > ul:nth-of-type(1) > li:nth-of-type(3) > a");
  }

  get NewAddressCTALocator() {
    return $("#content .btn-primary");
  }

  get ContinueCTALocator(){
    return $("input[value='Continue']");
  }

  get DeleteCTA_2_Locator(){
    return $("tr:nth-of-type(2) > .text-right > .btn.btn-danger");
  }
}
export default new MyAccount_PO();


