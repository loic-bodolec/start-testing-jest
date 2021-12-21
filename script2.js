const findNames = (term, db) => {
    const matches = db.filter(names => {
        return names.includes(term);
    });
    // We only want the first three of search results.
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

const functionNotTested = (term) => {
    return `Hello ${term}!`;
};

module.exports = findNames;