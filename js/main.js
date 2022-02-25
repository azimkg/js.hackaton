// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// ПИСАТЬ КОД ЗДЕСЬ
//!answer
// let programmer = {
//   name: "Azim",
//   surname: "Zheldenbaev",
//   age: 22,
//   languages: "JS",
//   salary: "13000$",
// };
// console.log(programmer.name);
// console.log(programmer.surname);
// console.log(programmer.age);
// console.log(programmer.languages);
// console.log(programmer.salary);

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let firstNum = +prompt("Введите первое число");
// let secondNum = +prompt("Введите второе число");
// let thirdNum = firstNum + secondNum;
// if (thirdNum > 10 && thirdNum < 20) {
//   console.log(thirdNum * 5);
// } else if (thirdNum > 20 && thirdNum < 50) {
//   console.log(thirdNum / 3);
// } else {
//   console.log(thirdNum + 10);
// }

// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];
// for (let elem of aboutUs) {
//   for (let j = 0; j < elem.length; elem++) {
//     console.log(`${elem[j]} : ${elem[j + 1]}`);
//   }
// }

// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42,
// };
// let sum = 0;
// for (let key in users) {
//   sum += users[key];
// }
// console.log(sum);

// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// function removeElem(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== element) {
//       console.log(arr[i]);
//     }
//   }
// }
// removeElem([2, "hello", true, "world", 5, "js"], "world");

// Задание №6
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//   //Допишите ф-ю
// }
// // Пример:
// const res = foo(3)(4);
// console.log(res); //7

// function foo(a) {
//     //Допишите ф-ю
//   }
//   // Пример:
//   const res = foo(3)(4);
//   console.log(res); //7

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// function foo(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let res = foo(3);
// console.log(res(4));

// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let limit = 1000;
// function functionLimit(number) {
//   if (number < limit) {
//     console.log(number);
//     functionLimit(number * 2);
//     console.log(number);
//   }
// }
// functionLimit(50);

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let word = ["den", "console", "people", "log", "name", "programmer"];
// let newWord = word.filter((item) => {
//   return item.length > 5;
// });
// console.log(newWord);

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// function checkTasks(task2) {
//   let sum = 0;
//   task2.forEach((element) => {
//     return (sum += element);
//   });
//   alert(sum);
// }
// checkTasks([10, 25, 25, 15, 5, 10]);

// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let arr = [4, 5, 5, 5, 3, 5, 5, 2, 3, 1, 3, 4];
// function checkTask(task) {
//   let num = 0;
//   let number = 0;
//   task.forEach((a) => {
//     let count = 0;
//     for (let i of task) {
//       if (a === i) {
//         count += 1;
//       }
//     }
//     if (num < count) {
//       num = count;
//       number = a;
//     }
//   });
//   return `Число ${number}! Повторилось ${num}  раза`;
// }
// console.log(checkTask(arr));

// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let arr = [8, 1, 2, 2, 3];
// function checkTask(nums) {
//   let num = nums.map((item) => {
//     let res = 0;
//     for (let elem of nums) {
//       if (item > elem) {
//         res++;
//       }
//     }
//     return res;
//   });
//   return num;
// }
// console.log(checkTask(arr));

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// function checkTask(a, b) {
//   let str1 = a.toString();
//   let str2 = b.toString();
//   let arr1 = str1.split("");
//   let arr2 = str2.split("");
//   let result = arr1.concat(arr2);
//   [a, b] = result;
//   [a, b] = [b, a];
//   console.log(a, b);
// }
// checkTask(0, 1);

// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// function checkTask(obj) {
//   let {
//     size: { width, height },
//     items: [a, b],
//     extra,
//   } = obj;
//   console.log(width, height, a, b, extra);
// }
// checkTask({
//   size: { width: 100, height: 200 },
//   items: ["Cake", "Donut"],
//   extra: true,
// });

// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ
// !answer
// let elevator = {
//   currentFloor: 1,
//   minFloor: 1,
//   maxFloor: 16,
//   printFloor() {
//     console.log(this.currentFloor);
//   },
//   printError() {
//     console.log("Error");
//   },
//   upOneFloor() {
//     if (
//       this.currentFloor >= this.minFloor &&
//       this.currentFloor < this.maxFloor
//     ) {
//       this.currentFloor++;
//       this.printFloor();
//     } else {
//       this.printError();
//     }
//   },
//   downOneFloor() {
//     if (
//       this.currentFloor > this.minFloor &&
//       this.currentFloor <= this.maxFloor
//     ) {
//       this.currentFloor--;
//       this.printFloor();
//     } else {
//       this.printError();
//     }
//   },
//   toFloor(floor) {
//     if (floor >= this.minFloor && floor <= this.maxFloor) {
//       while (this.currentFloor < floor) {
//         this.upOneFloor();
//       }
//       while (this.currentFloor > floor) {
//         this.downOneFloor;
//       }
//     } else {
//       this.printError();
//     }
//   },
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.upOneFloor();
// elevator.downOneFloor();
// elevator.downOneFloor();
// elevator.toFloor(+prompt("Choose"));
