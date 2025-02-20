/// <reference types="cypress"/>
import Home from "../pages/Home";
import Base from "../pages/Base";
import Woman from "../pages/Woman";

describe("zaznaczanie checkBoxow", function () {
  it("Klikniecie w zakladke woman", function () {
    Base.openHomePage();
    Home.clickOnWomenTab();
    cy.url().should(
      "include",
      "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
    );
  });
  it("Zaznaczenie checboxow", function () {
    Woman.checkTops();
    Woman.topsCheckbox.should("be.checked");
    Woman.checkDresses();
    Woman.checkSizes();
  });
});
