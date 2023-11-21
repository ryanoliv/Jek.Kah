document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  const footerText = document.querySelector(".footer-text");
  footerText.innerHTML = `&copy; Jessica Rea ${currentYear}. All Rights Reserved.`;
});
