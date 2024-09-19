// do something!
const TOGGLE_KEY = 'my_toggle';
const body = document.querySelector('body');

const toggleBtn = document.querySelector('.bx-right-arrow-circle');
const nav = document.querySelector('nav');
const preload = window.getComputedStyle(body);
const localValue = localStorage.getItem(TOGGLE_KEY) === 'true'; // string을 boolean으로 변환

let state = localValue; // 초기 상태 설정
const applyActive = () => {
  if (localValue === true) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
};

window.onload = () => {
  body.style.visibility = 'visible';
  applyActive();

};



// // 변수 선언 없이 addEventListener 등록.
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.querySelector('body').classList.remove('preload');
  state = nav.classList.contains('active');
  localStorage.setItem(TOGGLE_KEY, state);
  // console.log("state? :", state);

});


// // 변수 선언해서 addEventListener 따로 등록.
// const toggleNav = onclick = () => {
//   nav.classList.toggle('active');
//   document.querySelector('body').classList.remove('preload');
//   state = nav.classList.contains('active');
//   localStorage.setItem(TOGGLE_KEY, state);
//  console.log("state? :", state);
// };

// 이벤트 리스너를 사용하여 클릭 시 토글
// toggleBtn.addEventListener('click', toggleNav);



/*
NOTE

새로고침시 계속 트랜지션을 해결하지 못했었음.
이유는 -
localStorage에서
getItem(TOGGLE_KEY) 이 반환하는 값이 언제나 문자열이라는것을
캐치하지 못했기 때문이다.
불린형이라 예상하고 코드를 짜서 계속 새로고침시 트랜지션이 발생했었고
쳇GPT의 도움으로 해결했다.
*/