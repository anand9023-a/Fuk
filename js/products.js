const products = [
  { name: "Black T-shirt", price: "₹499" },
  { name: "Stylish Watch", price: "₹999" },
  { name: "Sunglasses", price: "₹599" },
  { name: "Trendy Sneakers", price: "₹1499" }
];

const productList = document.getElementById("product-list");

products.forEach((item) => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p><button>Add to Cart</button>`;
  productList.appendChild(div);
});
