// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const body = document.getElementById('body')
const h2 = document.createElement('h2')
body.appendChild(h2)

const input = document.getElementById('user-input')
// h2.appendChild(input.value)
const form = document.getElementById('form')
form.addEventListener("submit", (e) => {
  e.preventDefault()
  pigLatin()
})





const pigLatin = () => {
  let word = input.value
  word = word.toLowerCase().trim()
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let result = ''

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[0])) {
      result = word + 'yay'
    } else if (vowels.includes(word[i])) {
      let firstHalf = word.slice(0, i)
      let secondHalf = word.slice(i)
      result = secondHalf + firstHalf + 'ay'
      break;
    }
  }
  word = result
  // return result
  h2.innerText = word
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
