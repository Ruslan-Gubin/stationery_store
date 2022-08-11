
// function createCalcFunction (n) {
//     return function() {
//         console.log(1000 * n);
//     };
// }

// const calc = createCalcFunction(42);

// calc();

// function createIncremenntor (n) {
//     return function (num) {
//         return n + num;
//     };
// }

// const addOne = createIncremenntor(1);
// const addTen = createIncremenntor(10);

// console.log(addOne(10));
// console.log(addTen(41));

// function urlGenerator (domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// }
// const yandexUrl = urlGenerator('ru');
// console.log(yandexUrl('yandex'));

// function bind (context, fn) {
//     return function (...agrs) {
//         fn.apply(context, agrs);
//     };
// }

// function logPerson () {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Ruslan', age: 22, job: 'Frontend'};
// const person2 = {name: 'Anna', age: 25, job: 'SMM'};

// bind(person1, logPerson)();
// bind(person2, logPerson)();