const InMemorySearch = require("./engine");

const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
  "Movies",
  {
    name: "Avengers",
    rating: 8.5,
    year: 2017
  },
  {
    name: "Black Adam",
    rating: 7.5,
    year: 2021
  },
  {
    name: "Super man",
    rating: 6.2,
    year: 1998
  },
  {
    name: "Jhon wick",
    rating: 8.2,
    year: 2003
  },
  {
    name: "Avengers",
    rating: 8.5,
    year: 2017
  },
  {
    name: "Black panther",
    rating: 19.5,
    year: 2022
  }
);

const result = searchEngine.search("Movies", (e) => e.rating >= 18.5, {
  key: "year",
  asc: false
});

console.log(result);
