import { SuggestionEngine } from "./suggestion-engine";

const words = ["gros", "gras", "graisse", "agressif", "go", "ros", "gro"];
const engine = new SuggestionEngine(words);

console.log("Suggestions for 'gros' (2):", engine.getSuggestions("gros", 2));
console.log("Suggestions for 'gras' (3):", engine.getSuggestions("gras", 3));
console.log("Suggestions for 'gros' (10):", engine.getSuggestions("gros", 10));
console.log("Suggestions for 'zzz' (3):", engine.getSuggestions("zzz", 3));
console.log("Suggestions for empty term:", engine.getSuggestions("", 3));