// The Recipe Card
console.log("The Recipe Card:");
var recipe = {
  'title': 'Dahl',
  'serves': 4,
  'ingredients': [
    'lentils',
    'cumin seeds',
    'turmeric',
    'chilli',
    'garlic'
  ]
};

console.log(recipe.title);
console.log("Serves: " + recipe.serves);
console.log("Ingredients:");
recipe.ingredients.forEach(function(item){
  console.log(item);
});
console.log("\n\n");

// The Reading List
console.log("The Reading List:");
var readingList = [
  {
    'title': "Travels With Charley",
    'author': "John Steinbeck",
    'alreadyRead': true
  },
  {
    "title": "The Gulag Archipelago",
    "author": "Alexsandr Solzhenitsyn",
    'alreadyRead': false
  },
  {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "alreadyRead": false
  },
  {
    "title": "Jihad",
    "author": "Tom Carew",
    "alreadyRead": true
  }
];

readingList.forEach(function(book){
  var prefix = book.alreadyRead ? "You already read " : "You still need to read ";
  console.log(prefix + book.title + " by " + book.author);
});
console.log("\n\n");

// The Movie Database
console.log("TJSMDB: The Tiny JavaScript Movie Database:");
var movie = {
  title: "Scarface",
  length: 170,
  stars: [
    'Al Pacino',
    'Michelle Pfeiffer',
    'Robert Loggia',
    'Mary Elizabeth Mastrantonio',
    'F. Murray Abraham'
  ],
  summary: function(){
    return movie.title + " lasts for " + movie.length + " minutes. Stars: " + 
      movie.stars.slice(0, movie.stars.length - 1).join(', ') + " and " +
      movie.stars[movie.stars.length - 1] + ".";
  }
};


console.log(movie.summary());
