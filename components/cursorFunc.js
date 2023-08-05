//перенос курсора вперед
import { constants } from "./constants.js";
export let cursorForward = function () {
  for (let i = 0; i < constants.inputArr.length -1; i += 1) {
  
    constants.inputArr[i].oninput = function() {
      
    
      if(constants.inputArr[i+1].classList.contains('opacity')) {
        constants.inputArr[i+2].focus();
        
      }else{
        constants.inputArr[i+1].focus()}
      
    }}
}

export let cursorBack = function () {
  for (let i = 0; i < constants.inputArr.length; i += 1) {
    constants.inputArr[i].addEventListener('keyup', function(event) {
      if (event.code == 'Backspace' && constants.inputArr[0].value != '') {
        constants.inputArr[i-1].focus();
        constants.inputArr[i-1].value = '';
        
      }else if(event.code == 'Backspace' && constants.inputArr[0].value === '') {
        
        constants.inputArr[0].focus();
        
      }})}
}

export let to = function () {
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