// objectives
// - 1. We want to make an assertion that each of the fields in the form can be filled out and that it has the proper values.
// - 2. We want to make sure that the button is disabled if the form is not filled out properly.
// - 3. The button is enabled when the form is properly filled out.
// extra: we provide invalid values e.g. email input and make sure that the error message is displayed.

describe("from test", () => {
  it("test that the form is working properly", () => {
    cy.visit("/");

    // Let's make an assertion to disable a button
    cy.get("button#submit").should("be.disabled");

    cy.get('[for="name"] > input')
      .type("Jasmine G")
      .should("have.value", "Jasmine G");

    cy.get('[for="email"] > input')
      .type("j@gmail.com")
      .should("have.value", "j@gmail.com");

    cy.get("textarea#motivation")
      .type("I want to be more active in my community")
      .should("have.value", "I want to be more active in my community");

    // Role
    cy.get("select#positions")
      .select("Yard Work")
      .should("have.value", "Yard Work");

    cy.get('[data-cy="terms"]').click().should("have.checked", true);

    cy.get("button#submit").should("not.be.disabled");
  });
});

