"use strict";
// Напишите if..else, соответствующий следующему switch:=========================================================

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// Решение

// let browser;
// if (browser == 'Edge'){
//     alert( "You've got the Edge!" );
// }else if ( browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
//     alert( 'Okay we support these browsers too' );
// }else{
//     alert( 'We hope that this page looks ok!' );
// }



// Перепишите код с использованием одной конструкции switch:=========================================================

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// Решение

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;

//     case 1:
//         alert('Вы ввели число 1');
//         break;

//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }



// Следующая функция возвращает true, если параметр age больше 18.=========================================================

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

// Решение

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }

//   Или

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }



// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.=========================================================

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// Решение

// function min(a,b){
//     let result = a<b ? a : b;
//     return result
// }
// console.log(min(2, 5))
// console.log(min(3, -1))
// console.log(min(1, 1))

// Правильное решение

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

//   Или

// function min(a, b) {
//     return a < b ? a : b;
//   }
// console.log(min(2, 5))
// console.log(min(3, -1))
// console.log(min(1, 1))



// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.=========================================================

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Решение

// let x = prompt('Введите целое число', '')
// let n = prompt('Введите степень в которую хотите возвести чило', '')

// function pow(x,n){
//     return x**n;
// }
// n < 1 ? alert(`Степень ${n} не поддерживается, используйте натуральное число`) : alert(pow(x,n))

// // Правильное решение

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }



// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// Мое решение

// let question = confirm('Вы согласны?');
// let ask = (question = true)?
// () => alert('Вы согласились'):
// () => alert('Вы отменили выполнение');
// ask

// Правильное решенеие

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// Лучшее решение из коментариев по моему мнению

// let ask = confirm ("Вы согласны?")?
// () => alert('Вы согласились.') :
// () => alert('Вы отменили выполнение');
// ask ();



// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// 1.Создайте пустой объект user.
// 2.Добавьте свойство name со значением John.
// 3.Добавьте свойство surname со значением Smith.
// 4.Измените значение свойства name на Pete.
// 5.Удалите свойство name из объекта.

// Решение

// let user = {};
// user.name= John;
// user.surname= Smith;
// user.name = Pete;
// delete user.name;



// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// Решение


// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }

// let schedule ={} ;
// alert( isEmpty(schedule) );
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) );



// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// Решение

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);



// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

// Решение

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if (typeof obj[key] === 'number'){
//             obj[key] *= 2
//         }
//     }
// }
// multiplyNumeric(menu)

// for (let key in menu){
//     alert (menu[key])
// }



// Создать всплывающее окно которое будет спрашивать номер региона , а после ввода будет показывать к какому региону принадлежит номер

let regionNumber 

do {
    regionNumber = prompt('Введите номер региона', '')
}while(regionNumber != undefined)


if (regionNumber == undefined){
    alert('Вы отменили ввод')
}else if (codes[regionNumber] == undefined){
    alert('Такого региона нет')
}
else{
    alert(codes[regionNumber])
}
 




let codes = {
    
    "01" : "Республика Адыгея (Адыгея)","101" : "Республика Адыгея (Адыгея)",
    "02" : "Республика Башкортостан","102" : "Республика Башкортостан","702" : "Республика Башкортостан",
    "03" : "Республика Бурятия","103" : "Республика Бурятия",
    "04" : "Республика Алтай",
    "05" : "Республика Дагестан",
    "06" : "Республика Ингушетия",
    "07" : "Кабардино-Балкарская Республика",
    "08" : "Республика Калмыкия",
    "09" : "Карачаево-Черкесская Республика","109" : "Карачаево-Черкесская Республика",
    "10" : "Республика Карелия",
    "11" : "Республика Коми","111" : "Республика Коми",
    "12" : "Республика Марий Эл",
    "13" : "Республика Мордовия","113" : "Республика Мордовия",
    "14" : "Республика Саха (Якутия)",
    "15" : "Республика Северная Осетия — Алания",
    "16" : "Республика Татарстан", "116" : "Республика Татарстан","716" : "Республика Татарстан",
    "17" : "Республика Тыва",
    "18" : "Удмуртская Республика",
    "19" : "Республика Хакасия",
    "20" : "Чеченская Республика","95" : "Чеченская Республика",
    "21" : "Чувашская Республика","121" : "Чувашская Республика",
    "22" : "Алтайский край","122" : "Алтайский край",
    "23" : "Краснодарский край","93" : "Краснодарский край","123" : "Краснодарский край","193" : "Краснодарский край",
    "24" : "Красноярский край","84" : "Красноярский край","88" : "Красноярский край","124" : "Красноярский край",
    "25" : "Приморский край","125" : "Приморский край",
    "26" : "Ставропольский край","126" : "Ставропольский край",
    "27" : "Хабаровский край",
    "28" : "Амурская область",
    "29" : "Архангельская область",
    "30" : "Астраханская область","130" : "Астраханская область",
    "31" : "Белгородская область",
    "32" : "Брянская область",
    "33" : "Владимирская область",
    "34" : "Волгоградская область","134" : "Волгоградская область",
    "35" : "Вологодская область",
    "36" : "Воронежская область","136" : "Воронежская область",
    "37" : "Ивановская область",
    "38" : "Иркутская область","138" : "Иркутская область",
    "39" : "Калининградская область","91" : "Калининградская область",
    "40" : "Калужская область",
    "41" : "Камчатский край",
    "42" : "Кемеровская область","142" : "Кемеровская область",
    "43" : "Кировская область",
    "44" : "Костромская область",
    "45" : "Курганская область",
    "46" : "Курская область",
    "47" : "Ленинградская область","147" : "Ленинградская область",
    "48" : "Липецкая область",
    "49" : "Магаданская область",
    "50" : "Московская область","90" : "Московская область","150" : "Московская область","190" : "Московская область","750" : "Московская область","790" : "Московская область",
    "51" : "Мурманская область",
    "52" : "Нижегородская область","152" : "Нижегородская область","752" : "Нижегородская область",
    "53" : "Новгородская область",
    "54" : "Новосибирская область","154" : "Новосибирская область","754" : "Новосибирская область",
    "55" : "Омская область","155" : "Омская область",
    "56" : "Оренбургская область","156" : "Оренбургская область",
    "57" : "Орловская область",
    "58" : "Пензенская область","158" : "Пензенская область",
    "59" : "Пермский край","159" : "Пермский край",
    "60" : "Псковская область",
    "61" : "Ростовская область","161" : "Ростовская область","761" : "Ростовская область",
    "62" : "Рязанская область",
    "63" : "Самарская область","163" : "Самарская область","763" : "Самарская область",
    "64" : "Саратовская область","164" : "Саратовская область",
    "65" : "Сахалинская область",
    "66" : "Свердловская область","96" : "Свердловская область","196" : "Свердловская область",
    "67" : "Смоленская область",
    "68" : "Тамбовская область",
    "69" : "Тверская область",
    "70" : "Томская область",
    "71" : "Тульская область",
    "72" : "Тюменская область","172" : "Тюменская область",
    "73" : "Ульяновская область","173" : "Ульяновская область",
    "74" : "Челябинская область","174" : "Челябинская область","774" : "Челябинская область",
    "75" : "Забайкальский край",
    "76" : "Ярославская область",
    "77" : "Москва","97" : "Москва","99" : "Москва","177" : "Москва","197" : "Москва","199" : "Москва","777" : "Москва","797" : "Москва","799" : "Москва",
    "78" : "Санкт-Петербург","98" : "Санкт-Петербург","178" : "Санкт-Петербург","198" : "Санкт-Петербург",
    "79" : "Еврейская автономная область",
    "80" : "Забайкальский край, c 5 октября 2020г Донецкая народная республика",
    "81" : "Пермский край, c 5 октября 2020г Луганская народная республика",
    "82" : "Республика Крым",
    "83" : "Ненецкий автономный округ",
    "84" : "Красноярский край, c 5 октября 2020г Херсонская область",
    "85" : "Иркутская область, c 5 октября 2020г Запорожская область",
    "86" : "Ханты-Мансийский автономный округ — Югра","186" : "Ханты-Мансийский автономный округ — Югра",
    "87" : "Чукотский автономный округ",
    "89" : "Ямало-Ненецкий автономный округ",
    "94" : "Территории, находящиеся за пределами РФ и обслуживаемые Управлением режимных объектов МВД России, Байконур",
    "92" : "Севастополь",
}

   


