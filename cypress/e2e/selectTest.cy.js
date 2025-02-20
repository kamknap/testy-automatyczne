/// <reference types="cypress"/>

describe("Testy select", function () {
  it("Klikniecie w zakladke women", function () {
    cy.visit("/");
    cy.get('a[title="Women"]').click();
    cy.url().should(
      "include",
      "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
    );
  });
  it("wybieranie z listy (in stock)", function () {
    cy.get("#selectProductSort").select("quantity:desc");
    cy.get("#selectProductSort").should("have.value", "quantity:desc");
  });
});
