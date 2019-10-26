const backToTopBtn = document.getElementById("back-to-top-btn");

window.onscroll = () => scrollFunction();

backToTopBtn.onclick = () => {
  document.body.scrollTop = 80;
  document.documentElement.scrollTop = 80;
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
