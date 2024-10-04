function loadPost(postList = null) {
  if (postList === null) {
    postList = posts;
  }
  let postContainerDiv = document.getElementById("postscontanier");
  postContainerDiv.innerText = "";
  postList.forEach((post, index) => {
    let postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.onclick = () => {
      readPost(2);
    };
    postDiv.innerHTML = `
     <div class="post__author">
        <div class="post__author--name">${post.author.name}</div>
            <div class="post__author--avatar">
               <img
                  src="${post.author.avatar}"
                  alt=""
               />
            </div>
            </div>
                  <div class="post__title">
                    ${post.title}
                  </div>
                  <div class="post__tags">
                    <div class="post__tags--1 post__tag">${post.tag[0]}</div>
                    <div class="post__tags--2 post__tag">${post.tag[1]}</div>
                  </div>
                  <div class="post__date">${post.detail}</div>
                  <div class="post__img">
                    <img
                      src="${post.image}"
                      alt=""
                    />
                  </div>
                  <div class="post__infor">
                    <div class="post__infor--views">
                      <div class="icon"><i class="fa-regular fa-eye"></i></div>
                      <div class="text">${post.interact.views}</div>
                    </div>
                    <div class="post__infor--bookmark">
                      <div class="icon">
                        <i class="fa-solid fa-bookmark"></i>
                      </div>
                      <div class="text">${post.interact.bookmarks}</div>
                    </div>
                    <div class="post__infor--comments">
                      <div class="icon">
                        <i class="fa-solid fa-comment"></i>
                      </div>
                      <div class="text">${post.interact.comments}</div>
                    </div>
                  </div>
                  <div class="post__copylink">
                    <i class="fa-solid fa-link"></i>
                  </div>
                  <div class="post__hovershow">
                    <button onclick="readPost(${2})">Đọc bài</button>
                    <div class="post__hovershow--icon">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                  </div>  `;

    postContainerDiv.appendChild(postDiv);
  });
}
loadPost();

function readPost(id) {
  window.location.href = "/post/index.html";
}

function search() {
  let searchtxt = document
    .getElementById("searchPost")
    .value.trim()
    .toLowerCase();

  let filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchtxt)
  );
  loadPost(filteredPosts);
}
