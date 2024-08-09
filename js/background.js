const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];
//우리가 진짜로 해야하는 것은 html에 실제 이미지들을 배경화면으로 추가하는거야
//지금까지 우리는 JS를 통해 html에서 뭔가를 가져오는 작업을 수행해왔어
//아직 JS에서 뭔가를 만들어서 그걸 html에 추가하는건 해본적이 없어

const bgImage = document.createElement("img");
//우린 랜덤으로 배경화면 이미지를 바꿀것이기 때문에 html에서 직접 작성할 수는 없어
//대신 JS에서 랜덤으로 생성한 이미지를 html에 추가해주는 작업을 해야겠지

bgImage.src = `img/${chosenImages}`;
console.log(bgImage);

document.body.appendChild(bgImage);

//chosenImages에 images array의 인덱스 번호를 랜덤으로 생성했고
//images array에는 실제 이미지 파일명을 item으로 넣어줌
//JS로 생성한 요소를 bgImage 변수에 저장하고 해당 이미지 요소의 src에 경로를 써주는데
//여기에 chosenImages 변수를 써줌 -> 랜덤으로 아이템, 즉 파일명이 경로로 사용됨
//즉 우린 말그대로 <img src="img/random number.jpg"/>를 JS로 만들어낸거야
//하지만 이 요소는 아직 document에 존재하지 않아. 아직은 JS에만 존재해
//body를 사용해야 하는데 body를 불러온 적이 없으니까 document.body의 appendChild()를 쓸게
