import { SuggestionEngine } from "../suggestion-engine";

describe("SuggestionEngine", () => {

  const words = ["gros", "gras", "graisse", "agressif", "go", "ros", "gro"];
  const engine = new SuggestionEngine(words);

  it("should return best matches for a nominal case", () => {
    const result = engine.getSuggestions("gros", 2);
    expect(result).toEqual(["gros", "gras"]);
  });

  it("should handle empty term", () => {
    const result = engine.getSuggestions("", 3);
    expect(result).toEqual([]);
  });

  it("should respect maxResults", () => {
    const result = engine.getSuggestions("gros", 1);
    expect(result.length).toBe(1);
  });

  it("should ignore words shorter than the term", () => {
    const result = engine.getSuggestions("gros", 10);
    expect(result).not.toContain("go");
    expect(result).not.toContain("gro");
  });

  it("should sort alphabetically when score and length are equal", () => {
  const result = engine.getSuggestions("zzzz", 10);

  expect(result.length).toBeGreaterThanOrEqual(2);

  const [first, second] = result;
  expect(first! <= second!).toBeTruthy();
});

});