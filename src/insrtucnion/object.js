const person = Object.create(
    {
        calculatorAge() {
         console.log('Age', new Date().getFullYear() - this.birthYear);
        }
    }, 
    {
    name: {
        value: 'Ruslan',
        enumerable: true,  // дает доступ к итерации обьекта
        writable: true,  //можно менять параметр
        configurable: true, //дает возможность удалять параметр
    },
    birthYear: {
        value: 1986,
        enumerable: false,
        writable: true,
        configurable: true,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            if (this.age >= 35) {
                
                document.body.style.background = 'red';
            }
            
        }
    }

});

// person.name = 'Maxim';

for (let key in person) {
    console.log(key, person[key]);
}

console.log(person.age);
console.log(person.calculatorAge());
