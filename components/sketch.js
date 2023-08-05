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