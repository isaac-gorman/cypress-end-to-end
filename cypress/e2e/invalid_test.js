describe("form invalid input test", () => {
  it("testing invalid inputs", () => {
    cy.visit("/");

    // Lets make an assertion to pass an invalid email input
    cy.get('[for="email"] > input')
      .type("testemail")
      .should("have.value", "testemail");

    cy.get('[data-cy="email-error-msg"]')
    .contains('')
  });
});
