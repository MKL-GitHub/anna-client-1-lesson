import omit from "./omit.util";

interface MockObject {
  name: string;
  age: number;
  work: string;
  languages: string[];
  isMarried: boolean;
}

const mock = {
  name: "Mikhail",
  age: 29,
  work: "Caspel",
  languages: ["Russian", "English", "Norwegian"],
  isMarried: false,
};

describe("omit", () => {
  it("should return empty object", () => {
    expect(omit({})).toEqual({});
    expect(omit(mock, "name", "age", "work", "languages", "isMarried")).toEqual(
      {}
    );
  });

  it("should return the object with the same parameters", () => {
    expect(omit(mock)).toEqual(mock);
  });

  it("should return the object without name parameter", () => {
    const { name, ...rest } = mock;
    expect(omit(mock, "name")).toEqual(rest);
  });

  it("should return the object without name and languages parameters", () => {
    const { name, languages, ...rest } = mock;
    expect(omit(mock, "name", "languages")).toEqual(rest);
  });

  it("should return the object without isMarried parameter", () => {
    const { isMarried, ...rest } = mock;
    expect(omit(mock, "isMarried")).toEqual(rest);
  });
});
