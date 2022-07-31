

//var friendsName = "";
//console.log(friendsName)


//var strType = 'abdullah prog';
//console.log(typeof strType)

//var numType =94887873;
//console.log(typeof numType)

//var booltype=true,false;
//console.log(typeof booltype)


// var facebook='abdullah al rabzil';
// console.log(facebook.toUpperCase());



//var program='facebook twiteer insta skype';
//console.log(program.split('skype'));

//var where='facebook twiteer insta skype red';
//console.log(where.indexOf('skype'));//

//////////////////////////+,-,*,\,%,parseFloat///////////////////////

// var num1=455;
// var num2=45;
// console.log(num1+num2);

// var num1="455";
// var num2=45;
// num1=parseFloat(455)
// console.log(num1+num2);

// var num1=455;
// var num2=45;
// num2= '' + 45;
// console.log(num1+num2);

// var num1=455;
// var num2=45;
// console.log(num1-num2);

// var num1=455;
// var num2=45;
// console.log(num1*num2);

// var num1=455;
// var num2=45;
// console.log(num1/num2);

////////////////////////////////MATH/////////////////////////////////

// var num1= 20;
// num1= Math.abs(num1);
// console.log(num1);
// // abs holo nagative hole possetive kore dibe

// var num1=20.5;
// num1 = Math.round(num1);
// console.log(num1);
// // round holo .5 er upore hole 1 baraiya dibe .5 er niche hole 1 komaiya dibe//

// var num1=20.40;
// num1=Math.ceil(num1);
// console.log(num1);
// // ceil holo .0 theke jekono shonkaai hok na kn eta 1 upure kore dibe//

//  var num1=20.40;
//  num1=Math.floor(num1);
//  console.log(num1);
// //floor holo .0 theke jekono shonkaai hok na kn eta 1 niche  kore dibe//


// var num1=Math.random() *100;
// console.log(num1);
// //mane 100 er modde nmbr ashbe//
// //random holo lottary er moto nijer iccha moto ekek shmoy number show korabe//

/////////////////////////if,else if,else,switch,/////////////////////

// var num1 = 50;
// var num2 = 500;

// if (num1 > num2) {
//     console.log("abdullah");
//     // // num2 er cheye num1 er man jodi boro hoy taile abdullah show korbe.
// }
// else {
//     console.log('abdullah al rabzil');
//     // 2 konota chara onno kisu ashle eta show korbe.
// }

// var num1 = 50;
// var num2 = 500;

// if (num1 > num2) {
//     console.log("abdullah");
//     // num2 er cheye num1 er man jodi boro hoy taile abdullah show korbe.
// }

// else if (num1 < num2) {
//     console.log("abdullah al rabzil");
//     //num2 er cheye num1 er man jodi boro hoy abdullah al rabzil show korbe.

// }
// else {
//     console.log('both are same');
//     // 2 konota chara onno kisu ashle eta show korbe.

// }

// var num1 = 30;

// switch (num1) {
//     case 30:
//         console.log('Abdullah'); break;
//     case 300:
//         console.log('appi'); break;
//     case 00:
//         console.log('sabrin'); break;
//     case 301:
//         console.log('rim'); break;
//     default:
//         console.log('not in my eyes');
// }

///////////////////////////////NEW DATE//////////////////////////////

// var myDate = new Date;

// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getSeconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getMilliseconds());


/////////////////////////////////Array///////////////////////////////

// var num1 = ['abdullah', 'sabrin' ,'appi', 'sami', 'ami' ];
// num1[4];
// console.log(num1);

// var num1 = ['abdullah', 'sabrin' ,'appi', 'sami', 'ami' ];
// num1[4]= 'tumi';
// console.log(num1);
//eikhae vitore kono kisur nam change korte hole koy nmber ache call korre jeta dite chai  oiita likhei hoy.//

// var sub1 =['abdullah', 'sabrin' ,'appi', 'sami', 'ami'];
// sub1.push('abbu');
// console.log(sub1);
// //push mane holo shobar seshe jeta lekhte chay oita push kore add kore dibe.//

// var sub1 =['abdullah', 'sabrin' ,'appi', 'sami', 'ami'];
// sub1.push('abbu');
// sub1.pop();
// console.log(sub1);
// //pop mane holo last e jei word ta thkabe ta remove diye dibe.//

// var sub1=['abdullah', 'sabrin' ,'appi', 'sami', 'ami'];
// sub1.shift()
// console.log(sub1)
// //shift holo surur dike ja thake ta remove kore dey.//

// var sub1=['abdullah', 'sabrin' ,'appi', 'sami', 'ami'];
// sub1.unshift('afsana');
// console.log(sub1);
// //unshift mane holo shurur dike arekta notun method add kore deoa.//

// var sub1 = ['abdullah', 'sabrin' ,'appi', 'sami', 'ami', 'rabbu'];
// console.log(sub1.slice(2,4));
// //slice  mane holo (2,4) mane 2 number ebong er porer joto shonkha ta takbe shudu oi gula show korbe (2,4) 4 mane stop er por ar jabe na,sesher shonkha ,4 slice e top chinho kaj kore etao show kore na.//

// var fdName = ['abdullah', 'sabrin', 'appi', 'sami', 'ami', 'abbu']
// fdName.splice(0, 2, 'abdullah al arif', 'sabrin');
// console.log(fdName);
// // splice mane hocche kono nidrishto array er vitor value change kore jeta icchA nam boshano jay shudu 1 ta na joto ichha nam boshano jay.

// /////////////////////////////LOOP////////////////////////////////

//  for (var num = 1; num <=50; num++) {
//      console.log(num)
//  }
//etar mane holo for() er vitor 3 ta var lihte hoy//

// var num = [1, 3, 4, 2, 5, 6, 6,]
// for (var i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

//  var num = 1
//  while(num < 10){
//     console.log('abdullah');
//     num++
//  }
// //etr mzne holo vitore na lekhe bahire lekhe

////////////////////////////////FUNCTION////////////////////////////

//  function fun(num1, num2) {
//     var total = num1 + num2
//     console.log(total);
//  }
//  fun(10, 10);
//  fun(10, 10);
//  fun(20, 20);
//khuv shohoje onk gulla ek shate e +,-,*,/,%, kora jay//

// function fun(num1) {
//     var total = num1 * 10;
//     return total;

// }
// var a = fun(10);
// var b = fun(20);
// console.log(a + b);
//etR mane gun kore ans ber korar por oi ans er shate arekta jog/jeta ichha kora jay,(function e variablle ekta boshbe)

////////////////////////////////Object/////////////////////////////

// var Info = { yourname: 'abdullah', village: 'Matlab', PhoneNO: 01837464776}
// console.log(Info.village)
// //eta hocche basic upay amader address ber koraar jonno//


// function fun(Name, Email, adress, phoneNo) {
//     this.Name = Name;
//     this.Email = Email;
//     this.adress= adress;
//     this.phoneNo= phoneNo;

// }
// var rslt = new fun('Abdullah','abdullahrabzil6@gmail.com','Matlab', 01837464776);
// var rslt1 = new fun('Sabrin','abdullahrabzil6@gmail.com','Matlab', 01837464776);
// var rslt2 = new fun('APPI','abdullahrabzil6@gmail.com','Matlab', 01837464776);
// var rslt3 = new fun('Abbu','abdullahrabzil6@gmail.com','Matlab', 01837464776);
// var rslt4 = new fun('Ammu','abdullahrabzil6@gmail.com','Matlab', 01837464776);
// console.log(rslt.phoneNo);
// //etar mane hajar hajar manusher rslt jante parbo khuv shohoje//

export let Hello = 'say hi';
