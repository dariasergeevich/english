import {words1} from './words1.js';
import {words2} from './words2.js';
import {words3} from './words3.js';
import {words4} from './words4.js';

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

  let menu = document.querySelector('.menu');

  buttonArr1.addEventListener('click', function() {
    menu.classList.add('hidden')
    buttonArr1.classList.add('click');
    getRandomWord(words1);
    to();
  })

  buttonArr2.addEventListener('click', function() {
    menu.classList.add('hidden')
    buttonArr2.classList.add('click');
    getRandomWord(words2);
    to();
  })

  buttonArr3.addEventListener('click', function() {
    menu.classList.add('hidden')
    buttonArr3.classList.add('click');
    getRandomWord(words3);
    to();
  })

  buttonArr4.addEventListener('click', function() {
    menu.classList.add('hidden')
    buttonArr4.classList.add('click');
    getRandomWord(words4);
    to();
  })

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
  }else{
    comment.textContent = 'Wrong :(';
    comment.classList.add('red');
    comment.classList.remove('green');
    wrongCount.textContent = Number(wrongCount.textContent) + 1;
    buttonCheck.setAttribute('disabled', '');
    buttonCheck.classList.add('disabled');
  }
}

function deleteWord (words) {
  if (buttonArr1.classList.contains('click')) 
  {words = words1}
  else if (buttonArr2.classList.contains('click')) 
  {words = words2}
  else if (buttonArr3.classList.contains('click'))
  {words = words3}
  else
  {words = words4}

  const index = word.getAttribute('index');
words.splice(index, 1);
}

function to () {
  const word = engWord.textContent; 
if (word[0] === 't' && word[1] === 'o' && word[2] === ' ') {
  input.value = 'to '
}
}

buttonNext.addEventListener('click', function(words){
  if (buttonArr1.classList.contains('click')) 
  {words = words1}
  else if (buttonArr2.classList.contains('click')) 
  {words = words2}
  else if (buttonArr3.classList.contains('click'))
  {words = words3}
  else
  {words = words4}

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
})

buttonCheck.addEventListener('click', function(){
  checkAnswer();
})

function pressEnter (evt, words) {
  if (buttonArr1.classList.contains('click')) 
  {words = words1}
  else if (buttonArr2.classList.contains('click')) 
  {words = words2}
  else if (buttonArr3.classList.contains('click'))
  {words = words3}
  else
  {words = words4}

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
