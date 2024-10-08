let cart = [];
function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    let cartSection = document.querySelector(".cart ul");
    cartSection.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        cartSection.innerHTML += <li>${item.product} - $${item.price}</li>;
        total += item.price;
    });
    document.querySelector(".cart p").innerText = Total: $${total};
}

document.querySelector("button").addEventListener("click", () => addToCart("Waffle with Berries", 6.50));