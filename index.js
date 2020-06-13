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
