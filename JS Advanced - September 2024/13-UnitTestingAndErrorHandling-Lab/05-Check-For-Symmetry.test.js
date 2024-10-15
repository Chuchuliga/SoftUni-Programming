import { expect } from "chai";
import { isSymmetric } from "./05-Check-For-Symmetry.js";

describe("Is Symmetric", function () {
  it("works with symmatric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("works with odd-length symmatric array", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it("works with empty array", () => {
    expect(isSymmetric([])).to.be.true;
  });

  it("return false for string", () => {
    expect(isSymmetric("121")).to.be.false;
  });

  it("doesnt work with non-symmatric array", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it('return false for mixed array', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
});
