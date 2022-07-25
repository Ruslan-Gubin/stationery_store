
export class Animal {   
    
    constructor(options) {
        this.name = options.name,
        this.age = options.age,
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal');
    }
}

export const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
});
    
class Cat extends Animal {

    constructor(options) {
        super(options),
        this.color = options.color
    }
    voice() {
        super.voice();
        console.log('I am Cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});

animal.voice();
console.log(Animal.type);
console.log(cat);
cat.voice();
console.log(cat.ageInfo);
console.log(cat.ageInfo = 9);
console.log(cat.ageInfo);


export class Components {

    constructor(selector) {
        this.$el = document.querySelector(selector);
       
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }
}

class Box extends Components {
    constructor(options) {
    super(options.selector);
        
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }

}

const box1 = new Box({
    selector: '#test',
    size: 100,
    color: 'red'
});












