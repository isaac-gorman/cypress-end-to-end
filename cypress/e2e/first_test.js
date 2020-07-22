// Will use chai assertion functions that are already installed with cypress

describe("our first test", () => {
  // First describing the it block
  it("is just a dummy test", () => {
    // doing the assertion using an expect() function
    expect(true).to.equal(false);
  });
});
