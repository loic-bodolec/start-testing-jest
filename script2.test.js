const findNames = require('./script2');

const mockDB = [
    "Kamron Rhodes",
    "Angelina Frank",
    "Bailee Larsen",
    "Joel Merritt",
    "Mina Ho",
    "Lily Hodge",
    "Alisha Solomon",
    "Frank Ho",
    "Cassidy Holder",
    "Mina Norman",
    "Lily Blair",
    "Adalyn Strong",
    "Lily Norman",
    "Minari Hiroko",
    "John Li",
    "May Li"
]

describe("Function that finds the names which match the search term in database", () => {

    it("Expected search results", () => {
        // This should return empty array as "Dylan" does not exist in the mockDB
        expect(findNames("Dylan", mockDB)).toEqual([]);
        expect(findNames("Frank", mockDB)).toEqual(["Angelina Frank", "Frank Ho"]);
    });

    it("This should handle null or undefined as input", () => {
        expect(findNames(undefined, mockDB)).toEqual([]);
        expect(findNames(null, mockDB)).toEqual([]);
    });

    it("Should not return more than 3 matches", () => {
        expect(findNames('Li', mockDB).length).toEqual(3);
    })

    it("The search is case sensitive", () => {
        expect(findNames('li', mockDB)).toEqual(["Angelina Frank", "Alisha Solomon"])
    })
})