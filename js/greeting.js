const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //className이 중복되서 사용되니 변수에 저장
const USERNAME_KEY = "username"; //역시나 string을 반복해서 사용하는 경우이기에 변수로 고정
//만약 string을 작성하다가 오타가 나면 JS는 이걸 지적하지 않을거야 하지만 변수명이 오타가 나면 JS가 지적
//해주니 에러를 수정하기가 훨씬 수월하겠지!!
//결국 본인이 생성한 string을 반복해서 사용하게 될 경우에는 대문자 변수로 저장해놓는 것이 좋은게
//실수를 만들고 싶지 않은 string이라는 사실을 기억하고 상기시키기 좋아

//user가 form을 제출하면 다음 코드가 실행된다.
//html에서 input에 여러 제한(입력, 글자수)을 걸어둔 상태이기 때문에
//기본적으로 input value에는 username이 올바르게 작성된 상태임
function onLoginSubmit(event) {
  event.preventDefault(); //기본 동작 제어

  loginForm.classList.add(HIDDEN_CLASSNAME); //form에 hidden className을 붙여줘 display:none으로 설정
  //야 이제 form은 화면에서 사라져도 되니까 display:none 스타일을 입힌 className을 리스트에 입혀줄께
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  //우리의 목적은 사용자가 입력한 값을 localstorage에 저장해주는거야~!
  paintGreetings();
  //local storage에 이미 저장해놓은 상태이기 때문에 인자를 넣어서 보내주기보다는 그냥 호출하고
  //함수 내부에서 이미 저장된 값을 불러오는 방식으로 코드를 작성하는 거야.
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//localstorage에서 username이라는 키를 가진 데이터 불러와 그리고 savedUsername 변수에 저장
console.log(savedUsername);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  //h1요소의 contents로 인사말과 함께 사용자 입력 값을 넣어준다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //화면에서 form이 사라지고 greeting이 등장할 차례이니 hidden className을 지워줄께
} //같은 코드를 반복하고 있다면 함수로 만들어볼 생각을 해보는거야!
//대신 함수로 사용할시에 우리가 함수를 호출하는 위치에 따라 유저 정보는 다른 곳에서 오게 될거야
//localstorage에 유저정보가 있다면 거기서 유저정보를 받아서 인자로 넣어줄거야
//만약 localstorage에 유저정보가 없다면, 우리는 form의 submit를 기다리고 form이 submit되면
//우리는 input으로부터 유저 정보를 받고, input에서 받은 user를 가진 paintGreetings를 호출할거야

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);

  //만약에 localstorage에 저장된 username이 없다면 아직 user가 form 화면에서
  //input value를 작성하지 않은 상태임으로 form을 화면에 등장시켜야 함
  //고로 hidden classname을 지워주자
} else {
  paintGreetings();

  //근데 이미 user가 form에서 username을 작성했고 제출한 상태라면 새로고침을 했을때
  //다시금 form을 화면에 등장시킬 이유가 없다고
  //그냥 greeting만 화면에 등장시키면 되는거지
  //애초에 h1 id="greeting"은 내부가 비어있는 요소였어.
  //greeting의 innerText는 다시 작성해줘야 겠지 그 전에는 onLoginSubmit함수 내에서
  //innerText를 작성해줬던거나까
  //또한 그 전에는 onLoginSubmit 함수 내에서 username 변수에 inputvalue를 담고 변수 username을
  //contents에 담아줬던 거라면 이번에는 localstorage에 저장된 값을 불러와 저장해둔 savedUsername 변수를
  //contents에 담아줄거야
}
//이 if-else문은 우리 프로그램의 제어 흐름을 담고 있어
