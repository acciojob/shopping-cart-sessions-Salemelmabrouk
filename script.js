// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render products
function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${product.name} - $${product.price}
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(listItem);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(product);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  
  renderCart();
}

// Function to render the shopping cart
function renderCart() {
  const cartList = document.getElementById('cart-list');
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cartList.innerHTML = '';
  cart.forEach(product => {
    const listItem = document.createElement('li');
    listItem.innerText =` ${product.name} - $${product.price}`;
      
	  
    cartList.appendChild(listItem);
  });
}

// Function to clear the shopping cart
function clearCart() {
  sessionStorage.removeItem('cart');
  renderCart();
}

// Initial setup
renderProducts();
renderCart();
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);