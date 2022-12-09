const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const modal5 = document.querySelector(".modal5");
const modal6 = document.querySelector(".modal6");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");

btn1.addEventListener("click", () => {
  modal1.classList.add("active");
});
btn2.addEventListener("click", () => {
  modal2.classList.add("active");
});
btn3.addEventListener("click", () => {
  modal3.classList.add("active");
});
btn4.addEventListener("click", () => {
  modal4.classList.add("active");
});
btn5.addEventListener("click", () => {
  modal5.classList.add("active");
});
btn6.addEventListener("click", () => {
  modal6.classList.add("active");
});

button1.addEventListener("click", () => {
  modal1.classList.remove("active");
});
button2.addEventListener("click", () => {
  modal2.classList.remove("active");
});
button3.addEventListener("click", () => {
  modal3.classList.remove("active");
});
button4.addEventListener("click", () => {
  modal4.classList.remove("active");
});
button5.addEventListener("click", () => {
  modal5.classList.remove("active");
});
button6.addEventListener("click", () => {
  modal6.classList.remove("active");
});
