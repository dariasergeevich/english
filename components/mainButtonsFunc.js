//перенос курсора вперед
import { constants } from "./constants.js";
import {chooseArr, getRandomWord} from "../script.js"
import { deleteWords } from "././deleteWords.js";
import {to} from './cursorFunc.js'
export function checkAnswer() { //провеяет соотвествие английского слова и поля ввода
  constants.engWord.classList.remove('hidden')
 
let inputLetterArr = [];

for (let i = 0; i < constants.inputArr.length; i += 1) {
  inputLetterArr.push(constants.inputArr[i].value);
  constants.inputArr[i].setAttribute('disabled', 'true')
}

let inputWord = inputLetterArr.join('');


if (inputWord.toLowerCase() === constants.engWord.textContent) {
  constants.comment.textContent = 'Success!';
  constants.comment.classList.add('green');
  constants.comment.classList.remove('red');
  constants.correctCount.textContent = Number(constants.correctCount.textContent) + 1;
  constants.buttonCheck.setAttribute('disabled', '');
  constants.buttonCheck.classList.add('disabled');
    deleteWord ()
    
  }else{
    constants.comment.textContent = 'Wrong :(';
    constants.comment.classList.add('red');
    constants.comment.classList.remove('green');
    constants.wrongCount.textContent = Number(constants.wrongCount.textContent) + 1;
    constants.buttonCheck.setAttribute('disabled', '');
    constants.buttonCheck.classList.add('disabled');
  }

  constants.buttonCheck.classList.add('hidden');
  constants.buttonNext.classList.remove('hidden');
}


//удаление угаданного слова из массива
function deleteWord (words) {
  words = chooseArr()

  const index = constants.word.getAttribute('index');
  deleteWords.push(words[index])
words.splice(index, 1);
}


  export function next(words) {
    constants.inputArr.length = 0;
    document.querySelector('.input_container').innerHTML = '';
    
  
    constants.buttonCheck.removeAttribute('disabled');
    constants.buttonCheck.classList.remove('disabled')
    
    if (constants.input.value.toLowerCase() != constants.engWord.textContent && constants.comment.textContent === ''){
      constants.wrongCount.textContent = Number(constants.wrongCount.textContent) + 1;
    }
    
    if (constants.input.value.toLowerCase() === constants.engWord.textContent && constants.comment.textContent === ''){
      constants.correctCount.textContent = Number(constants.correctCount.textContent) + 1;
      deleteWord()
    }
  
    constants.engWord.classList.add('hidden');
    constants.comment.textContent = '';
    constants.input.value = '';
    constants.engWord.textContent = '';
  
    constants.buttonCheck.classList.remove('hidden');
    constants.buttonNext.classList.add('hidden');
  
    for (let i = 0; i < constants.inputArr.length; i += 1) {
      constants.inputArr[i].removeAttribute('disabled')
    }
  }

  export function returnToMenu (words) {
    constants.inputArr.length = 0;
  document.querySelector('.input_container').innerHTML = '';
  
    
  
    words = chooseArr()
    constants.menu.classList.add('flex')
    deleteWords.forEach(function(item) {
  words.push(item)
  })
  
  
  
  deleteWords.length = 0;
  constants.correctCount.textContent = '0';
  constants.wrongCount.textContent = '0';
  constants.comment.textContent = '';
  constants.engWord.classList.add('hidden');
  constants.buttonCheck.classList.remove('disabled');
  constants.buttonCheck.removeAttribute('disabled');
  constants.popup.classList.remove('flex');
  
  if (!constants.buttonNext.classList.contains('hidden')) {
    constants.buttonNext.classList.add('hidden');
    constants.buttonCheck.classList.remove('hidden');
  }
  
  getRandomWord(words);
  to()
  
  constants.buttonArr1.classList.remove('click');
  constants.buttonArr2.classList.remove('click');
  constants.buttonArr3.classList.remove('click');
  constants.buttonArr4.classList.remove('click');
  constants.buttonArr5.classList.remove('click');
  }