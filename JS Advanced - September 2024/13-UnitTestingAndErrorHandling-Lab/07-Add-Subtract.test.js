import { expect } from "chai";
import { createCalculator } from "./07-Add-Subtract.js";

describe("", () => {
  it("get works", () => {
    const calculator = createCalculator();
    expect(calculator.get()).to.equal(0);
  });

  it("add works", () => {
    const calculator = createCalculator();
    calculator.add(1);
    expect(calculator.get()).to.equal(1);
  });

  it("subtarct works", () => {
    const calculator = createCalculator();
    calculator.subtract(1);
    expect(calculator.get()).to.equal(-1);
  });

  it("add doesnt works", () => {
    const calculator = createCalculator();
    calculator.add("a");
    expect(calculator.get()).to.be.NaN;
  });

  it("subtract doesnt works", () => {
    const calculator = createCalculator();
    calculator.subtract("a");
    expect(calculator.get()).to.be.NaN;
  });
});
