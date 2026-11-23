let cart = [];
let buttons = document.querySelectorAll(".addBtn");
let cartCount = document.getElementById("cartCount");
let cartItems = document.getElementById("cartItems");
let totalPrice = document.getElementById("totalPrice");

buttons.forEach(function(button) {
    button.onclick = function() {
        let name = button.getAttribute("data-name");
        let price = Number(button.getAttribute("data-price"));
        cart.push({
            name: name,
            price: price
        });
        updateCart();
    };
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(function(item, index) {
        total += item.price;
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} - Rs. ${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(div);
    });
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }
    cartCount.textContent = cart.length;
    totalPrice.textContent = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

let searchBar = document.getElementById("searchBar");
searchBar.oninput = function() {
    let searchValue = searchBar.value.toLowerCase();
    let products = document.querySelectorAll(".product");
    products.forEach(function(product) {
        let name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(searchValue)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }
    });
};