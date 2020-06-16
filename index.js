// 상수 const는 변수 재선언, 재할당 모두 불가능하다.
const a = 221;
// let은 변수에 재할당이 가능하지만,
let b = a - 5;
var c = 4;
console.log(b, a);
// 모든 표현은 한줄에 있어야한다.
// 1. Create
// 2. Initialize
// 3. Use

//변수를 선언할 때는 기본적으로 const
//String
const what = "Kim";
console.log(what);

//boolean 소문자 true, false
const wat = true;

//Number
const num = 777;

// Float
const float1 = 55.1;

//1-9 Organizing Data with Arrays
//Array
// []를 사용
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(mon, tue, wed, thu, fri);

//Object
// {}를 사용
const kimInfo = {
  name: "Kim",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimchi", fattay: false },
    { name: "Cheese burger", fattay: true },
  ],
};

console.log(kimInfo);
console.log(kimInfo.gender);

kimInfo.gender = "Female";
console.log(kimInfo.gender);

console.log(kimInfo.favFood);
console.log(kimInfo.favFood[0]);
console.log(kimInfo.favFood[0].fattay);

//2-1 your first JS Function
//console = object, log = function
console.log(kimInfo, console);

console.log("Grettings Kim");
console.log("Hello Jun");
console.log("Hello Liyn");
console.log("Hello Dal");

function sayHello(potato, age) {
  //console.log(args1, args2)
  console.log("Hello!", potato, " you have ", age);
}

sayHello("Kim", 15);
console.log("Hi!");

//#2.1.1 More Function Fun
// JS에서는 ''도 스트링, ""도 스트링
// `(백틱)
function sayHello2(potato, age) {
  //console.log(args1, args2)
  return `Hello ${name} you are ${age} years old`;
}

const greetKim = sayHello2("Kim", 15);
console.log(greetKim);
console.log("Hi!");

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

console.log();
const plus = calculator.plus(5, 5);
console.log(plus);

//#2.2 JS DOM Functions
const title = document.getElementById("title");
console.log(title);

// Document Object Module
title.innerHTML = "Hi! From JS";

//#2.3 Modifying the DOM with JS
console.dir(title);
title.style.color = "red";
document.title = "im";
const title1 = document.querySelector("#title");
title.innerHTML = "1112345";
title.style.color = "blue";
document.title = "2939312";

//#2.4 Events and event handlers
//JS는 이벤트에 대응하기 위해 만들어졌다.

function handleResize(event) {
  console.log(event);
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

window.addEventListener("click", handleClick);

//#2.5 If, else, and, or
if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("hohoho");
} else {
  console.log("ho");
}

if (20 > 5 && "kim" === "kim") {
  console.log("yes");
} else {
  console.log("no");
}

// const age = prompt("How old are you");
// if (age >= 18 && age < 21) {
//   console.log("you can drink but you should not");
// } else if (age > 21) {
//   console.log("go ahead");
// } else {
//   console.log("you cant");
// }
//console.log(age);

//#2.6 DOM - If else - Function practice
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "blue";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function handleOffline() {
  console.log("offline");
}

function handleOnline() {
  console.log("online, welcome back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

//#2.7 DOM - If else - Function practice Two
const CLICKED_CLASS = "clicked";
// classList 사용
function handleClick2() {
  title.classList.toggle(CLICKED_CLASS);

  //위의 것과 같은 기능
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (!hasClass) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }
}
function init() {
  title.addEventListener("click", handleClick2);
}
init();
