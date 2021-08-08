const input = document.querySelector(".text-box");
const btn = document.querySelector("button");
const count = document.querySelector(".count");

btn.addEventListener("click", function () {
  let val = input.value.toLowerCase().replaceAll(" ", "");

  let textsize = new Set(val).size;
  count.innerText = textsize > 0 ? textsize : "Please, write something!";
});
