import { expect } from "chai";
import { sumOfNumbers as sum } from "./sumOfNumbers.js";

describe("Sum Numbebrs", function () {
  describe("Happy path", function () {
    it("works with numbers", () => {
      expect(sum([1, 1])).to.equal(2);
    });

    it("works with more numbers", () => {
      expect(sum([1, 1, 1])).to.equal(3);
    });
  });

  describe("Edge cases", function () {
    it("return 0 for empty array", () => {
      expect(sum([])).to.equal(0);
    });
  });

  describe("Vallidation", function () {
    it("doesnt work with stings", () => {
      expect(sum("aaa")).to.be.NaN;
    });
  });

  describe("Test overload", function () {
    it("works with many numbers", () => {
      expect(sum([10, 20, 30, 40])).to.equal(100);
    });

    it("sum negative numbers", function () {
      expect(sum([-1, -2, -3])).to.equal(-6);
    });
  });
});
