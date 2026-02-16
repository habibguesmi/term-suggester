"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suggestion_engine_1 = require("./suggestion-engine");
const words = ["gros", "gras", "graisse", "agressif", "go", "ros", "gro"];
const engine = new suggestion_engine_1.SuggestionEngine(words);
console.log(engine.getSuggestions("gros", 2)); // res : ["gros", "gras"]
console.log(engine.getSuggestions("gras", 3)); // res : [ 'gras', 'gros', 'graisse' ]
console.log(engine.getSuggestions("gros", 10)); // res : [ 'gros', 'gras', 'graisse', 'agressif' ]
console.log(engine.getSuggestions("zzz", 3)); // res : []
console.log(engine.getSuggestions("", 3)); // res : []
//# sourceMappingURL=index.js.map