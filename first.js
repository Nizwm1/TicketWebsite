let adults = 2;
let children = 3;

for (let i = 1; i <= adults; i++) {
  console.log("Ticket #" + i);
}

if (adults < 0) {
  adults = 0;
}

if (children < 0) {
  children = 0;
}

function calc(adults, children) {
  let price = adults * 12 + children * 6;
  return price;
}

window.onload = function () {
  let btn = document.getElementById("buyBtn");
  btn.onclick = function () {
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let price = calc(adults, children);
    alert(price);
  };
};
