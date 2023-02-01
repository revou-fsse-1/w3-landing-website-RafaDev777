window.addEventListener(
  "scroll",
  () => {
    const distance =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty("--scroll", distance);
  },
  false
);

const scale = document.body.offsetHeight / window.innerHeight - 1;
document.body.style.setProperty("--scale", scale);
console.log(scale);
