export declare class SuggestionEngine {
    private readonly words;
    private computeScore;
    constructor(words: string[]);
    getSuggestions(term: string, maxResults: number): string[];
}
//# sourceMappingURL=suggestion-engine.d.ts.map