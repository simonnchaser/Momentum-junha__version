// const player = {
//   name: "junha",
//   sayHello(otherPersonsName) {
//     console.log(`hello ${otherPersonsName}, I am ${this.name}`);
//   },
// };
// player.sayHello("simon");
//method 객체 내에서 바로 함수 정의
//객체 내에서 정의했기 때문에, this를 통해 객체의 다른 property(name)를 쉽게 참조할 수 있음
//method는 객체와 긴밀히 연관된 동작을 정의할 때 사용된다.
//객체가 특정 동작을 수행해야하고, 그 동작이 객체의 데이터를 활용해야한다면 객체 내부에서 함수를 정의

function sayHello(otherPersonsName) {
  console.log(`hello ${otherPersonsName}`);
}
const player = {
  name: "junha",
  sayHello: sayHello,
};

player.sayHello("simon");
//외부에서 함수 정의 후 객체에 추가
//이 방식은 여러 객체에서 동일한 함수를 재사용할 때 유용하지만,
//객체의 데이터(this.name등)를 참조하려면 별도로 처리해야 한다.
//여러 객체가 동일한 동작을 공유해야 한다면
