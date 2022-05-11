// // A closure is a function having access to the parent scope,
// // even after the parent function has popped.

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     return sayHi;
// }
// let hi = greeting();
// hi(); // still can access the message variable


// var v = 1000

// async function fun1() {
//     return 333
// }

// fun1().then((x) => {
//     v = x
// })

// console.log(v)

async function onPress(f) {
    await f(333)
}

class c1 {
    t = 1000;
    constructor() {
        // this.fun1_c1 = this.fun1_c1.bind(this)
    }
    fun1_c1() {
        onPress((p) => {
            let temp1 = 100
            while (temp1 -= 1) {
                this.t = p
                console.log(this.t)
            }
        })
        console.log('finished')
        console.log(this.t)
    }
}

const c11 = new c1()
c11.fun1_c1()