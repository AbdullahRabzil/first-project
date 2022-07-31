// var //
// let //
//const//


/*.......................... ES6.............................*/

//////////////////Defult Peramiter//////////////////

/*function fun(name = 'rabzil') {
    console.log(name);

}
fun();
//es6 e jodi kono karone vule jai upore undified na diye 'rabzil'defult show korbe//
fun('Abdullah Al Arif');
//ar noyto eta tw korbei //


/////////////////////Rest peeramiter////////////////////

function fun(a, b, ...name) {
    console.log(a, b, name);
}
fun(8, 87, 1, 3, 3, 6, 5, 89, 0, 0, 0, 0, 0, 0, 0, 0)

//es6 e rest shohoj vabe fun er vitor 100 valuue lagle shonkhepe ei vabe a,b er output dekhe baki shob ...name/jkono er vitore jabe//


///////////////////////Speard Peramiter/////////////////

let num1 = [1, 2, 3, 4, 6, 7,]
let num2 = [...num1, 2, 3, 4, 6, 7,]
console.log(num2);
//speard pera hoche num2 te num1 er arry add korte chaile without [] breaket cahara shudu shonkha boshbe ...num1 lekhlei.//

/////////////////////////Object literals//////////////////

function Fun(name, msg) {
    return {
        name,
        msg
    }
}
console.log(fun(1, 2));

/////////////////// FOr of, For in/////////////////////

for (let num = 0; num <= 10; num++) {
    console.log(num)

}
let array = [1, 2, 3, 4, 5, 6, 7, 7]
for(let i = 0; i <= array.length; i++ ){
    console.log(array[i]); // ekhn eta lagbe na //
}
let array = [1, 2, 3, 4, 5, 6, 7, 7] ( !!!!!! )
for (newArray of array) {
    console.log(newArray);

}
//for of mane arry er shob value show kkorbe//

let num = [1, 2, 3, 4, 5, 6, 7, 7]

for (newArray in num) {
    console.log(newArray);

}
//for in holo index of mane koyta ase ta bolbe//

///////////////////////////Temple String///////////////////////////

let num = `Abdullah 
     arif 
sabrin`;
console.log(num);
//temple string e `` ei symble er vitore jeivabe khusi oi vabe boshano jay//

let name = `abdullah`
let age = 18
let lives = `matlab`
console.log(`My name is ${name}i am ${18} years old & i am live in ${lives}`);
//${} es6 e etar vitor jei var er nam likhbo oitar value show hobe//

///////////////////////Array distructuring///////////////////

let array= ['abdullah', 'al', 'ami', 'doof', 'jod']
let [a,b,...c] = array;
console.log(a)
// es6 ekshate onk gula value er output ekshate ber korte chaile a,b,c eta diye valur nam diye ber korte hobe//

///////////////////////Object distructuring//////////////////

let obj={name:'abdullah', add:'al', age:'ami', bio:'doof'}
let {name,add,bio,age} = obj;
console.log(add,bio)

////////////////////////ES6 Modules//////////////////////////////////

import {Hello} from './hello.js' 
console.log(Hello);
// 3 ta file need hoy,jei file thika ante chai file er nam. oi file jaiya likhte hobe -------->
     export let Hello = 'Say hi';
// html e jaiya type= 'module' korte hoy


////////////////////////////////Class Constructor///////////

// class er secound er break er vitore function lekhte hoy//

class Book {
    constructor(Bookname, prize) {
        this.Bookname = Bookname;
        this.prize = prize;

    }
}
let ans = new Book('jupiter','180tk')
let ans1 = new Book('jupir','18tk')
console.log(ans)
//class funtion onk ta ek

///////////////////////////STATIC METHOD////////////////////

class Book{
     static fun(name,prize ){
        console.log(name,prize)

      }
}
Book.fun('abdullah', '180tk');
//static use kore 'return' method use kore niche var use kora lagbe na,

//////////////////////////////INHERITENCE///////////////////

class Book {
    fun() {
        console.log('Ata amar dadar boi');
    }
    fun1() {
        console.log('eta amr abbur boi');
    }

}
class Amr extends Book {
    // mybook(){
    //     super.fun();
    //     super.fun1();
    // }

}

let myBook = new Amr();
myBook.fun();
myBook.fun1();

//inheritence holo amr dadar and amr babar uttoradikar thakle oita amr kore nite hoy arekta class er moddome 'extends' kore nite hoy er madhhome


///////////////////ARROW FUNTION////////////////////////////

let num = function (x, y) {
    return (x + y)

}
console.log(num(5, 4)) // eta holo funtion expresion structure// (BASIC)

// Arrow funtion//

let num2 = (x, y) => (x + y) + 100;
console.log(num2(10, 30));

let fun = a => a * 50;
console.log(fun(40))


///////////////////////USE STRICT//////////////////////////

"use strict"
num = 20;
console.log(num)
// kono jygy vul ase kina eta bole dey.

///////////////////////MAP & FILTERS////////////////////////

let num = [1,2,4,5,6,7]
let num2 = num.map(fun)

function fun(x){
   return x * 10
}
console.log(num2)
// eta holo map array er output ber kore ek shate onk gula jog kora jay.

let num = [1,2,4,5,6,7]
let num2 = num.filter(fun)

function fun(x){
   return x > 4
}
console.log(num2)
//filter mane array te > 4 er porer shob dekhabe, < dile 4 er age ja ase dekhabe..

///////////////////////ASynchronous vs Synchronous//////////
                 /////seTimeout//////
let fun = () => {
    console.log('fun')
}

let fun1 = () => {
    setTimeout(LoadingTime,2000)
}
let LoadingTime = () => {
    console.log('fun1')
}

let fun2 = () => {
    console.log('fun7')
}
fun()
fun1()
fun2()
// settime out mane kono kisur output ber korte ektu prblm hole oitak 2sec hold kore pore ta auto ans diye dey..

////////////////////CALLBACK, HIGHER ORDER FUNTION/////////// 

let num = (name1) => {    // <--- callback funtion
    console.log(name1)
}

let HigherOrderFun = (name, adress, age, CallBackFun) => {
    let Ans = `my name is ${name} i am ${age} years old i lives in  ${adress} `;
    CallBackFun(Ans)


}
HigherOrderFun('Abdullah', 'matlab', 23,  num)
// upore let holo callback funtion oitak nicher higherorderfun e store korte hole fun er ()er vitore late e callback ta rakhte hobe then niche output er() last e callback er num, 

////////////////////TRY,CATCH,FINALLY,THROW/////////////////

try {
    let num = 20
    console.log(num)
    console.log(num3)
    // let num1 = 26
    // console.log(num1)
                             //error er jygy 'throw'
                            // diye  if,else if,else kora jabe.
                            // 
    // if (1 < 20) {
    //     throw 'ab'  
    // }
    // else {
    //     throw 'jj'
    // }

}
catch (error) {
    console.log('abdullah')
}
finally {
    console.log(23)
}
// 'try' er vtor code rekhe jodi kono ta error dekhay oita 'catch' funtion er vitore cosole.log kore jeta dibo oita ber hobe.er jodi last er kono output na ashe 'Finally' function oita likhe dite hobe.//

/////////////////////////////PROMISE////////////////////////

let message = 30;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (message < 10) {
            resolve(
                { age: 20, add: 'matlab' },
                { age: 20, add: 'matlab' }
            )
        }
        else {
            reject('User is not valid')
        }
    }, 2000);

})
promise.then((x) => {
    console.log(x);
})
promise.catch((error) => {
    console.log(error)
})
//promise() breaket er vitore arrow funtion likhte hoy if, else, er promise er vitor function er likha ekta kore call kore detaials dite hoy. niche promise.then e if store hoy & then() er vitor fun banite hoy, then else e promise.catch e store kora lage () breaket er vitorre function banaya eror likha lage..
------------------------------------------------------------
let num = true;

let numm = new Promise((recrue, rjct) => {
    if (num) {
        recrue([{ Name: 'Abdullah', Age: 21 },
        { Name: 'Abdullah', Age: 21 }]);
    }

    else {
        rjct('User not valid');
    }
})
numm.then((x) => {
    console.log(x)
});

numm.catch((error) => {
    console.log(error);
})
// eta ar oita, ami amr moto practice korsi//
----------------------------------------------------------

/////////////////////////////ASYNC/AWAIT///////////////////////////



function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: 0012,
                userName: 'Rabzu'
            })
        }, 1000);
    })
}
function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get servoces of ${user.userName} from the  API`);
        setTimeout(() => {
            resolve(['Email', 'VPN', "CDN", 'ami'])
        }, 2 * 1000);
    })
}
function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services} `);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    })
}

async function loadData() {
    let user = await getUser(100)
    let service = await getServices(user)
    let cost = await getServiceCost(service)
    console.log(cost)
}
loadData()*/
//


function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('user id is valid now')
        setTimeout(() => {
            resolve({
                userId: 100,
                userName: "Abdullah"
            })
        }, 2000)
    })
}
function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`get services ${user.userName} from API`)
        setTimeout(() => {
            resolve(['CDN', 'API', 'LLL'])
        }, 2 * 1000)
    })
}
function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`calculate the service cost ${services}`)
        setTimeout(() => {
            resolve(['CDN', 'API', 'LLL'])
        }, 2 * 1000)
    })
}

async function loadData() {
    let user = await getUser(100)
    let service = await getServices(user)
    let cost = await getServiceCost(service)
    console.log(cost)
}
loadData()