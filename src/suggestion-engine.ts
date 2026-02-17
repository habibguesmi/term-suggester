import { getDifferenceScore } from "./difference-score";

export class SuggestionEngine {
    private computeScore(term: string, word: string): number {
        if (word.length < term.length) return Infinity; // mot trop court
      
        let minScore = Infinity;
      
        // On teste toutes les sous-chaînes de même longueur que 'term'
        for (let i = 0; i <= word.length - term.length; i++) {
          const sub = word.substring(i, i + term.length);
          const score = getDifferenceScore(term, sub);
          minScore = Math.min(minScore, score);
        }
      
        return minScore;
      }
  constructor(private readonly words: string[]) {}

    public getSuggestions(term: string, maxResults: number): string[] {
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
          
          // Tri : score -> proximité longueur -> ordre alphabétique
          .sort((a, b) => {
            if (a.score !== b.score) return a.score - b.score;
            if (a.lengthDifference !== b.lengthDifference) return a.lengthDifference - b.lengthDifference;
            return a.word.localeCompare(b.word);
          });
      
        // Retourner les N premiers résultats
        return scoredWords.slice(0, maxResults).map(item => item.word);
      }
}