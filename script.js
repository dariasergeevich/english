import {words1} from '././components/words1.js';
import {words2} from '././components/words2.js';
import {words3} from '././components/words3.js';
import {words4} from '././components/words4.js';
import {words5} from '././components/words5.js';
import { special } from '././components/special.js';
import {addNewWord, adminPopup, returnToMenuAdmin} from './components/adminButtonsFuncя.js'
import { constants } from '././components/constants.js';
import {cursorForward, cursorBack, to} from '././components/cursorFunc.js'
import {checkAnswer, next, returnToMenu} from '././components/mainButtonsFunc.js'

//выбор массива кликом на кнопку
let handleChooseArr = function(button, arr, num) {
  constants.inputArr.length = 0;
  document.querySelector('.input_container').innerHTML = '';
  constants.menu.classList.remove('flex')
  button.classList.add('click');
  getRandomWord(arr);
  constants.arrNumber.textContent = 'ARR ' + num;
  to();
}

//проверка выбранного массива
export function chooseArr() { 
  if (constants.buttonArr1.classList.contains('click')) {return words1}
  else if (constants.buttonArr2.classList.contains('click')) {return words2}
  else if (constants.buttonArr3.classList.contains('click')) {return words3}
  else if (constants.buttonArr4.classList.contains('click')) {return words4}
  else if (constants.buttonArr5.classList.contains('click')) {return words5}
  else {return special}
}

//вставка шаблона input для каждый буквы
function getTemplate(id) { 
  const newInput = document 
  .querySelector('.template') 
  .content 
  .querySelector('.input_letter') 
  .cloneNode(true); 
  newInput.id = id;
  return newInput;
}

//выбирает рандомное слово и передает его в код
export function getRandomWord(words) {
  let randIndex = Math.floor(Math.random() * words.length);
  const data = words[randIndex];

  // Выводим на экран перевод (data[1]) и пиньинь/фразу (data[0])
  constants.word.textContent = data[1]; 
  constants.engWord.textContent = data[0]; 
  constants.word.setAttribute('index', randIndex);
  
  // Выводим фразу с выделенным словом (data[2] и data[3])
  if (data[2] && data[3]) {
    let phraseBold = data[2].replace(data[3], `<span class="span">${data[3]}</span>`);
    constants.phrase.innerHTML = phraseBold;
  } else if (data[2]) {
    constants.phrase.innerHTML = data[2];
  }

  // Отрисовываем карточку
  renderWordCard(data);
  constants.wordsRemain.textContent = `${words.length} words left`;

  cursorForward();
  cursorBack();

  return data[0];
}

// Отрисовка карточки
function renderWordCard(data) {
  // data[0] - пиньинь или фраза, data[1] - слово, data[4] - картинка
  const [baseText, singleWord, translation, keyword, image] = data;

  constants.inputArr.length = 0;
  document.querySelector('.input_container').innerHTML = '';

  // Если есть картинка — включаем новый режим
  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.className = 'word-image';
    img.alt = 'word image';
    document.querySelector('.input_container').append(img);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input_letter input_word';
    input.placeholder = 'введите фразу';
    input.dataset.answer = baseText; // Сохраняем правильный ответ (всю фразу)
    document.querySelector('.input_container').append(input);

    constants.inputArr.push(input);
    input.focus();
  } else {
    // --- СТАРЫЙ РЕЖИМ (по буквам) ---
    // В старых массивах пиньинь лежит в data[0] (baseText)
    const wordArr = baseText.split('');
    wordArr.forEach((ch, i) => {
      const wordInput = getTemplate(`letter-${i}`);
      constants.inputArr.push(wordInput);
      document.querySelector('.input_container').append(wordInput);
    });
    constants.inputArr[0]?.focus();
  }
}

//eventListeners кнопок
constants.buttonArr1.addEventListener('click', () => handleChooseArr(constants.buttonArr1, words1, '1'))
constants.buttonArr2.addEventListener('click', () => handleChooseArr(constants.buttonArr2, words2, '2'))
constants.buttonArr3.addEventListener('click', () => handleChooseArr(constants.buttonArr3, words3, '3'))
constants.buttonArr4.addEventListener('click', () => handleChooseArr(constants.buttonArr4, words4, '4'))
constants.buttonArr5.addEventListener('click', () => handleChooseArr(constants.buttonArr5, words5, '5'))
constants.buttonSpecial.addEventListener('click', () => handleChooseArr(constants.buttonSpecial, special, 'special')) 

constants.buttonNext.addEventListener('click', function(words){
  words = chooseArr()
  next(words)
  getRandomWord(words);
  to()
})

constants.buttonCheck.addEventListener('click', function(){
  checkAnswer();
})

constants.buttonMenu.addEventListener('click', function() {
  constants.popup.classList.add('flex')
})

constants.buttonYes.addEventListener('click', returnToMenu)
constants.buttonNo.addEventListener('click', function() {
  constants.popup.classList.remove('flex')
})

constants.buttonAdd.addEventListener('click', addNewWord)
constants.wordsCount.textContent = constants.newWords.length;
constants.buttonMenu1.addEventListener('click', adminPopup)

constants.buttonAdmin.addEventListener('click', function() {
  constants.menu.classList.remove('flex');
  constants.menu1.classList.add('flex');
})

constants.buttonOk.addEventListener('click', returnToMenuAdmin)

console.log(words1.length,words2.length,words3.length, words4.length, words5.length )


