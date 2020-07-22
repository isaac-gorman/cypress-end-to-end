import { sum, square } from "../../src/util";

const greet = () => "hello";

const moreThanOrEqualToTwelve = (n) => {
  if (n >= 12) {
    return true;
  } else {
    return false;
  }
};

// using the "chai" assertion functions we will describe
describe("testing math util functions", () => {
  it("sum returns correct value", () => {
    expect(sum(1, 100)).to.equal(101);
  });

  it("square returns correct value", () => {
    expect(square(25)).to.equal(625);
  });

  it("greet returns a greeting of hello", () => {
    expect(greet()).to.equal("hello");
  });

  it("moreThanOrEqualToTwelve ", () => {
    expect(moreThanOrEqualToTwelve(12)).to.equal(true);
  });
});
