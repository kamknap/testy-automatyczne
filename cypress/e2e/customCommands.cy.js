/// <reference types="cypress"/>
import { login, passwd } from "../fixtures/loginData.json";

describe("Custom Commands", () => {
  it("Logowanie do strony", () => {
    cy.login(login, passwd);
  });
});
