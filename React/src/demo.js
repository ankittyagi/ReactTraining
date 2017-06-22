// scoping

var five = 5; 
var threeAlso = three; // error  
function scope1() {   
	var three = 3;   
	var fiveAlso = five; // == 5   
	var sevenAlso = seven; // error 
}  
function scope2() {   
	var seven = 7;   
	var fiveAlso = five; // == 5   
	var threeAlso = three; // error 
}

// no block scoping with 'var'
if(true){
  var x = 10; 
}
console.log(x); // 3
// block scoping using 'let'
if(true){
  let x = 10; 
}
console.log(x); // refrence error

// const
const person = { name: “ankit” };
person = “anything”; // TypeError 

//but you can change the object values 
person.name = “vishal”; // Fine 



// hoisting
abc();
function abc(){
 console.log(“This is function abc”); // fine
}

// no hoisting for let
console.log(x); // refrence error
let x = 10;
console.log(x); //10

// no hoisting for classes


// destructring
const obj = { first: 'Jane', last: 'Doe' };
const {first, last} = obj;

const iterable = ['a', 'b'];
const [x, y] = iterable;
    // x = 'a'; y = 'b'

// promises
var longFn = function() {
  return new Promise(function(res, rej) {
    setTimeout(res, 1000);
  });
};

var coolFn = function() {
  console.log('cool');
};

// logs cool after 1 second
longFn().then(coolFn);



// closure


function add (x) {
  return function (y) {
    return x + y;
  };
}

var add5 = add(5);
var no8 = add5(3);
alert(no8); 

// what is the output

function talk() {
  var saying = "Oh, this is Javascript";
}
console.log(saying); 

function talk() {
  var saying = "Oh, this is Javascript";
  return saying;
}
var val = talk();
console.log(val);


function talk(){
  return function(){
    var saying = "Oh, this is Javascript";
    return saying;
  }
}
var val = talk();
console.log(val());



function talk(){
  var saying = "Oh, this is Javascript";
  return function(){
    return saying;
  }
}
var val = talk();
console.log(val());

function adding(){
  var y = 4;
  return function(x){
    return x+y;
  }
}
var v = adding();
console.log(v(2));





// output
function addLinks () {
  for (var i=0, link; i<5; i++) {
    link = document.createElement("a");
    link.innerHTML = "Link " + i;
    link.onclick = function () {
      alert(i);
    };
    document.body.appendChild(link);
  }
}
window.onload = addLinks;




function addLinks () {
  for (var i=0, link; i<5; i++) {
    link = document.createElement("a");
    link.innerHTML = "Link " + i;
    link.onclick = function (num) {
      return function () {
        alert(num);
      };
    }(i);
    document.body.appendChild(link);
  }

}

window.onload = addLinks;
