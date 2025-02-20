/// <reference types="cypress"/>

describe("Pierwszy test automatyczny", function () {
  it("Otworz strone google.com", function () {
    cy.visit("https://google.com");
  });
});
