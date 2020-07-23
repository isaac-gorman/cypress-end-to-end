describe("form invalid input test", () => {
  it("testing invalid inputs", () => {
    cy.visit("/form");

    // Lets make an assertion to pass an invalid email input
    // cy.get('[for="email"] > input')
    //   .type("testemail")
    //   .should("have.value", "testemail");

    // cy.get('[data-cy="email-error-msg"]')
    // .contains('')

    cy.get("[data-cy=recipeName]").type("no").should("have.value", "no");

    cy.get("[data-cy=imageURL]")
      .type("url.com")
      .should("have.value", "url.com");

    cy.get("[data-cy=ingredients]")
      .type("Not real")
      .should("have.value", "Not real");
  });
});
