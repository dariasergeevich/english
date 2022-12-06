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
  ['trick', 'уловка, трюк, на "t"'],
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
  ['firm', 'твердый'],
['firmly', 'твердо'],
['be able to', 'быть способным сделать что-то'],
['faint', 'слабый'],
['faintly', 'слабо'],
['to swallow', 'глотать'],
['wise', 'мудрый'],
['trust with', 'доверить что-либо (словосочетание)'],
['gringingly', 'неохотно'],
['tend to', 'склонный к...'],
['rumble', 'грохот'],
['steadly', 'непрерывно'],
['headlight', 'фара'],
['roar', 'рев'],
['to swell', 'набухать, возрастать'],
['astride', 'верхом'],
['to allow', 'позволять'],
['tangle', 'клубок, спутанный клубок'],
['dustbin', 'мусорный ящик'],
['lid', 'крышка'],
['bushy', 'густой'],
['vast', 'крупный, обширный'],
['bundle', 'сверток, пакет'],
['blanket', 'одеяло'],
['relieve', 'облегчать, освобождать'],
['to borrow', 'одалживать (получать)'],
['to lend', 'одалживать (отдавать)'],
['to swarm', 'кишеть, толпиться'],
['to bend', 'сгибаться'],
['fast asleep', 'крепко уснуть'],
['tuft', 'пучок (не прическа)'],
['jet-black', 'угольно-черный'],
['forehead', 'лоб'],
['curiously', 'любопытно'],
['to get over with', 'покончить с...'],
['scratchy', 'колючий'],
['whiskery', 'усатый'],
['to hawl', 'выть'],
['to wound', 'ранить'],
['to hiss', 'шипеть'],
['to sob', 'всхлипывать'],
['to get a grip', 'собраться, взять себя в руки'],
['grip', 'захват'],
['gingerly', 'осторожно'],
['to twinkle', 'мерцать'],
['to muffle', 'глушить, заглушить'],
['stream', 'течение, поток'],
['to wipe', 'вытирать (на "w")'],
['engine', 'двигатель'],
['to blow nose', 'высморкаться'],
['to make out', 'разобрать, различить'],
['to slink', 'красться, проскальзывать'],
['to murmur', 'ворчать, шептать'],
['heel', 'каблук'],
['swish', 'шелест'],
['neat', 'аккуратный'],
['ink', 'чернила'],
['to astonish', 'изумлять'],
['to prod', 'пинать, толкать (на "p")'],
['to pinch', 'зажимать, щипать'],
['hush', 'тишина, молчание'],
['to vanish', 'исчезать'],
['brass', 'латунь, латунный'],
['mantelpiece', 'каминная полка'],
['to bobble', 'бурлить'],
['on a roundabout at the fair', 'на карусели на ярмарке'],
['not for long', 'ненадолго'],
['shrill', 'пронзительный'],
['to rap on', 'стучать в... (на "r")'],
['to screech', 'визжать'],
['cooker', 'кухонная плита'],
['pan', 'кастрюля'],
['frying pan', 'сковорода'],
['to demend', 'требовать'],
['to groan', 'стонать'],
['cupboard', 'буфет, чулан'],
['beneath', 'под (на "b")'],
['as though', 'как будто'],
['punch bag', 'боксерская груша'],
['knobbly', 'бугристый'],
['sellotape', 'скотч'],
['by the way of', 'посредством (словосочетание)'],
['to comb', 'причесываться'],
['put together', 'вместе взятые'],
['rest of', 'остальная часть'],
['thick', 'толстый'],
['smooth', 'гладкий'],
['wig', 'парик'],
['in case', 'случае'],
['to scent', 'чуять'],
['to grab', 'захватывать, хватать (на "g")'],
['parcel', 'посылка, сверток'],
['tyke', 'дворняжка, грубиян'],
['to unwrap', 'разворачивать'],
['to rip', 'рвать'],
['to leap', 'скакать, вскочить'],
['ought', 'должен'],
['slug', 'слизень'],
['for a change', 'для разнообразия'],
['to snarle', 'рычать'],
['to blow up', 'взрываться'],
['to screw up face', 'скривить лицо'],
['to wail', 'вопить'],
['to spoil', 'портить'],
['to fling', 'бросать, кидать (на "f")'],
['gap', 'пробел'],
['frantically', 'неистово, отчаянно'],
['scrowny', 'тощий'],
['at once', 'сразу же'],
['aside', 'в сторону'],
['fringe', 'челка'],
['baggy', 'мешковатый'],
['however', 'однако'],
['to shear', 'срезать, стричь'],
['to force', 'заставлять'],
['to revolt', 'бунтовать, восставать'],
['puppet', 'марионетка'],
['revolting', 'отвратительный'],
['glove puppet', 'кукла, которая надевается на руку'],
['to shrink', 'сокращаться, уменьшаться'],
['relief', 'облегчение'],
['to punish', 'наказывать'],
['to chase', 'преследовать'],
['chimney', 'дымоход'],
['headmistress', 'директриса'],
['bin', 'мусорное ведро'],
['to complain', 'жаловаться'],
['to overtake', 'обогнать'],
['hoodlums', 'хулиганы'],
['beetroot', 'свекла'],
['to snig', 'хихикать (на "s")'],
['van', 'фургон'],
['remarkably', 'в высшей степени'],
['either', 'тоже'],
['to scratch', 'царапать'],
['afterwards', 'в последствии'],
['lit', 'освещенный'],
['to slither', 'скользить (7 букв)'],
['to wrap', 'заворачивать, оборачивать'],
['glistening', 'блестящий'],
['to whin', 'скулить'],
['to budge', 'сдвинуться с места'],
['to tap', 'постучаться'],
['to order', 'приказывать, заказывать'],
['knuckle', 'сустав пальца'],
['smartly', 'ловко'],
['to snooze', 'дремать'],
['to shuffle', 'шаркать'],
['intenly', 'интенсивно'],
['tank', 'резервуар'],
['boredom', 'скука'],
['hummer', 'молоток'],
['at least', 'по крайней мере, в конце концов'],
['beady', 'как бусинки'],
['to wink', 'подмигивать'],
['ceiling', 'потолок'],
['vigorously', 'решительно'],
['to jab', 'тыкать (на "j")'],
['to breed', 'разводить'],
['deafening', 'оглушительный'],
['to waddle', 'ковылять'],
['concrete', 'бетон'],
['cought by surprise', 'застанный врасплох'],
['to constrict', 'сжимать на "c"'],
['to uncoil', 'размотать'],
['troughout', 'повсюду (на "t")'],
['to slide', 'сколькзить (5 букв)'],
['swift', 'быстрый'],
['to gibber', 'невнятно бормотать'],
['to squeeze', 'сжимать, на "s"'],
['managed to', 'суметь что-то, на "m"'],
['to collapse', 'разрушиться'],
['to strain', 'напрягать'],
['to forbid', 'запретить'],
['to rush out', 'выбежать (словосочетание)'],
['to wave', 'махать'],
['merrily', 'радостно'],
['boa', 'удав (на "b")'],
['constrictor', 'удав (на "c")'],
['crutches', 'костыли'],
['to wander', 'бродить'],
['ray', 'луч'],
['comprehensive', 'всесторонний'],
['to stuff', 'засовывать'],
['to trip', 'споткнуться (на "t")'],
['to fond', 'любить'],
['to smelt', 'плавить, выплавлять'],
['maroon', 'темно-бордовый'],
['tailcoat', 'фрак'],
['knickerbockers', 'бриджи'],
['flat', 'плоский'],
['straw', 'солома'],
['boater', 'лодочник'],
['gruff', 'грубо'],
['to burst', 'взрываться (5 слов)'],
['to burst into tears', 'разразиться слезами'],
['tub', 'ванная, бадья'],
['rag', 'тряпка'],
['bowl', 'чаша'],
['to dye', 'красить'],
['to argue', 'спорить'],
['to wrinkle', 'морщить, на "w"'],
['to bang', 'ударить, стункнуть (на "b")'],
['to flop', 'провалиться'],
['doormat', 'коврик перед дверью'],
['to poke', 'тыкать'],
['to dodge', 'изворачиваться, увернуться'],
['envelope', 'конверт'],
['yellowish', 'желтоватый'],
['parchment', 'пергамент'],
['seal', 'печать'],
['coat of arms', 'герб'],
['eagle', 'орел'],
['badger', 'барсук'],
['to hand', 'передать'],
['to flip', 'перевернуть, на "f"'],
['to snort', 'фыркнуть'],
['whelk', 'щенок'],
['to unfold', 'раскрывать, на "a"'],
['to snatch', 'хватать, на "s"'],
['to sneer', 'насмехаться'],
['to glance', 'взглянуть'],
['to choke', 'задыхаться'],
['to croak', 'квакать'],
['scruff', 'загривок'],
['promptly', 'быстро, на "p"'],
['to dangle', 'свисать'],
['crack', 'трещина, щель'],
['to quiver', 'дрожать, на "q"'],
['to pace', 'шагать, расхаживать'],
['to stamp out', 'уничтножить (словосочетание)'],
['to swap', 'менять'],
['rifle', 'винтовка'],
['bent', 'изогнутый, погнутый (4 буквы)'],
['to bawl', 'орать'],
['to sigh', 'вздыхать'],
['on purpose', 'арочно, намеренно'],
['to whack', 'бить, колотить, на "w"'],
['tortoise', 'черепашка'],
['greenhouse', 'теплица'],
['to strangle', 'душить'],
['to wheeze', 'хрипеть'],
['to thead', 'топтать, наступить'],
['squashy', 'мягкий'],
['lap', 'колени'],
['to tear', 'рвать, на "t"'],
['to nail up', 'заколачивать гвоздями'],
['to slot', 'прорезать'],
['to board up', 'заколачивать досками'],
['to tiptoe', 'ходить на цыпочках'],
['to shread', 'измельчать'],
['dairy', 'молочный, сыроварня'],
['to spread', 'распространять'],
['to whiz', 'свистеть, просвистеть'],
['to pelt', 'сыпаться'],
['waist', 'талия'],
['to bounce', 'подпрыгивать, отскакивать'],
['wrench', 'гаечный ключ'],
['to wrench', 'вырывать, раскнутить гайки'],
['whenever', 'всякий раз, когда...'],
['nightfall', 'сумерки'],
['to blow up', 'взрываться'],
['gloomy', 'мрачный'],
['outskirts', 'окраина, на "o"'],
['damp', 'сырой'],
['musty', 'затхлый'],
['stale', 'несвежий'],
['tinned', 'консервированный'],
['dining-room', 'столовая'],
  ['outta', 'из'],
['flame', 'пламя'],
['purge', 'очистка'],
['basement', 'подвал'],
['boozer', 'пьяница'],
['fiend', 'изверг, злодей'],
['to itch', 'зудеть'],
['gruesome', 'ужасный, отвратительный (на "g")'],
['denial', 'отказ'],
['seem to', 'кажется, что...'],
['stake', 'кол'],
['to pop', 'хлопнуть'],
['peak', 'пик'],
['to represent', 'представлять (шоу)'],
['threat', 'угроза'],
['to crowl', 'красться'],
['just so', 'просто чтобы...'],
['disregard', 'пренебрежение'],
['handful', 'горсть'],
['do not get me wrong', 'не пойми меня неправильно (без апострофа)'],
['to convince', 'убеждать'],
['insecure', 'небезопасный'],
['unconfident', 'неуверенный'],
['it does not make sense', 'это не имеет смысла, главное слово на "s"'],
['to doubt', 'сомневаться'],
['pervert', 'извращенец'],
['stubborn', 'упрямый'],
['frugal', 'бережливый, экономный'],
['skam', 'мошенничество'],
['funural', 'похроны'],
['desparation', 'безысходность, отчаяние'],
['hilarious', 'веселый'],
['to supply', 'поставлять (продукцию)'],
['to downsize', 'сократить'],
['advantage', 'преимущество'],
['theft', 'кража'],
['margin', 'прибыль'],
['misconduct', 'проступок'],
['gross', 'суммарный'],
['severance pay', 'выходное пособие'],
['inventory', 'инвентарь'],
['barely', 'едва (на "b")'],
['expenses', 'расходы'],
['godfather', 'крестный отец'],
['goofy', 'бестолковый'],
['to attend', 'посещать, на "a"'],
['scrubs', 'заросли'],
['to sued', 'подать иск'],
['to admit', 'признаваться, на "a"'],
['to confess', 'признаваться, на "c"'],
['to encourage', 'поощерять'],
['male', 'самец, мужчина'],
['splash', 'всплеск'],
['sissy', 'неженка, маменькин сынок'],
['inch', 'дюйм'],
['subconscious', 'подсознание'],
['ailment', 'недуг'],
['to frazzle', 'вымотать, измотать, на "f"'],
['to overstate', 'преувеличивать'],
['stiff', 'жесткий, твердый, на "s"'],
['to bleed', 'кровоточить'],
['stain', 'пятно, 5 букв'],
['harmful', 'вредный'],
['to stick', 'вставлять, на "s"'],
['to insert', 'вставлять, на "i"'],
['fluid', 'жидкость'],
['needle', 'игла'],
['to branch out', 'разъеденться (словосочетание)'],
['to attach', 'прикреплять, пристегнуть'],
['to pronounce', 'объявить, на "p"'],
['to declare', 'объявить, на "d"'],
['already', 'уже'],
['wind', 'дыхание, на "w"'],
['insurance', 'страховка'],
['renal failer', 'почечная недостаточность'],
['autopsy', 'вскрытие трупа'],
['to scratch off', 'соскребать с...'],
['diversity', 'разнообразие'],
['to mantade', 'уполномочить'],
['punch', 'удар'],
['sturdy', 'крепкий'],
['consumer', 'потребитель'],
['content', 'довольный'],
['retaliation', 'возмездие'],
['for some reason', 'по какой-то причине'],
['comission', 'поручение'],
['ignorance', 'невежество'],
['arise', 'возникать'],
['permission', 'разрешение'],
['to steer away', 'держаться подальше, на "s"'],
['familiar', 'ознакомленный'],
['reenact', 'воспроизвести'],
['outcome', 'исход'],
['to account', 'объяснять, на "a"'],
['to butcher', 'убивать, на "b"'],
['acronym', 'аббревиатура'],
['harm', 'вред, на "h"'],
['supernatural', 'сверхъестесственный'],
['trauma', 'травма'],
['to avenge', 'мстить'],
['envy', 'зависть'],
['joint', 'совместный'],
['to pledge', 'обязаться, пообещать'],
['candidly', 'откровенно'],
['to advence', 'продвигать'],
['advanced', 'продвинутый'],
['awareness', 'осведомленность'],
['terms', 'условия, правила'],
['to embarrese', 'смущать'],
['to regret', 'сожалеть'],
['truly', 'действительно'],
['to insult', 'оскорблять'],
['to abandon', 'покидать, на "a"'],
['lame', 'убогий'],
['to lame', 'калечить'],
['offensive', 'обидно'],
['to squat', 'присесть, сесть на корточки'],
['cornerstone', 'камень преткновения'],
['tape', 'лента'],
['to lead', 'вести что-либо'],
['to get down buisness', 'приступить к делу'],
['connotation', 'значение'],
['term', 'термин'],
['beside', 'рядом, на "b"'],
['to treat', 'лечить'],
['sparks', 'искры'],
['versus', 'против, на "v"'],
['to percolate', 'просачиваться, проникать'],
['loan', 'займ'],
['to stir', 'размешивать, на "s"'],
['further', 'в дальнейшем'],
['convinient', 'удобный'],
['minority', 'меньшенство'],
['to redo', 'переделывать'],
['heist', 'ограбление'],
['entreprenuar', 'предприниматель'],
['against', 'против, на "a"'],
['to run', 'управлять'],
['profitable', 'прибыльный'],
['unemployed', 'безработный'],
['to seek employment', 'искать работу'],
['to apply for a job', 'подать заявление на работу'],
['to turn down the offer', 'отклонить предложение, на "t"'],
['to accept the offer', 'принять предложение'],
['to reject the offer', 'отклонить предложение, на "r"'],
['either, or', 'или, или'],
['to recruite', 'завербовать'],
['double shift', 'двойная смена'],
['to transfer', 'переводить (в другой отдел)'],
['to promote', 'повышать'],
['department', 'отдел'],
['to demote', 'понижать'],
['in 5 years', 'через 5 лет'],
['suburb', 'пригород'],
['by then', 'к тому времени'],
['sober', 'трезвый'],
['head', 'начальник, на "h"'],
['expertise', 'компетенция'],
['strengths', 'сильные стороны'],
['goal-oriented', 'целеустремленный'],
['eager', 'жаждущий'],
['responsible', 'ответственный'],
['to be passionate to', 'испытывать страсть к...'],
['weakness', 'слабость, на "w"'],
['kidney', 'почка'],
['to justify', 'оправдать'],
['redemption', 'искупление'],
['to replie', 'отвечать'],
['to get aquainted', 'знакомиться'],
['al all costs', 'любой ценой'],
['engagement', 'помолвка'],
['do not quite get you', 'не вполне тебя понял'],
['to propose', 'предлагать, на "p"'],
['for a while', 'давно'],
['to figure out', 'выяснять'],
['it does not add up', 'это не имеет смысла, главное слово на "a"'],
['to clear up', 'прояснить'],
['to suss out', 'раскусить'],
['to check out', 'проверить'],
['wiener', 'сарделька'],
['ladder', 'естница, на "l"'],
['to cuddle', 'бнимать, прижимать'],
['to be in good terms', 'быть в хороших отношениях'],
['sacrifice', 'жертва'],
['rage', 'ярость'],
['evident', 'очевидный'],
['to gather', 'собирать(ся)'],
['customs', 'таможня'],
['to delay', 'задерживаться'],
['due', 'по причине (одно слово)'],
['to proceed', 'проследовать'],
['just browse', 'просто смотреть'],
['spade', 'лопата'],
['fiance', 'жених'],
['gift-wrapped', 'подарочная упаковка'],
['to decline', 'отклонять, на "d"'],
['insufficient', 'недостаток'],
['funds', 'средства'],
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
