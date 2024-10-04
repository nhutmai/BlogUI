function activeUserMenu() {
  let userMenu = document.getElementById("userMenu");
  userMenu.style.display = "block";
  prepareCloseUserMenu();
}
function prepareCloseUserMenu() {
  let userMenu = document.getElementById("userMenu");

  document.addEventListener("click", function close(event) {
    const id = event.target.id;
    if (
      !userMenu.contains(event.target) &&
      id !== "nav__userAvatar" &&
      id !== "navbar__user--name" &&
      id !== "navbar__user"
    ) {
      userMenu.style.display = "none";
      document.removeEventListener("click", close);
    }
  });
}

function loadPost() {
  loadPostHead(posts[1].author, posts[1].interact, posts[1].detail); // load phần author và các thông tin ở phần đầu của post
  loadPostContent(posts[1].content, posts[1].title, posts[1].interact.likes); // load nội dung và like
  loadTableOfContent(posts[1].tableOfContent);
}
loadPost();

function loadPostHead(author, interact, detail) {
  //author
  document.getElementById("postAuthorImg").src = author.avatar;
  document.getElementById("postAuthorName").innerText = author.name;
  document.getElementById("postAuthorUserName").innerText = author.userName;
  document.getElementById("postAuthorStar").innerText = author.moreDetail.star;
  document.getElementById("postAuthorPosts").innerText =
    author.moreDetail.posts;
  document.getElementById("postAuthorFollowers").innerText =
    author.moreDetail.followers;
  document.getElementById("postAuthorTotalViews").innerText =
    author.moreDetail.totalView;

  // post
  document.getElementById("postDetail").innerText = detail;
  document.getElementById("postViews").innerText = interact.views;
  document.getElementById("postBookmarks").innerText = interact.bookmarks;
  document.getElementById("postComments").innerText = interact.comments;
}

function loadPostContent(content, title, likes) {
  document.getElementById("postLikes").innerText = likes;
  document.getElementById("postContent").innerHTML = content;
  document.getElementById("postTitle").innerHTML = title;
}
function loadTableOfContent(tableOfContent) {
  let container = document.getElementById("tableOfContent__container");

  tableOfContent.forEach((item, indexMain) => {
    let main = document.createElement("div");
    main.classList.add("tableOfContent__main");

    main.innerHTML = `<a href='#${indexMain + 1}' >${item.main}</a>`;
    container.appendChild(main);
    item.sub.forEach((element, indexSub) => {
      let sub = document.createElement("div");
      sub.classList.add("tableOfContent__sub");
      sub.innerHTML = `<a href='#${indexMain + 1}.${
        indexSub + 1
      }' >${element}</a>`;
      container.appendChild(sub);
    });
  });
}

var isUpVote = false;
var isDownVote = false;

function upVote() {
  let vote = document.getElementById("upVote");
  let likes = document.getElementById("postLikes");
  let currentValue = parseInt(likes.innerText);

  if (isUpVote) {
    vote.style.color = "#858484";
    likes.innerText = currentValue - 1;
    isUpVote = false;
    return;
  }

  likes.innerText =
    isUpVote || isDownVote ? currentValue + 2 : currentValue + 1;
  isUpVote = true;
  isDownVote = false;

  if (isDownVote || isUpVote) {
    let downVote = document.getElementById("downVote");
    downVote.style.color = "#858484";
  }
  vote.style.color = "#5488c7";
}

function downVote() {
  let vote = document.getElementById("downVote");
  let likes = document.getElementById("postLikes");
  let currentValue = parseInt(likes.innerText);

  if (isDownVote) {
    vote.style.color = "#858484";
    likes.innerText = currentValue + 1;
    isDownVote = false;
    return;
  }

  likes.innerText =
    isDownVote || isUpVote ? currentValue - 2 : currentValue - 1;
  isDownVote = true;
  isUpVote = false;

  if (isDownVote || isDownVote) {
    let upVote = document.getElementById("upVote");
    upVote.style.color = "#858484";
  }
  vote.style.color = "#5488c7";
}
