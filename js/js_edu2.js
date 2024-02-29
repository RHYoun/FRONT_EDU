// 조건문--------------------------------------------------------
console.log("---조건문 결과---");
let isShow = true;
let checked = false;
if (isShow) {
  console.log("SHOW!");
}
if (checked) {
  console.log("CHECKED!");
}

if (isShow) {
  console.log("SHOW");
} else {
  console.log("hidden");
}

if (checked) {
  console.log("SHOW");
} else {
  console.log("hidden");
}

//DOM API --------------------------------------------------------
console.log("---DOM API---");
//html 요소(element) 1개를 검색 + 변수저장, 쿼리셀렉터의 경우 여러 요소 중 제일 처음 찾은 요소를 저장
const boxEL1 = document.querySelector(".box"); // CSS선택자를 찾아 boxEL에저장
console.log(boxEL1);
//html요소에 적용할 수 있는 메소드
//인수를 추가가능 1인수, 2인수 : boxEL.addEventListener(1, 2);
//1인수- 이벤트 2인수- 반응
//html의 BOX!!!를 클릭하면 console에 click이 출력된다
boxEL1.addEventListener("click", function () {
  console.log("BOX!!! click~!");
  boxEL1.classList.add("active");
  console.log(boxEL1.classList.contains("active"));
  boxEL1.classList.remove("active");
  console.log(boxEL1.classList.contains("active"));
});
//html 요소 검색 및 저장
//요소의 클래스 정보 객체 활용
const boxEL2 = document.querySelector(".box2"); // CSS선택자를 찾아 boxEL에저장
console.log(boxEL2);
console.log(boxEL2.classList);
boxEL2.classList.add("active");
console.log(boxEL2.classList);
let isContains = boxEL2.classList.contains("active");
console.log(isContains);
boxEL2.classList.remove("active");
isContains = boxEL2.classList.contains("active");
console.log(isContains);

//selectAll이기에 모든 요소를 찾음
const boxELs = document.querySelectorAll(".box");
console.log(boxELs);
//찾은 요소들을 배열데이터 처럼 생김. 반복 실행을 통해 제어 해야 함
boxELs.forEach(function (boxEL, index) {
  boxEL.classList.add(`order-${index + 1}`); //백틱 명심하자 0부터 인식하기에 +1을 넣어서 1부터 시작하게 만듦
  console.log(index, boxEL);
});

const boxEL = document.querySelector(".box");
//Getter 값을 얻는 용도
console.log(boxEL.textContent);
//setter 값을 저장하는 용도
boxEL.textContent = "happy";
console.log(boxEL.textContent);

// 메소드 체이닝--------------------------------------------------------
const a = "hello~";
//split : 문자를 인수 기준으로 쪼개서 배열로 반환
//reverse : 배열 뒤집기
//join : 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split("").reverse().join(""); // 메소드를 붙여서 작성 가능 하며 이를 체이닝이라 함
console.log(a);
console.log(b);
