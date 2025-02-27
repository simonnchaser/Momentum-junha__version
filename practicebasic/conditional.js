const age = parseInt(prompt("how old are you?"));
//유저로부터 나이를 입력받는다

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young to drink alchoal");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink bro");
} else if (age > 50 && age <= 80) {
  console.log("how about drink another stuff?");
} else {
  console.log("do whatever you want");
}
//만약 condition이 true이면 코드를 실행시킨다
//만약 false라면 다음 조건을 확인하고
//해당 조건도 false라면 다음 조건을 확인하는데
//더 이상의 condition이 없다면 js는 마지막인 else를 실행
