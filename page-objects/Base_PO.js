
import allureReporter from "@wdio/allure-reporter";
//https://webdriver.io/docs/pageobjects.html
export default class Base_PO {
    open(path) {
        browser.setWindowSize(1800, 1200);
        browser.url(path);
    }

    waitUsingFixedTimeout(time) {
        console.log("Pausing for: " + time + " seconds.");
        browser.pause(time);
    }
}