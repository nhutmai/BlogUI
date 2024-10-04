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
