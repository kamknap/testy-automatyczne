class Search {
  get searchInput() {
    return cy.get("#search_query_top");
  }

  typeSearchInput(text) {
    this.searchInput.type(text);
  }
  clearSearchInput() {
    this.searchInput.clear();
  }
}

export default new Search();
