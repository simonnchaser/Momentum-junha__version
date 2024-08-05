const clock = document.querySelector("h2#clock");

//우리는 getHours, getMinutes, getSeconds 이 세개의 데이터를 매초마다 불러와야 해
//매초마다 불러오려면 JS의 어떤 기능을 활용해야 할까?? 그렇지 setInterval를 활용하면 되겠지

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//근데 한자리 수가 표실될때 앞에 0이 붙었으면 좋겠어
//지금부터 우리가 해볼건 string을 문자 2개로 채우는거야
//(method) String.padStart(maxLength: number, fillString?: string)
//이 string이 2글자가 되기를 원한다는 것, 그렇지 않다면(not 2글자) string앞쪽에 0을 추가하겠다는 것

getClock();
//website가 load되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록 할고 싶어
//그렇다면 우선 getclock()함수를 즉시 호출해야겠지
//그리고나서 매초마다 getClock()를 다시 실행할거야
setInterval(getClock, 1000);
//매초마다 우리가 하고 있는 건 새로운 Date Object를 만들고 있는거야
//new Date object는 현재 날짜,시간,분,초에 대한 정보를 가지고 있고
//우리는 그런 object를 매 초마다 새로 create하고 있는거야
