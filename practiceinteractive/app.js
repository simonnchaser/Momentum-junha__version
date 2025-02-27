const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용해
//이건 loginForm이나 loginInput처럼 중요한 정보를 담은 게 아니라서 대문자로 작성해

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //로컬 스토리지에 key,value 쌍을 세팅해준다 이때 key는 미리 작성해둔 string값을 담은 variable, 값은 element.vlaue
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //form에 hidden class를 추가해서 form을 숨겨준다
  showGreeting(username, "dark");
  //showGreeting 함수를 username과 color string과 함께 호출해준다
}

function showGreeting(username, theme) {
  greeting.innerText = `welcome ${username}`; //greeting의 innerText 설정
  greeting.classList.remove(HIDDEN_CLASSNAME); //greeting hidden className 제거
  if (theme === "dark") {
    greeting.style.color = "white";
    greeting.style.backgroundColor = "black";
  } else {
    greeting.style.color = "black";
    greeting.style.backgroundColor = "white";
  }
}
// onLoginSubmit function은 form이 제출되었을때 해당 명령들을 수행하고 수행하는 명령은
// 다음과 같아. 우선 새로고침을 막고 유저가 input에 작성한 값을 username에 저장한뒤
// 그 username을 localStorage에 저장하지. 그 다음 Form을 숨기고 greeting을 나타내
// 여기서 greeting의 innerText로 username을 가져다 쓰고 있지

// 근데 문제가 뭐냐면, 이미 localStorage에 유저 정보가 있다면 굳이 form화면을 처음부터 보여줄
// 이유가 없단말이야. 그렇다면 localStorage에 username 정보가 있는지 확인하고 있다면 바로 greeting
// 화면을 띄우고, 없다면 위의 함수가 하고 있는 절차를 그대로 따르면 된다고

//if 구문과 상관없이 form이 화면에 등장하는데 지금 우린 이걸 제어하고자 하는거라고

const savedUsername = localStorage.getItem(USERNAME_KEY);
//localStorage에서 USERNAME_KEY 값을 불러와 savedUsername에 할당
if (savedUsername === null) {
  //만약 localStorage에 username이 저장되어있지 않다면 우린 form을 띄워야해
  loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden을 제거해 form을 보여주고
  loginForm.addEventListener("submit", onLoginSubmit); //submit event를 듣고 onLoginSubmit함수를 호출
  //localstorage에서 유저 정보의 유무를 확인한 후에 이벤트리스너를 붙여주고 있어.
  //이 순서에 따르면 가장 먼저 form이 등장하고 유저가 입력한후 제출하면 onLoginSubmit 함수에 따라
  //유저 정보는 localstorage에 저장되고 form은 사라지며 greeting이 유저 정보와 함께 등장하지
} else {
  //만약 그렇지 않다면, 즉 username이 이미 존재한다면 우린 바로 greeting을 띄어야지
  showGreeting(savedUsername, "dark");
  //greeting 요소 자체는 등장하겠지만 innerText는 지워졌단 말이야
  //근데 onLoginSubmit에서 우리가 greeting에 넣었던 변수는 함수 내에서 정의했던 변수를 가져다 썼고
  //우린 그 정보를 USERNAME_KEY에 저장했고 savedUsername에 그 정보를 가져와 저장해놓았어
  //결국 여기서는 savedUsername을 적용해야 하는거지
}
