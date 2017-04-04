'use strict';
var sushi = prompt('Do you think I like sushi?');
if (sushi.toLowerCase() == 'yes'){
  alert('You were correct!');
} else if (sushi.trim().toLowerCase() == 'no'){
  alert('Incorrect! I love sushi!');
} else {
  alert('Please type Yes or No');
};
