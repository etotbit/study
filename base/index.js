// 1. Написать функцию которая получает на вход произвольный объект нужно вернуть новый объект с теми же полями
// 2. Написать функцию которая получает на вход произвольный массив нужно вернуть новый массив с теми же полями
// 3. Написать функцию которая получает 2 аргумента в виде 2х объектов нужно проверить равны ли они по ссылке
// 4. Нужно написать функцию которая возвращает тип единственного аргумента
// 5. Нужно написать функцию которая получает 2 аргумента и нужно вернуть true/false если равны они по типу
// 6. Написать функцию которая получает на вход любой из типа js и возвращает стрингу в текстом 'Это {object/string etc} {число}!' 1- если object, 2 - string, 3 - number, 4 - boolean (switch case)а

// 1.Задача. // 1. Написать функцию которая получает на вход произвольный объект нужно вернуть новый объект с теми же полями

// let obj = {
//   a:2,
//   b:3,
//   c:'asd'
// }

// function newObj(obj){
//   let obj2 = {
//     a:'q',
//     b:23,
//     c:12
//   }
//   return obj2;
//   }
  
// console.log(newObj(obj));

// 2 Задача. // 2. Написать функцию которая получает на вход произвольный массив нужно вернуть новый массив с теми же полями

// let array = [1,2,3,4];

// function out(array){
//   return array.array2 = [5,2,4,5];
// }
//   console.log(out(array));
//   }
// console.log(out(array));

// 3 задча. // 3. Написать функцию которая получает 2 аргумента в виде 2х объектов нужно проверить равны ли они по ссылке

// let obj = {
//   a:1,
//   b:2,
//   c:3
// }

// let obj2 = {
//   a:1,
//   b:2,
//   c:4
// }

// function check(obj,obj2){
//   if( obj.a === obj2.a, obj.b === obj2.b, obj.c === obj2.c){
//     return true;
//   }
//   else if(obj.a !== obj2.a, obj.b !== obj2.b, obj.c !== obj2.c){
//   return false;
//   }

// }
// console.log(check(obj,obj2));

// 4 задача. // 4. Нужно написать функцию которая возвращает тип единственного аргумента

// let name = 1;

// function pow(name){
//   typeof name;
//   return typeof(name);
// }

// console.log(pow(name));

// 5 задача. // 5. Нужно написать функцию которая получает 2 аргумента и нужно вернуть true/false если равны они по типу

// let text1 = 'privet';
// let nums = '10';
// function messege(text1, nums){
//   if(typeof(text1) === typeof(nums)){
//     return true;
//   }
//   else if(typeof(text1) !== typeof(nums))
//   return false;
// }

// console.log(messege(text1, nums));

// 6 задача. 6. Написать функцию которая получает на вход любой из типа js и возвращает стрингу в текстом 'Это {object/string etc} {число}!' 1- если object, 2 - string, 3 - number, 4 - boolean (switch case)а

let nums = {
    1:'Eto object',
    2:'Eto stroka',
    3:'Eto number',
    4:'Eto boolean'
}

function show(nums){
    if()
}

console.log(typeof(show(nums)));
// 7. Написать функцию с единственным аргументов из числового массива. Нужно вернуть массив преобразовав числа в строки. [1,2,3,4] -> ['1','2','3','4']

// let array = [1,2,3,4];

// function show(array){
//     return array[1,2,3,4] = String(array);
    
// }
// console.log(show(array));
// console.log(typeof(show(array)));