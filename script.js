import {words1} from '././components/words1.js';
import {words2} from '././components/words2.js';
import {words3} from '././components/words3.js';
import {words4} from '././components/words4.js';
import {words5} from '././components/words5.js';
import { deleteWords } from '././components/deleteWords.js';
import { constants } from '././components/constants.js';



//выбор массива кликом на кнопку
let handleChooseArr = function(button, arr, num) {
  constants.inputArr.length = 0;
  document.querySelector('.input_container').innerHTML = '';
  constants.menu.classList.remove('flex')
  button.classList.add('click');
  getRandomWord(arr);
  constants.arrNumber.textContent = 'ARR ' + num
  to();
}

  constants.buttonArr1.addEventListener('click', () => handleChooseArr(constants.buttonArr1, words1, '1'))
  constants.buttonArr2.addEventListener('click', () => handleChooseArr(constants.buttonArr2, words2, '2'))
  constants.buttonArr3.addEventListener('click', () => handleChooseArr(constants.buttonArr3, words3, '3'))
  constants.buttonArr4.addEventListener('click', () => handleChooseArr(constants.buttonArr4, words1, '4'))
  constants.buttonArr5.addEventListener('click', () => handleChooseArr(constants.buttonArr5, words5, 'special'))

  function chooseArr() { //функция выбора массива, с которым работает программа
    if (constants.buttonArr1.classList.contains('click')) 
    {return words1}
    else if (constants.buttonArr2.classList.contains('click')) 
    {return words2}
    else if (constants.buttonArr3.classList.contains('click'))
    {return words3}
    else if (constants.buttonArr4.classList.contains('click'))
    {return words4}
    else
    {return words5}
  }

  function getTemplate(id) { 
    const newInput = document 
    .querySelector('.template') 
    .content 
    .querySelector('.input_letter') 
    .cloneNode('true'); 
  newInput.id = id;
  
    return newInput;
  }

  


function getRandomWord(words) { //выбирает рандомное слово на английском и передает его в код
  let randIndex = Math.floor(Math.random() * words.length);
  constants.word.textContent = words[randIndex][1];
  constants.engWord.textContent = words[randIndex][0];
  constants.word.setAttribute('index', randIndex);


  let wordArr = constants.engWord.textContent.split('');

  wordArr.forEach(element => {
    
   
    let wordInput = getTemplate(element);
    constants.inputArr.push(wordInput)
    
    document.querySelector('.input_container').append(wordInput)
  });

  constants.inputArr[0].focus();

//перенос курсора вперед
for (let i = 0; i < constants.inputArr.length -1; i += 1) {
  
  constants.inputArr[i].oninput = function() {
    
    
  
    if(constants.inputArr[i+1].classList.contains('opacity')) {
      constants.inputArr[i+2].focus();
      console.log(constants.inputArr[i+2]);
      
    }else{
      constants.inputArr[i+1].focus()}
    
  }}
//перенос курсора назад

for (let i = 0; i < constants.inputArr.length; i += 1) {
  constants.inputArr[i].addEventListener('keyup', function(event) {
    if (event.code == 'Backspace' && constants.inputArr[0].value != '') {
      constants.inputArr[i-1].focus();
      constants.inputArr[i-1].value = '';
      
    }else if(event.code == 'Backspace' && constants.inputArr[0].value === '') {
      
      constants.inputArr[0].focus();
      
    }

  })
 }

  return words[randIndex][0];
}



function checkAnswer() { //провеяет соотвествие английского слова и поля ввода
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

//автоматически вставляет пробелы и to

function to () {
  const word = constants.engWord.textContent; 
if (word[0] === 't' && word[1] === 'o' && word[2] === ' ') {
  constants.inputArr[0].value = 't';
  constants.inputArr[0].setAttribute('disabled', 'true')
  constants.inputArr[1].value = 'o';
  constants.inputArr[1].setAttribute('disabled', 'true')
  constants.inputArr[2].value = ' ';
  constants.inputArr[2].classList.add('opacity');
  constants.inputArr[2].setAttribute('disabled', 'true')
  constants.inputArr[3].focus();
  
}

constants.inputArr.forEach((item) => {
  if (item.id === ' ') {
    item.classList.add('opacity');
    item.value = ' ';
    
  }
}
)

}


constants.buttonNext.addEventListener('click', function(words){
  constants.inputArr.length = 0;
  document.querySelector('.input_container').innerHTML = '';
  words = chooseArr()

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
  getRandomWord(words);
  to()
})

constants.buttonCheck.addEventListener('click', function(){
  checkAnswer();
})

function returnToMenu (words) {
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

constants.buttonMenu.addEventListener('click', function() {
  constants.popup.classList.add('flex')
})

constants.buttonYes.addEventListener('click', returnToMenu)
constants.buttonNo.addEventListener('click', function() {
  constants.popup.classList.remove('flex')
})

//код для добавления новых строк в ручном режиме

constants.buttonAdd.addEventListener('click', function() {
  let eng = constants.inputEng.value.toLowerCase();
let rus = constants.inputRus.value.toLowerCase();
  let newWord = `${eng},  ${rus}`.split(',  ')
  constants.newWords.push(newWord);
  constants.wordsCount.textContent = constants.newWords.length;
  constants.inputEng.value = '';
  constants.inputRus.value = '';
})

constants.wordsCount.textContent = constants.newWords.length;


async function copyArr(newstr) {
  try {
    await navigator.clipboard.writeText(newstr);
    console.log('Массив скопирован в буфер обмена');
  } catch (err) {
    console.error('Не удалось скопировать: ', err);
  }
}


constants.buttonMenu1.addEventListener('click', function() {
  let str = (JSON.stringify(constants.newWords));
  let re = /],/gi;
  let newstr = str.replace(re, '],\n');
  copyArr(newstr);
  constants.popup1.classList.add('flex');

})

constants.buttonAdmin.addEventListener('click', function() {
  constants.menu.classList.remove('flex');
  constants.menu1.classList.add('flex');
})

constants.buttonOk.addEventListener('click', function() {
  constants.popup1.classList.remove('flex');
  constants.menu.classList.add('flex');
  constants.menu1.classList.remove('flex');
  constants.newWords.length = 0;
  constants.wordsCount.textContent = constants.newWords.length;
})

console.log(words1.length,words2.length,words3.length, words4.length, words5.length )


