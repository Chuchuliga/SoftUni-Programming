import { expect } from "chai";
import { rgbToHexColor } from "./06-RGB-To-Hex.js";

describe("RGB to Hex", () => {

  it("is lower border", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("is upper border", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("is over the border", () => {
    expect(rgbToHexColor(255, 255, 256)).to.be.undefined;
  });

  it("is below the limit", () => {
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it("doent work with strings", () => {
    expect(rgbToHexColor("0", "0", "0")).to.be.undefined;
  });

  it("doesnt work with floats", () => {
    expect(rgbToHexColor(0.1, 0.1, 0.1)).to.be.undefined;
  });

  it("return undefind for missing parms", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });
});
