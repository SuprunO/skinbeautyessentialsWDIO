import Base_PO from "./Base_PO";

class Header_PO extends Base_PO {
  get searchField() {
    return $("[id=search]>input");
  }

  get searchCTA() {
    return $("#search>span>button");
  }

  get accountLinkLocator() {
    return $  (".setting-box [data-toggle]");
  }
  get accountRegistrationDropdownOption() {
    return $  (".dropdown-menu.dropdown-menu-left > li:nth-of-type(5) > a");
  }

}

export default new Header_PO();