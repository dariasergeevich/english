import {words1} from '././arrays/words1.js';
import {words2} from '././arrays/words2.js';
import {words3} from '././arrays/words3.js';
import {words4} from '././arrays/words4.js';
import {words5} from '././arrays/words5.js';
import { deleteWords } from '././arrays/deleteWords.js';

  let buttonCheck = document.querySelector('.check-btn');
  let word = document.querySelector('.rus_word');
  let buttonNext = document.querySelector('.next-btn');
  let comment = document.querySelector('.comment');
  let input = document.querySelector('.input');
  let engWord = document.querySelector('.eng_word');

  let correctCount = document.querySelector('.correct-count');
  let wrongCount = document.querySelector('.wrong-count');

  let buttonArr1 = document.querySelector('.btn1');
  let buttonArr2 = document.querySelector('.btn2');
  let buttonArr3 = document.querySelector('.btn3');
  let buttonArr4 = document.querySelector('.btn4');
  let buttonArr5 = document.querySelector('.btn5');

  let menu = document.querySelector('.menu');
  let buttonMenu = document.querySelector('.menu-btn');

  let arrNumber = document.querySelector('.arr_name');

  buttonArr1.addEventListener('click', function() {
    menu.classList.remove('flex')
    buttonArr1.classList.add('click');
    getRandomWord(words1);
    arrNumber.textContent = 'ARR1'
    to();
  })

  buttonArr2.addEventListener('click', function() {
    menu.classList.remove('flex')
    buttonArr2.classList.add('click');
    getRandomWord(words2);
    arrNumber.textContent = 'ARR2'
    to();
  })

  buttonArr3.addEventListener('click', function() {
    menu.classList.remove('flex')
    buttonArr3.classList.add('click');
    getRandomWord(words3);
    arrNumber.textContent = 'ARR3'
    to();
  })

  buttonArr4.addEventListener('click', function() {
    menu.classList.remove('flex')
    buttonArr4.classList.add('click');
    getRandomWord(words4);
    arrNumber.textContent = 'ARR4'
    to();
  })

  buttonArr5.addEventListener('click', function() {
    menu.classList.remove('flex')
    buttonArr5.classList.add('click');
    getRandomWord(words5);
    arrNumber.textContent = 'ARR5'
    to();
  })

  function chooseArr() { //функция выбора массива, с которым работает программа
    if (buttonArr1.classList.contains('click')) 
    {return words1}
    else if (buttonArr2.classList.contains('click')) 
    {return words2}
    else if (buttonArr3.classList.contains('click'))
    {return words3}
    else if (buttonArr4.classList.contains('click'))
    {return words4}
    else
    {return words5}
  }

function getRandomWord(words) { //выбирает рандомное слово на английском и передает его в код
  let randIndex = Math.floor(Math.random() * words.length);
  word.textContent = words[randIndex][1];
  engWord.textContent = words[randIndex][0];
  word.setAttribute('index', randIndex)
  return words[randIndex][0];
}

function checkAnswer() { //провеяет соотвествие английского слова и поля ввода
  engWord.classList.remove('hidden')
  if (input.value.toLowerCase() === engWord.textContent) {
    comment.textContent = 'Success!';
    comment.classList.add('green');
    comment.classList.remove('red');
    correctCount.textContent = Number(correctCount.textContent) + 1;
    buttonCheck.setAttribute('disabled', '');
    buttonCheck.classList.add('disabled');
    deleteWord ()
    
  }else{
    comment.textContent = 'Wrong :(';
    comment.classList.add('red');
    comment.classList.remove('green');
    wrongCount.textContent = Number(wrongCount.textContent) + 1;
    buttonCheck.setAttribute('disabled', '');
    buttonCheck.classList.add('disabled');
  }
  buttonCheck.classList.add('hidden');
  buttonNext.classList.remove('hidden');
}


function deleteWord (words) {
  words = chooseArr()

  const index = word.getAttribute('index');
  deleteWords.push(words[index])
words.splice(index, 1);
}

function to () {
  input.value = ''
  const word = engWord.textContent; 
if (word[0] === 't' && word[1] === 'o' && word[2] === ' ') {
  input.value = 'to '
}
}

buttonNext.addEventListener('click', function(words){
  words = chooseArr()

  buttonCheck.removeAttribute('disabled');
  buttonCheck.classList.remove('disabled')
  
  if (input.value.toLowerCase() != engWord.textContent && comment.textContent === ''){
    wrongCount.textContent = Number(wrongCount.textContent) + 1;
  }
  
  if (input.value.toLowerCase() === engWord.textContent && comment.textContent === ''){
    correctCount.textContent = Number(correctCount.textContent) + 1;
    deleteWord()
  }

  engWord.classList.add('hidden');
  comment.textContent = '';
  input.value = '';
  engWord.textContent = '';

  buttonCheck.classList.remove('hidden');
  buttonNext.classList.add('hidden');
  getRandomWord(words);
  to()
})

buttonCheck.addEventListener('click', function(){
  checkAnswer();
})

function pressEnter (evt, words) {
  words = chooseArr()

if (evt.key === 'Enter' && !buttonCheck.classList.contains('disabled')) {
  checkAnswer()
} else if(evt.key === 'Enter' && buttonCheck.classList.contains('disabled')) {
  buttonCheck.removeAttribute('disabled');
  buttonCheck.classList.remove('disabled')

  if (comment.textContent === 'Success!') {
    deleteWord ()
  }
  
  if (comment.textContent === '' ) {
    wrongCount.textContent = Number(wrongCount.textContent) + 1;
  }
  
  engWord.classList.add('hidden');
  comment.textContent = '';
  input.value = '';
  engWord.textContent = '';

  getRandomWord(words);
  to()
}}

document.addEventListener('keydown', pressEnter)

function returnToMenu (words) {
  words = chooseArr()
  menu.classList.add('flex')
deleteWords.forEach(function(item) {
words.push(item)
})
deleteWords.length = 0;
correctCount.textContent = '0';
wrongCount.textContent = '0';
comment.textContent = '';
engWord.classList.add('hidden');
buttonCheck.classList.remove('disabled');
buttonCheck.removeAttribute('disabled');
popup.classList.remove('flex')
getRandomWord(words);
to()

buttonArr1.classList.remove('click');
buttonArr2.classList.remove('click');
buttonArr3.classList.remove('click');
buttonArr4.classList.remove('click');
buttonArr5.classList.remove('click');
}

let buttonYes = document.querySelector('.yes')
let buttonNo = document.querySelector('.no')
let popup = document.querySelector('.popup')

buttonMenu.addEventListener('click', function() {
  popup.classList.add('flex')
})

buttonYes.addEventListener('click', returnToMenu)
buttonNo.addEventListener('click', function() {
popup.classList.remove('flex')
})





//код для добавления новых строк в ручном режиме

let inputEng = document.querySelector('.input_eng');
let inputRus = document.querySelector('.input_rus');
let buttonAdd = document.querySelector('.add-btn');
let buttonMenu1 = document.querySelector('.menu-btn-1');
let buttonAdmin = document.querySelector('.btn_admin');

let newWords = [];
let wordsCount = document.querySelector('.words_count');
let menu1 =  document.querySelector('.menu1');
let popup1 =  document.querySelector('.popup1');
let buttonOk = document.querySelector('.btn_ok');

buttonAdd.addEventListener('click', function() {
  let eng = inputEng.value;
let rus = inputRus.value;
  let newWord = `${eng}, ${rus}`.split(', ')
  newWords.push(newWord);
  wordsCount.textContent = newWords.length;
  inputEng.value = '';
  inputRus.value = '';
})

wordsCount.textContent = newWords.length;


async function copyArr(newstr) {
  try {
    await navigator.clipboard.writeText(newstr);
    console.log('Массив скопирован в буфер обмена');
  } catch (err) {
    console.error('Не удалось скопировать: ', err);
  }
}


buttonMenu1.addEventListener('click', function() {
  let str = (JSON.stringify(newWords));
  let re = /],/gi;
  let newstr = str.replace(re, '],\n');
  copyArr(newstr);
  popup1.classList.add('flex');

})

buttonAdmin.addEventListener('click', function() {
menu.classList.remove('flex');
menu1.classList.add('flex');
})

buttonOk.addEventListener('click', function() {
popup1.classList.remove('flex');
menu.classList.add('flex');
menu1.classList.remove('flex');
newWords.length = 0;
wordsCount.textContent = newWords.length;
})
