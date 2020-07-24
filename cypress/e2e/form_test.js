// objectives
// - 1. We want to make an assertion that each of the fields in the form can be filled out and that it has the proper values.
// - 2. We want to make sure that the button is disabled if the form is not filled out properly.
// - 3. The button is enabled when the form is properly filled out.
// extra: we provide invalid values e.g. email input and make sure that the error message is displayed.

describe("from test", () => {
  it("test that the form is working properly", () => {
    cy.visit("/form");

    // Let's make an assertion to disable a button
    // cy.get("button#submit").should("be.disabled");
    cy.get("[data-cy=create]").should("be.disabled");

    cy.get("[data-cy=recipeName]")
      .type("Cookies")
      .should("have.value", "Cookies");

    cy.get("[data-cy=cookingTime]")
      .select("30mins")
      .should("have.value", "30mins");

    // cy.get(".allergies-wrapper").check([])
    cy.get("[data-cy=nuts]").check();
    cy.get("[data-cy=shell-fish]").check();

    cy.get("[data-cy=mealType]")
      .select("breakfast")
      .should("have.value", "breakfast");

    cy.get("[data-cy=imageURL]")
      .type(
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      )
      .should(
        "have.value",
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      );

    cy.get("[data-cy=ingredients]")
      .type(
        "1 cup butter, softened1 cup white sugar C&H Pure Cane Granulated Sugar 4 Lb $1.78 for 1 item - expires in 3 weeks 1 cup packed brown sugar2 eggs2 teaspoons vanilla extract1 teaspoon baking soda2 teaspoons hot water1/2 teaspoon salt3 cups all-purpose flour2 cups semisweet chocolate chips1 cup chopped walnuts"
      )
      .should(
        "have.value",
        "1 cup butter, softened1 cup white sugar C&H Pure Cane Granulated Sugar 4 Lb $1.78 for 1 item - expires in 3 weeks 1 cup packed brown sugar2 eggs2 teaspoons vanilla extract1 teaspoon baking soda2 teaspoons hot water1/2 teaspoon salt3 cups all-purpose flour2 cups semisweet chocolate chips1 cup chopped walnuts"
      );

    cy.get("[data-cy=create]").click();
  });
});
