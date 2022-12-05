//Создание массива с именем phrases из объектов. Каждый объект заключен в фигурные скобки и состоит из
//текстового элемента text и картинки image
const words = [
  ['daily', 'ежедневный'],
  ['courage', 'смелость'],
  ['affair', 'связь'],
  ['to involve', 'вовлекать'],
  ['to hold with', 'быть согласным с чем-то, поддерживать какую-то идею'],
  ['to expect', 'ожидать'],
  ['hardly', 'едва'],
  ['although', 'хотя, однако, на "a"'],
  ['nearly', 'почти'],
  ['to crane', 'вытягивать шею'],
  ['fence', 'забор'],
  ['to bear', 'выносить (плохую новость)'],
  ['to find out', 'выяснять'],
  ['to shudder to think', 'содрагаться от мысли'],
  ['to keep away', 'ержаться подальше'],
  ['dull', 'скучный, унылый'],
  ['to suggest', 'предлагать'],
  ['to hum', 'урчать, напевать'],
  ['to pick up', 'подобрать, подвезти'],
  ['to wrestle', 'бороться'],
  ['to notice', 'замечать (на "n")'],
  ['tawn', 'загорелый'],
  ['tawny', 'коричневатый'],
  ['to flutter', 'трепетать'],
  ['to peck', 'клевать'],
  ['briefcase', 'портфель'],
  ['tantrum', 'истерика'],
  ['to chortle', 'усмехнуться'],
  ['to back out', 'покидать, отступать'],
  ['sign', 'знак'],
  ['peculiar', 'специфичный, своеобразный'],
  ['to jerk', 'дернуть'],
  ['tabby', 'полосатый'],
  ['trick', 'уловка, трюк, на "t"],
  ['toward', 'в направлении'],
  ['edge', 'край чего-то'],
  ['traffic jam', 'дорожная пробка'],
  ['cloak', 'плащ'],
  ['get-ups', 'прически'],
  ['to suppose', 'предполагать'],
  ['steering wheel', 'руль машины'],
  ['huddle', 'кучка'],
  ['weirdos', 'чудаки'],
  ['to enrage', 'приводить в ярость'],
  ['struck', 'пораженный'],
  ['stunt', 'трюк, фокус, на "s"'],
  ['obviosly', 'очевидно'],
  ['to swoop', 'налетать'],
  ['in broad daylight', 'средь бела дня'],
  ['to gaze', 'пристально глядеть'],
  ['to speed overhead', 'проноситься над головой'],
  ['however', 'однако'],
  ['bun', 'булочка, пучок'],
  ['to stretch legs', 'размять ноги'],
  ['uneasy', 'беспокойный'],
  ['tin', 'олово, жестяная банка'],
  ['to stop dead', 'остановиться как вкопанный'],
  ['to flood', 'наводнить, затопить'],
  ['to clutch', 'хватать, сжимать'],
  ['to dash', 'ринуться, броситься'],
  ['to snap', 'щелкнуть, огрызнуться'],
  ['to seize', 'схватить'],
  ['almost', 'почти'],
  ['to dial', 'набирать номер'],
  ['reciever', 'приемник (емкость)'],
  ['to strok', 'поглаживать'],
  ['to blame', 'винить'],
  ['to walk straight into', 'идти прямо в...'],
  ['to grunt', 'хрюкать'],
  ['to stumble', 'спотыкаться'],
  ['to knock on the ground', 'повалить на землю'],
  ['on the contrary', 'с другой стороны'],
  ['wide', 'широкий'],
  ['squeky', 'визгливый'],
  ['passers by', 'прохожие'],
  ['to rejoice', 'ликовать'],
  ['rattle', 'грохот, хрип'],
  ['to spot', 'замечать (на "s")'],
  ['stern', 'суровый'],
  ['to wonder', 'задаваться вопросом'],
  ['to let into', 'впустить в...'],
  ['to determine', 'определять'],
  ['unable', 'не в состоянии'],
  ['pattern', 'шаблон, образец'],
  ['to grin', 'скалить зубы'],
  ['oddly', 'странно'],
  ['downpour', 'ливень'],
  ['until', 'до того момента'],
  ['folks', 'ребята'],
  ['all over the place', 'повсюду'],
  ['throat', 'горло'],
  ['lately', 'недавно'],
  ['sharp', 'острый'],
  ['sharply', 'резко'],
  ['to mumble', 'бормотать (на "mum")'],
  ['to purse', 'поджимать, морщить'],
  ['to dare', 'oсмеливаться, посметь'],
  ['stiffly', 'чопорно'],
  ['common', 'распространенный, общий'],
  ['heart sinking', 'сердце замирает'],
  ['to creep', 'ползать'],
  ['to peer', 'всматриваться'],
  ['to relate', 'относиться'],
  ['to yawn', 'завать'],
  ['to affect', 'влиять'],
  ['to quiver', 'дрожать, трястись'],
  ['to slam', 'захлопывать'],
  ['neither, nor', 'ни, ни'],
  ['to twitch', 'дергаться, дрогнуть'],
  ['to narrow', 'сужаться'],
  ['judging by', 'судя по...'],
  ['to tuck', 'подгибать, заправлять'],
  ['robe', 'халат'],
  ['to sweep', 'подметать'],
  ['high-heeled', 'на высоком каблуке'],
  ['buckle', 'пряжка, застежка'],
  ['as though', 'как будто'],
  ['spectecles', 'очки'],
  ['crook', 'согнутый'],
  ['to rummage', 'рыться'],
  ['for some reason', 'по какой-то причине'],
  ['to chuckle', 'посмеиваться'],
  ['to mutter', 'бормотать, на "mut"'],
  ['it seem to be', 'кажется, это...'],
  ['to flick', 'щелкнуть, на "f"'],
  ['heady', 'опрометчивый, безрассудный'],
  ['pavement', 'тротуар'],
  ['to slip', 'сколькить (4 буквы)'],
  ['set off', 'отправляться'],
  ['fancy', 'причудливый, фантазия'],
  ['rather', 'скорее (вводное слово)'],
  ['severe', 'суровый'],
  ['to ruffle', 'взъерошить'],
  ['distinctly', 'отчетливо, внятно'],
  ['dozen', 'дюжина'],
  ['to sniff', 'нюхать'],
  ['impatiently', 'нетерпеливо'],
  ['be bound to', 'обязательно (словосочетание)'],
  ['bound', 'связанный'],
  ['i will bet', 'могу поспорить...'],
  ['precious', 'бесценный. драгоценный'],
  ['to swap', 'обмениваться'],
  ['downright', 'явно'],
  ['careless', 'беспечный, неосторожный'],
  ['sideway glance', 'косой взгляд (словосочетание)'],
  ['very day', 'тот самый день (словосочетание)'],
  ['surely', 'конечно'],
  ['to persuade', 'убеждать'],
  ['proper', 'правильный'],
  ['nonsense', 'чепуха'],
  ['to flinch', 'вздрагивать, на "f"'],
  ['exasperate', 'раздраженный'],
  ['to admire', 'восхищаться'],
  ['to flatter', 'льстить'],
  ['noble', 'благородный'],
  ['to blush', 'краснеть'],
  ['earmuffs', 'наушники'],
  ['anxious', 'тревожный, озадаченный'],
  ['to pierce', 'прокалывать'],
  ['piercing stare', 'пронзительный взгляд'],
  ['plain', 'простой'],
  ['however', 'однако'],
  ['drop', 'леденец, капля'],
  ['to turn up', 'оказаться'],
  ['to bow', 'кланяться'],
  ['bow', 'лук (оружие)'],
  ['to gasp', 'дышать с трудом (одно слово)'],
  ['to pat on', 'похлопать по...'],
  ['to reach out', 'дотянуться'],
  ['to tremble', 'дрожать, на "t"'],
  ['somehow', 'как-то'],
  ['to nod', 'кивать'],
  ['glum', 'угрюмый'],
  ['to falter', 'запинаться'],
  ['to astound', 'поражать'],
  ['in the name of heaven', 'во имя небес'],
  ['handkerсhief', 'носовой платок'],
  ['lace', 'кружево'],
  ['pull out', 'вытаскивать'],
  ['to dab', 'вытирать, на "d"'],
  ['beneath', 'под'],
  ['to examine', 'исследовать, изучать'],
  ['though', 'хотя, на "t"'],
  ]

  let buttonCheck = document.querySelector('.check-btn');
  let word = document.querySelector('.rus_word');
  let buttonNext = document.querySelector('.next-btn');
  let comment = document.querySelector('.comment');
  let input = document.querySelector('.input');
  let engWord = document.querySelector('.eng_word');

function getRandomWord(words) { //выбирает рандомное слово на английском и передает его в код
  let randIndex = Math.floor(Math.random() * words.length);
  word.textContent = words[randIndex][1];
  return words[randIndex][0];
}

function checkAnswer(word) { //провеяет соотвествие английского слова и поля ввода
  engWord.textContent = word;
  console.log(word)
  if (input.value.toLowerCase() === word) {
    comment.textContent = 'Success!';
    comment.classList.add('green')
    input.value = '';
  }else{
    comment.textContent = 'Wrong :(';
    comment.classList.add('red')
  }
}

const randomWord = getRandomWord(words);


buttonNext.addEventListener('click', function(){
  comment.textContent = '';
  input.value = '';
  engWord.textContent = '';
  location.reload()
  
})

buttonCheck.addEventListener('click', function(){
  checkAnswer(randomWord);
})
