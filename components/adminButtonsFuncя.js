//перенос курсора вперед
import { constants } from "./constants.js";

export function addNewWord() {
  let eng = constants.inputEng.value.toLowerCase();
  let rus = constants.inputRus.value.toLowerCase();
  let phr =  constants.inputPhrase.value.toLowerCase();
  let key =  constants.inputKeyword.value.toLowerCase();

    let newWord = `${eng},  ${rus},  ${phr},  ${key}`.split(',  ')
    constants.newWords.push(newWord);
    constants.wordsCount.textContent = constants.newWords.length;
    constants.inputEng.value = '';
    constants.inputRus.value = '';
    constants.inputPhrase.value = '';
    constants.inputKeyword.value = '';
}

async function copyArr(newstr) {
  try {
    await navigator.clipboard.writeText(newstr);
    console.log('Массив скопирован в буфер обмена');
  } catch (err) {
    console.error('Не удалось скопировать: ', err);
  }
}

export function adminPopup (){
  let str = (JSON.stringify(constants.newWords));
  let re = /],/gi;
  let newstr = str.replace(re, '],\n');
  copyArr(newstr);
  constants.popup1.classList.add('flex');
}

export function returnToMenuAdmin() {
  constants.popup1.classList.remove('flex');
  constants.menu.classList.add('flex');
  constants.menu1.classList.remove('flex');
  constants.newWords.length = 0;
  constants.wordsCount.textContent = constants.newWords.length;
}
