const logoImg = document.querySelector(".header--logo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  logoImg.classList.toggle(
    "small",
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
  );
}
