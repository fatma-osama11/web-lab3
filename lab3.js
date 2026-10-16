
document.title = "WOW";

let cartQuantity = 0;

function showCartQuantity() {
    document.getElementById("result").innerText = "Cart Quantity: " + cartQuantity;
}

function addToCart() {
    cartQuantity++;
    showCartQuantity();
}

function addTwo() {
    cartQuantity += 2;
    showCartQuantity();
}

function addThree() {
    cartQuantity += 3;
    showCartQuantity();
}

function reset() {
    cartQuantity = 0;
    showCartQuantity();
}

document.getElementById("showquantity").addEventListener("click", showCartQuantity);
document.getElementById("addtocart").addEventListener("click", addToCart);
document.getElementById("addtwo").addEventListener("click", addTwo);
document.getElementById("addthree").addEventListener("click", addThree);
document.getElementById("resetcart").addEventListener("click", reset);
