function hello() {
    console.log('hello', this);
}
const person = {  
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is: ${this.name}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is: ${job}`);
        console.log(`Phone is: ${phone}`);
        console.groupEnd();
    }
};
const lena = {
    name: 'Elena',
    age: 23
};

person.logInfo.bind(lena,'frontend', '998 55 35 02')();
// person.logInfo.call(lena,'frontend', '998 55 35 02');
// person.logInfo.apply(lena, ['frontend', '998 55 35 02']);

const array = [1,2,3,4,5];
const array2 = [6,7,8,3,9];

// function multBy (arr, n) {
//     return arr.map(function(i) {
//         return i *n;
//     });
// }
Array.prototype.multBy = function (n) {
    let a = [];
    n.forEach((item) => {
      return a.push(item);
    });
    return this.map((i) => {
        return i * a[4] + 1 * a[0];
    });
        
};

console.log(array.multBy(array2));

// console.log([5,3,5,6].multBy(3));