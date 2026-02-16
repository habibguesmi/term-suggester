"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDifferenceScore = getDifferenceScore;
function getDifferenceScore(a, b) {
    if (a.length !== b.length) {
        throw new Error("Both strings must have the same length");
    }
    let differences = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            differences++;
        }
    }
    return differences;
}
//# sourceMappingURL=difference-score.js.map