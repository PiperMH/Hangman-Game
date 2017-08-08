//Declaring variables for game
  var words = [];
  var wrongGuesses = [];
  var correctGuesses  = [];
  var gameWord;
  var allowedGuesses = 10;

  var wordInPlay = document.getElementById("wordInPlay");
  var letterCount = document.getElementById("count");
  var chancesLeft = document.getElementById("chances");

//An array conatining words for game. AKA "Word Bank"
  words = ['texas','cow','hot','dry'];

//Randomly picks a word for the current game
  gameWord = words[Math.floor(Math.random() * words.length)];

  //console.log(gameWord.length);

/*Takes the word being played. Determines the length of the word. Pushes an "_" into the correctGuesses array in replacement of the 
word's vowels/consonant*/
function startGame() {
  for(var i = 0; i < gameWord.length; i++){
    correctGuesses.push('_'); 
    console.log(correctGuesses.length);
  }
}

wordInPlay.innerHTML = correctGuesses.join(' ');
letterCount.innerHTML = allowedGuesses;


/*Function which compares key being pressed to letters inside current word*/

function gameStats(letter){
  allowedGuesses--; //decreases number of guesses
  letterCount.innerHTML = allowedGuesses;

  //checks to see if the letter pressed is not in the word
  if (gameWord.indexOf(letter) === -1){
  //if letter is not in the word, pushes to array.
    wrongGuesses.push(letter);
    chancesLeft.innerHTML = wrongGuesses.join(', ');
  //letter is in the current word 
  } else{ 
  //replaces the "_" with the letter pressed  
  for (var i = 0; i < gameWord.length; i++){
    if(gameWord[i] === letter){
      correctGuesses[i] = letter;
    }
  }

  wordInPlay.innerHTML = correctGuesses.join(' ');
  } 
}

function win(){
  if (correctGuesses.indexOf('_') === -1){
    alert("Congrats, you are a true Texan");
  } else if (allowedGuesses === 0){
    alert("You must be a Yankee");
  }
}


//listens to the key being pressed
  document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    gameStats(letter);
    win();
};

startGame();
