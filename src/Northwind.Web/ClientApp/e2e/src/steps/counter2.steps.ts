
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the counter2 page", async () => {
  await page.navigateTocounter2();
});

