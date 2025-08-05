const cartItems = document.getElementById("cart-items");

if (cartItems) {
  cartItems.innerHTML = `
    <div>
      <h3>Black T-shirt</h3>
      <p>Price: ₹499</p>
    </div>
    <div>
      <h3>Stylish Watch</h3>
      <p>Price: ₹999</p>
    </div>
  `;
}
