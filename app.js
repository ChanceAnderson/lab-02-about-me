'use strict';
function funcSushi(){
var numCorrect = 0;

var sushi = prompt('Do you think I like sushi?');
if (sushi.toLowerCase() == 'yes'){
  alert('You were correct!');
  numCorrect ++;
} else if (sushi.trim().toLowerCase() == 'no'){
  alert('Incorrect! I love sushi!');
} else {
  alert('Please type Yes or No');
};
console.log('Do I like sushi?');
return sushi;
}

function funcFood() {
var food = prompt('Do you think I like eating?');
if (food.toLowerCase() == 'yes'){
  alert('You were correct!');
  numCorrect ++;
} else if (food.trim().toLowerCase() == 'no'){
  alert('Incorrect! I love eating!');
} else {
  alert('Please type Yes or No');
};

console.log('Do I like to eat?');
return food;
};
function funcDogs(){
var dogs = prompt('Do you think I like dogs?');
if (dogs.toLowerCase() == 'yes'){
  alert('You were correct!');
  numCorrect ++;
} else if (dogs.trim().toLowerCase() == 'no'){
  alert('Incorrect! I love dogs!');
} else {
  alert('Please type Yes or No');
};

console.log('Do I like dogs?');
return dogs;
}

function tv(){
var tv = prompt('Do you think I like TV?');
if (tv.toLowerCase() == 'yes'){
  alert('Wrong!');
} else if (tv.trim().toLowerCase() == 'no'){
  alert('Correct! I do not like tv!');
  numCorrect++;
} else {
  alert('Please type Yes or No');
};

console.log('Do I like watching tv?');
return tv;
}

function funcCode(){
var code = prompt('Do you think I like to code?');
if (code.toLowerCase() == 'yes'){
  alert('You were correct! Coding is fun!');
  numCorrect++;
} else if (code.trim().toLowerCase() == 'no'){
  alert('Incorrect! I love to code!');
} else {
  alert('Please type Yes or No');
};

console.log('Do I like to code?');
return code;
}
function funcFavNum(){
var favNum = 11;
for (var numGuesses = 4; numGuesses >0; numGuesses--){
  var userGuess = prompt('What\'s my favorite number?');
    if(userGuess < 11){
      alert('Too low!');
    } else if(userGuess > 11){
      alert('Too high!');
    } else if(userGuess = 11){
      alert('Correct!');
      numCorrect++;
      alert('You got ' + numCorrect + ' out of 7');
    } else if(numGuesses > 0){
      userGuess;
    }
}
}
function funcPlaces (){
var places = ['Bainbridge', 'Washington', 'United States'];
var residence = prompt('Guess where I live!');
for (var guesses = 6; guesses<6; guesses--){
    if(residence.trim().toLowerCase() === places[]){}
}
}
funcSushi();
funcFood();
funcDogs();
funcCode();
funcFavNum();
funcPlaces();
