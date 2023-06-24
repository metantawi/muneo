let toogler  = document.querySelector(".toogle")
let nav  = document.querySelector("nav")
let close  = document.querySelector(".close")

toogler.onclick = function () {
  nav.classList.add("open")
}

close.onclick = function () {
  this.parentElement.classList.remove("open")
}

// عند الضغط علي زرار محدد من الكيبورد اقفلي الويندو
// document.onkeyup = function (e) {
//     // console.log(e);
//   if (e.key === "s") {
//     nav.classList.remove("open");
//   }
// };
