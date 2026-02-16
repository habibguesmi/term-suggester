"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionEngine = void 0;
const difference_score_1 = require("./difference-score");
class SuggestionEngine {
    computeScore(term, word) {
        if (word.length < term.length)
            return Infinity; // mot trop court
        let minScore = Infinity;
        // On teste toutes les sous-chaînes de même longueur que 'term'
        for (let i = 0; i <= word.length - term.length; i++) {
            const sub = word.substring(i, i + term.length);
            const score = (0, difference_score_1.getDifferenceScore)(term, sub);
            minScore = Math.min(minScore, score);
        }
        return minScore;
    }
    constructor(words) {
        this.words = words;
    }
    getSuggestions(term, maxResults) {
        if (!term || maxResults <= 0) {
            return [];
        }
        const scoredWords = this.words
            // Exclure les mots trop courts
            .filter(word => word.length >= term.length)
            // Calculer le score minimum sur toutes les sous-chaînes possibles
            .map(word => {
            const score = this.computeScore(term, word);
            return {
                word,
                score,
                lengthDifference: Math.abs(word.length - term.length)
            };
        })
            // Garder uniquement les mots avec au moins une lettre similaire
            .filter(item => item.score < term.length)
            // Tri : score -> proximité longueur -> ordre alphabétique
            .sort((a, b) => {
            if (a.score !== b.score)
                return a.score - b.score;
            if (a.lengthDifference !== b.lengthDifference)
                return a.lengthDifference - b.lengthDifference;
            return a.word.localeCompare(b.word);
        });
        // Retourner les N premiers résultats
        return scoredWords.slice(0, maxResults).map(item => item.word);
    }
}
exports.SuggestionEngine = SuggestionEngine;
//# sourceMappingURL=suggestion-engine.js.map