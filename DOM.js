/*----------------------------DOM---------------------------*/


/////////////////////SELECTING METHOD////////////////////////

/*let ID = document.getElementById('ID1'); //----> etar mane hochhe ID k call kore HTML thke select kora.
ID.innerHTML = 'Abdullah Al Arif';    //---> inneeHTML diye HTML er lekha document e change kore jeta lekhbo oita ashbe.

//ID diye selecting korle ekta especific vabe change kora jay delet, style, change kora jay.

let classN = document.getElementsByClassName('className1')[1];
classN.innerHTML = 'Abdullah Al Rabzil';
// Class name diyeo chng kora jay shudu array [] diye bole dite hoy koto numta chng korbo.

document.getElementsByName()[]
document.getElementsByTagName()[]


document.querySelector('#ID1') //---> query diye id select korte hole # diye kora lage.
document.querySelector('.className1') //---> query diye name select korte hole . diye kora lage.

document.querySelectorAll('h1')[0] //---> queryAll diye <Tag> select  kora lage.

////////////////////////ONCLICK EVENT/////////////////////

function clickMe(){
    document.write('Abdullah Al rabzil')
}
//HTML e button tag e onclick = function er nam clickme() diye dile click korle change hobe

function clickMe(){
    document.getElementById('ID1').innerHTML = Date()
}
//HTML e button tag e ID=nam diye id eivabe select korle date dekhabe onclick = function er nam clickme() diye dile click korle change hobe

//////////////////////TRAVERSING ELEMENTS////////////////////

//--Parent Elements--//
let clasS = document.querySelector('.pNote')
console.log(clasS.parentNode)

//--Child Elements--//
 let ParentDiv = document.querySelector('#ParentDiv');
console.log(ParentDiv.firstElementChild)
                      .lastElementChild
                      .children

//--Siblings Element--//
let SibLings = document.querySelector('#ID1');
console.log(SibLings.nextElementSibling);

let SibLings = document.querySelector('#ID1');
console.log(SibLings.previousElementSibling);
//etkta <ul> tag er vitor <li> er jkono tag dhorte bebohar kora hoy, class name set kore ager ta porer ta dhora jay.

/////////////////////MANUPLATING ELEMENTS////////////////

//---creatingElement()---//
let CE =  document.createElement('div')
CE.innerHTML = '<p> this is abdullah al rabzil </p>'
document.body.appendChild(CE)
//HTML e tag<> na kore JS e jkono tag banano jay, createelement() e j tag banate chai nam likhlei hoy.then documnet e output ber korte hoy body te appenchild() diye output ber hoy.

let CE =  document.createElement('div');
CE.id = 'ID1';
CE.innerHTML = '<p> this is abdullah al rabzil </p>'
document.body.appendChild(CE);
//HTML er id="" o banao jay.

let CE =  document.createElement('div')
CE.className = 'ArifClass';
CE.innerHTML = '<p> this is abdullah al rabzil </p>'
document.body.appendChild(CE)
//HTML er clss="" o banao jay kintu ekhane className eivabe likhte hoy

let CE = document.createElement('div');
CE.id = 'ID1';
CE.className = 'ArifClass'
let text = document.createTextNode('how are yoo')
CE.appendChild(text)
document.body.appendChild(CE);
//text add korte hole eivabe korte hoy

//--Example--
let CE = document.createElement('ul')
CE.className = "name";
let txt = document.createElement('li')
txt.textContent = 'home'
let txt1 = document.createElement('li')
txt1.textContent = 'home'
let txt2 = document.createElement('li')
txt2.textContent = 'home'

CE.appendChild(txt)
CE.appendChild(txt1)
CE.appendChild(txt2)
document.body.appendChild(CE)

//--AppendChild()--//

let meNU = document.querySelector('#menu')
function createMenu(name){
    let li = document.createElement('li')
    li.textContent= name
    return li 
    
}
meNU.appendChild(createMenu('home'))
meNU.appendChild(createMenu('home'))
meNU.appendChild(createMenu('eshan'))
//appenChild() er bebohar ki bujlam and ekta element use kore onk gula element bebohar korte prbo.

//--TextContent='' ---//
//joto hidden text ase shob show kore, shob  child er text dekhabe,

//--InnerText=''--//
//eta shudu amder web page a jeta show kore oitai dekhay,

//--innerHTML=''--//
//tag soho dkehay <p>, ekta tag er vitor arekta tag dukate bebohar hoy khuv easy vabe.
//example:
let N = document.querySelector('#menu')
N.innerHTML= '<li>Home</li> <li>About us</li> <li>Exit</li>'; */

///////////////////////DOCUMENT FRAGMENT////////////////




