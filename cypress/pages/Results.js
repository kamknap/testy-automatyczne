class Results {
  get searchAlert() {
    return cy.get(".alert-warning");
  }
}

export default new Results();
