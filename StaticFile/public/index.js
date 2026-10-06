const btn = document.querySelector(".click");
const counter = document.querySelector(".count")
let count = 0;

btn.addEventListener('click', (evt) => {
    count++;
    counter.innerHTML = `<span>${count}</span>`;
})