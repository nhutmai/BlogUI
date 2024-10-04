var post1 = {
  id: 1,
  author: {
    name: "Dương Nguyễn",
    avatar: "/image/userAvatar/a.jpg",
    moreDetail: {
      star: 100,
      posts: 100,
      followers: 100,
      totalView: 100,
    },
  },
  title: "Chatbot và cách xây dựng chatbot",
  tag: ["chatbot", "chatbot overview"],
  detail: "thg 6 7,8:00pm 4 phút đọc",
  interact: {
    views: 11,
    likes: 10,
    bookmarks: 20,
    comments: 1,
  },
  image: "../image/postImage/chatbot.jpg",
  content: "",
  comments: [],
};
var post2 = {
  id: 1,
  author: {
    name: "Khanh Phong",
    userName: "@khanhphong",
    avatar: "/image/userAvatar/b.jpg",
    moreDetail: {
      star: 10,
      posts: 1000,
      followers: 110,
      totalView: 10,
    },
  },
  title: "JavaScript Nâng Cao",
  tag: ["js", "font end"],
  detail: "thg 1 15,10:00pm 8 phút đọc",
  interact: {
    views: 11,
    likes: 10,
    bookmarks: 20,
    comments: 0,
  },
  image: "../image/postImage/js.jpg",
  content: `
<div class="post__started">
  Có một câu nói là: Trên đời chỉ có thứ nhiều người chửi và thứ không ai thèm
  dùng.
</div>
<div class="post__paragraph">
  Javascript là một ví dụ điển hình, nó có một số điểm thú vị nhưng cũng khiến
  chúng ta phải đau đầu. Lý thuyết thì dễ hiểu, nhưng khi thực hành là cả một
  vấn đề. Vậy nên, mình sẽ cùng các bạn đi sâu vào từng ví dụ cụ thể và phân
  tích, mổ xẻ nó để hiểu hơn về Javascript nhé.
</div>
<div class="post__paragraph">
  Series này có thể sẽ khá dài mình không biết sẽ có bao nhiêu Kỳ tuy nhiên để
  tiện cho các bạn nào không đọc các bài trước đó của mình về JS thì trong loạt
  bài này mình sẽ giải thích lại toàn bộ. Các lý thuyết trong loạt bài này mình
  cũng có thể sẽ giải thích lại nhiều lần (tùy hứng) để các bạn có thể năm rõ nó
  hơn nhé. Ok vào bài thôi nào... GÉT GÔ 🚀
</div>
<div class="post__ps">
  Nếu có bất kỳ câu hỏi nào đừng ngại hãy bình luận dưới phần comment nhé. Hoặc
  chỉ cần để lại một comment chào mình là đã giúp mình có thêm động lực hoàn
  thành series này. Cảm ơn các bạn rất nhiều
</div>
<div class="post__majorSection" id="1">1.Hoisting</div>
<div class="post__paragraph">Với đoạn code này:</div>
<div class="post__code">
  function sayHi() {\n console.log(name);\n console.log(age);\n var name =
  "Lydia";\n let age = 21;\n}\nsayHi();
</div>
<div class="post__paragraph">
  Kết quả xuất ra màn hình sẽ là: "undefined" và "ReferenceError"
</div>
<div class="post__paragraph">
  Cùng mình đi tìm hiểu tại sao kết quả nó lại là như vậy nhé ❔
</div>
<div class="post__majorSection--child" id='1.1'>
  1.1. Biến trong JavaScript và việc "hoisted"
</div>
<div class="post__paragraph">
  Khi bạn nhìn thấy đoạn mã trên, bạn có thể tự hỏi: "Tại sao lại xuất hiện
  undefined và ReferenceError trong khi ta đã khai báo biến name và age sau
  những dòng console.log?". Để giải đáp câu hỏi này, mình cần phải hiểu về một
  khái niệm quan trọng trong JavaScript:
  <strong>hoisting</strong> .
</div>
<div class="post__majorSection--child" id='1.2' >1.2. Hoisted là gì?</div>
<div class="post__paragraph">
  Trong JavaScript, khi chúng ta khai báo một biến bằng var, trình biên dịch sẽ
  tự động "di chuyển" phần khai báo biến đó lên đầu hàm hoặc lên đầu phạm vi
  toàn cục. Người ta gọi quá trình này là hoisting.
</div>
<div class="post__paragraph">Ví dụ, khi ta có:</div>
<div class="post__code">
  function saySomething() {\n console.log(message);\n var message = "Hello, mình
  là Tuấn!";\n}
</div>
<div class="post__paragraph">
  Thực chất, trình biên dịch sẽ "thấy" mã như sau:
</div>
<div class="post__code">
  function saySomething() {\n var message;\n console.log(message);\n message =
  "Hello, mình là Tuấn!";\n }
</div>
<div class="post__majorSection" id='2'>2. Event Loop và Event Queue</div>
<div class="post__paragraph">
  Trước khi đi sâu vào các ví dụ, thì mình muốn nói một chút về Event Loop và
  Event Queue.
</div>
<div class="post__majorSection--child" id='2.1'>2.1. Event Loop</div>
<div class="post__paragraph">
  Trong Javascript, có một khái niệm quan trọng là Event Loop. Nó là một vòng
  lặp vô hạn mà trong đó, engine của Javascript liên tục kiểm tra xem có công
  việc gì cần thực hiện hay không.
</div>
<div class="post__majorSection--child" id='2.2'>2.2. Event Queue</div>
<div class="post__paragraph">
  Khi một hàm bất đồng bộ như setTimeout được gọi, callback của nó không được
  thực thi ngay lập tức. Thay vào đó, nó sẽ được đặt vào một hàng đợi gọi là
  Event Queue. Chỉ khi mọi công việc trong execution stack (stack thực thi) đã
  xong, Event Loop mới bắt đầu lấy các công việc từ Event Queue ra và thực thi
  nó.
</div>
<div class="post__majorSection" id='3'>3.Lời kết</div>
<div class="post__paragraph">
  Mình hy vọng bạn thích bài viết này và học thêm được điều gì đó mới. To Be
  continued....
</div>
  `,
  tableOfContent: [
    {
      main: "1.Hoisting",
      sub: [
        '1.1. Biến trong JavaScript và việc "hoisted"',
        "1.2. Hoisted là gì?",
      ],
    },
    {
      main: "2. Event Loop và Event Queue",
      sub: ["2.1. Event Loop", "2.2. Event Queue"],
    },
    {
      main: "3.Lời kết",
      sub: [],
    },
  ],
  comments: [],
};
var post3 = {
  id: 1,
  author: {
    name: "Nguyễn Trung Hiếu",
    avatar: "/image/userAvatar/c.jpg",
    moreDetail: {
      star: 0,
      posts: 10,
      followers: 1,
      totalView: 1,
    },
  },
  title: "Design pattern-Abstract factory implement",
  tag: ["js", "font end"],
  detail: "thg 3 1,11:15pm 10 phút đọc",
  interact: {
    views: 11,
    likes: 10,
    bookmarks: 20,
    comments: 1,
  },
  image: "../image/postImage/designP.jpg",
  content: "",
  comments: [],
};

var posts = [post1, post2, post3, post1, post1, post1];
