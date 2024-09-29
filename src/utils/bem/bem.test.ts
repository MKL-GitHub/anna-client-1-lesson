import bem from "./bem.util";

describe("bem", () => {
  it("should return the block name when no element or modifier is provided", () => {
    expect(bem("block")()).toBe("block");
  });

  it("should return the block name with an element when only an element is provided", () => {
    expect(bem("block")("element")).toBe("block__element");
  });

  it("should return the block name with an element and a modifier when both are provided", () => {
    expect(bem("block")("element", "modifier")).toBe("block__element_modifier");
  });

  it("should return the block name with a modifier when only a modifier is provided", () => {
    expect(bem("block")("", "modifier")).toBe("block_modifier");
  });

  it("should return the block name with only a space when no element or modifier is provided", () => {
    expect(bem("block")("", "")).toBe("block");
  });

  it("should return the block name with only a space when no element or modifier is provided", () => {
    expect(bem("block")("element", null)).toBe("block__element");
  });
});
