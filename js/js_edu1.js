console.log("happy");
let fruits = ["apple", "banan", "cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(new Date("2024-02-28").getDate());
console.log(new Date("2024-02-29").getDate());
console.log(new Date("2024-03-01").getDate());

// string 문자데이터로 따옴표를 사용한다
let myName = "YRH";
let email = "xxx@gmail.com"; //큰,작은 따옴표 안따진다
let hello = `Hello ${myName}?!`; //백틱 사용을 하여 다른 데이터를 보관해서 채워넣을 수 있다.
console.log("---string---");
console.log(myName);
console.log(email);
console.log(hello);

// number 정수및 부동 소수점 숫자를 나타낸다
let number = 123;
let opacity = 1.57;
console.log("---number---");
console.log(number);
console.log(opacity);

// boolean 참,거짓 두가지 값 밖에 없는 논리 데이터
let checked = true;
let isShow = false;
console.log("---boolean---");
console.log(checked);
console.log(isShow);

//undefined 값이 할당되지 않은상태
let undef;
let obj = { abc: 123 };
console.log("---undefined---");
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

//null 어떤 값이 의도적으로 비어있음
let empty = null;
console.log("---null---");
console.log(empty);

//object 객체데이터, 여러 데이터를 key:value 형태로 저장 중괄호!!
let user = {
  name: "YRH",
  age: 44,
  isValid: true,
};
console.log("---object---");
console.log(user.name);
console.log(user.age);
console.log(user.isValid);

//array 여러 데이터를 순차적으로 저장 대괄호!!!
let fruits2 = ["apple", "banan", "cherry"];
console.log("---array---");
console.log(fruits2[0]);
console.log(fruits2[1]);
console.log(fruits2[2]);

//let : 선언한 변수를 재사용이 가능 하며, 변수 선언 가능
let a = 2;
let b = 5;
console.log("---let---");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("let 변수 선언 후 값의 재할당이 가능하다, const의 경우 type err가 발생");
console.log(a);
a = 999;
console.log(a);

console.log("---function---");
//function 선언
function helloFunc() {
  //실행할 내용 선언
  console.log(1234);
}
//함수 호출
helloFunc();

//return 함수
function returnFunc() {
  return 1234567;
}
let rf = returnFunc();
console.log(rf);

//매개변수 함수
function sum(a, b) {
  // a와 b는 매개변수
  return a + b;
}
//재사용
let a1 = sum(1, 2);
let b1 = sum(7, 12);
console.log(a1, b1);

//이름이 있는 함수 기명함수
function hello1() {
  console.log("hello~~");
}
//이름이 없는 함수 익명 함수 - 호출을 할 수가 없어서 변수에 지정을 해줘서 사용한다.
let world1 = function () {
  console.log("world~~");
};
//함수 호출
hello1();
world1();

//객체 데이터
const happy3 = {
  name: "happy",
  age: 23,
  // 메소드 = 함수 표현
  getName: function () {
    return this.name; // this. 은 소속되어 있는 객체 데이터를 의미한다.
  },
};
const hisName = happy3.getName();
console.log(happy3.name);
console.log(hisName);
console.log(happy3.getName());
