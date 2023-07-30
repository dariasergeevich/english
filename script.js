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
    inputArr.length = 0;
document.querySelector('.input_container').innerHTML = '';
    menu.classList.remove('flex')
    buttonArr1.classList.add('click');
    getRandomWord(words1);
    arrNumber.textContent = 'ARR1'
    to();
  })

  buttonArr2.addEventListener('click', function() {
    inputArr.length = 0;
document.querySelector('.input_container').innerHTML = '';
    menu.classList.remove('flex')
    buttonArr2.classList.add('click');
    getRandomWord(words2);
    arrNumber.textContent = 'ARR2'
    to();
  })

  buttonArr3.addEventListener('click', function() {
    inputArr.length = 0;
document.querySelector('.input_container').innerHTML = '';
    menu.classList.remove('flex')
    buttonArr3.classList.add('click');
    getRandomWord(words3);
    arrNumber.textContent = 'ARR3'
    to();
  })

  buttonArr4.addEventListener('click', function() {
    inputArr.length = 0;
document.querySelector('.input_container').innerHTML = '';
    menu.classList.remove('flex')
    buttonArr4.classList.add('click');
    getRandomWord(words4);
    arrNumber.textContent = 'ARR4'
    to();
  })

  buttonArr5.addEventListener('click', function() {
    inputArr.length = 0;
document.querySelector('.input_container').innerHTML = '';
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





















  function getTemplate(id) { 
    const newInput = document 
    .querySelector('.template') 
    .content 
    .querySelector('.input_letter') 
    .cloneNode('true'); 
  newInput.id = id;
  
    return newInput;
  }
  let inputArr = [];
  


function getRandomWord(words) { //выбирает рандомное слово на английском и передает его в код
  let randIndex = Math.floor(Math.random() * words.length);
  word.textContent = words[randIndex][1];
  engWord.textContent = words[randIndex][0];
  word.setAttribute('index', randIndex);


  let wordArr = engWord.textContent.split('');

 
 //работа с DOM: сделать так, чтобы слова переносились на новые строчки

 /*let arrGap = [];
 let arrInputId = [];

 for (let i = 0; i < inputArr.length; i += 1) {
   arrInputId.push(inputArr[i].id)
 }
 arrGap.push(arrInputId.indexOf(' '))

 console.log(inputArr)
 console.log(arrInputId)*/


  wordArr.forEach(element => {
    
   
    let wordInput = getTemplate(element);
    inputArr.push(wordInput)
    /*let arrGap = [];


 arrGap.push(wordArr.indexOf(' '))

    inputArr.push(wordInput);
    console.log(wordArr.indexOf(element)<arrGap[0])

    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div');

    document.querySelector('.input_container').append(div1)
    document.querySelector('.input_container').append(div2)
    document.querySelector('.input_container').append(div3)
    document.querySelector('.input_container').append(div4)
    document.querySelector('.input_container').append(div5)


    console.log(document.querySelector('.input_container'))*/


    //document.querySelector('.input_container').append(wordInput)
//console.log(arrGap[0])
    /*if(wordArr.indexOf(element) <arrGap[0]) {
      div1.append(wordInput);
    }
    
    if(wordArr.indexOf(element) > arrGap[0]) {
      div2.append(wordInput);
    }

    else{
    document.querySelector('.input_container').append(wordInput);}*/
    
    document.querySelector('.input_container').append(wordInput)
  });





 
  inputArr[0].focus();








//перенос курсора вперед
for (let i = 0; i < inputArr.length -1; i += 1) {
  
  inputArr[i].oninput = function() {
    
    
  
    if(inputArr[i+1].classList.contains('opacity')) {
      inputArr[i+2].focus();
      console.log(inputArr[i+2]);
      
    }else{
      inputArr[i+1].focus()}
    
  }}
//перенос курсора назад

for (let i = 0; i < inputArr.length; i += 1) {
  inputArr[i].addEventListener('keyup', function(event) {
    if (event.code == 'Backspace' && inputArr[0].value != '') {
      inputArr[i-1].focus();
      inputArr[i-1].value = '';
      console.log(inputArr[i-1].hasAttribute('disable') === true)
      console.log(inputArr[i-1])
      
    }else if(event.code == 'Backspace' && inputArr[0].value === '') {
      
      inputArr[0].focus();
      
    }

  })
 }
    //работа с DOM: сделать так, чтобы слова переносились на новые строчки

    /*let arrGap = [];
    let arrInputId = [];

    for (let i = 0; i < inputArr.length; i += 1) {
      arrInputId.push(inputArr[i].id)
    }
    arrGap.push(arrInputId.indexOf(' '))
    console.log(arrGap)

    for (let i = 0; i < arrGap.length; i += 1) {
if (arrGap[0] === -1) {
  arrGap.length = 0
}
      if(arrGap.length === 1) {
        inputArr[0].insertAdjacentHTML('beforeBegin','<div class = "word_row">')
        inputArr[arrGap[i]].insertAdjacentHTML('afterEnd','<div>')
        console.log(inputArr[0])
        console.log(inputArr[arrGap[i]])
        console.log(document.querySelector('.word_row'))
      }else if(arrGap.length > 1) {
        inputArr[0].insertAdjacentHTML('beforeBegin','<div class = "word_row">')
        inputArr[i].insertAdjacentHTML('afterBegin','<div><div class = "word_row">')
        inputArr[i].insertAdjacentHTML('afterBegin','<div><div class = "word_row">')
      }
    }}*/
//ПРИМЕР
    /*let tables = document.getElementsByTagName('table'),
    length = tables.length,
    i, wrapper;

for (i = 0; i < length; i++) {
    wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'classname');
    tables[i].parentNode.insertBefore(wrapper, tables[i]);
    wrapper.appendChild(tables[i]);
} */

  return words[randIndex][0];
}













function checkAnswer() { //провеяет соотвествие английского слова и поля ввода
  engWord.classList.remove('hidden')



  
let inputLetterArr = [];

for (let i = 0; i < inputArr.length; i += 1) {
  inputLetterArr.push(inputArr[i].value);
  inputArr[i].setAttribute('disabled', 'true')
}

let inputWord = inputLetterArr.join('');


if (inputWord.toLowerCase() === engWord.textContent) {
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







//автоматически вставляет пробелы и to

function to () {
  //input.value = ''
  const word = engWord.textContent; 
if (word[0] === 't' && word[1] === 'o' && word[2] === ' ') {
  //input.value = 'to '
  inputArr[0].value = 't';
  inputArr[0].setAttribute('disabled', 'true')
  inputArr[1].value = 'o';
  inputArr[1].setAttribute('disabled', 'true')
  inputArr[2].value = ' ';
  inputArr[2].classList.add('opacity');
  inputArr[2].setAttribute('disabled', 'true')
  
  inputArr[3].focus();
  
}

inputArr.forEach((item) => {
  if (item.id === ' ') {
    item.classList.add('opacity');
    item.value = ' ';
    

  }
  
}

)







}











buttonNext.addEventListener('click', function(words){
  inputArr.length = 0;
  document.querySelector('.input_container').innerHTML = '';
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

  for (let i = 0; i < inputArr.length; i += 1) {
    inputArr[i].removeAttribute('disabled')
  }
  getRandomWord(words);
  to()
})

buttonCheck.addEventListener('click', function(){
  checkAnswer();
})

/*function pressEnter (evt, words) {
  inputArr.length = 0;
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

  for (let i = 0; i < inputArr.length; i += 1) {
    inputArr[i].removeAttribute('disabled')
  }
  getRandomWord(words);
  to()
}}*/

//document.addEventListener('keydown', pressEnter)

function returnToMenu (words) {
inputArr.length = 0;
document.querySelector('.input_container').innerHTML = '';
console.log(inputArr)
  

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
popup.classList.remove('flex');

if (!buttonNext.classList.contains('hidden')) {
  buttonNext.classList.add('hidden');
  buttonCheck.classList.remove('hidden');
}

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
  let eng = inputEng.value.toLowerCase();
let rus = inputRus.value.toLowerCase();
  let newWord = `${eng},  ${rus}`.split(',  ')
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

console.log(words1.length,words2.length,words3.length, words4.length, words5.length )


