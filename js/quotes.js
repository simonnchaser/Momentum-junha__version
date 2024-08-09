const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    author: "John Lennon",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//지금 quotes array에는 10개의 인용구 object가 있으니까
//우린 0부터 9까지 랜덤하게 하나의 숫자를 발생시키는 기능이 필요하다고
//Math.random() 정적 메서드는 0보다 크거나 같거나 1보다 작은 부동 소수점 의사 난수를 반환
//그래서 우린 10을 곱해주고 소수점을 떼어내야 하는데 이때 소수점을 떼어내는 방법은 3가지가 있어
//round()-반올림, ceil()-정수가 아닌 이상 무조건 높임 floor()-정수가 아닌 이상 무조건 내림

//근데 우리는 배열 아이템 개수를 직접 세서 hard coding을 해줬단 말이야
//만약 여기에 quote하나가 더 추가된다면 *10이 아니라 *11을 또 해줘야 한다고
//대신에 Array.length를 사용하면 Array의 길이를 자동으로 반환해주니 이걸 사용하자
