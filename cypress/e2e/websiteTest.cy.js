/// <reference types="cypress"/>
import Base from "../pages/Base";
import Search from "../pages/Search";
import Results from "../pages/Results";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json";

describe("Wpisywanie tekstu", function () {
  it("Wpisywanie tekstu w input", function () {
    Base.openHomePage();
    Search.typeSearchInput(searchPhrase);
    Search.searchInput.should("have.value", "Tekst testowy");
    Search.clearSearchInput();
    Search.typeSearchInput(searchPhrase + "{enter}");
    Results.searchAlert
      .should("be.visible")
      .and("include.text", notFoundProduct);
    Search.searchInput.should(
      "have.class",
      "search_query form-control ac_input"
    );
    Search.searchInput.should("have.css", "margin-right", "1px");
  });
});
