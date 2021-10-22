var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += " meow";
  }
  return catMessage;
};

function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
} 

helloCat(catSays);

// 2))

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
function favoriteMovie(movieName) {
  console.log("My favorite movie is " + movieName);
}

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

// 3))

movies (function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");  // Call the movies function, pass in the function and name of movie

// 3))

var laugh = function(max) {
  sound = "";
  for (i = 0; i < max; i++) {
      sound += "ha";
  }return sound + "!"; // or sound = sound + "!"; 
                       //   return sound;
};

console.log(laugh(3));

// print hahaha!

// 4)
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (max) {
  sound = "";
  for (i = 0; i < max; i++) {
      sound += "ha";
  } return sound + "!";
});

// print I am happy, haha!