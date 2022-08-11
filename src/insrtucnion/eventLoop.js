console.log('Start');  //выполнилось 1

console.log('Start2');  //выполнилось 2

function timeout2sec() {  
console.log('timeout2sec');
}

setTimeout(function(){  //ушол в обработку после 5 сукунд становится на очередь
    console.log('Inside timeout, after 5seconds');
}, 5000);

setTimeout(timeout2sec, 2000); //ушол в обработку после 2 сукунд становится на очередь

console.log('End'); //выполнилось 3

// setTimeout(timeout2sec, 2000) event loop выбрасывает в стек из очереди -выпол. 4


//setTimeout(function(){  
// console.log('Inside timeout, after 5seconds');
// }, 5000) //  event loop выбрасывает в стек из очереди -выпол. 5