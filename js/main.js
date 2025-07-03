const container = document.querySelector('.products-container');

for (let i = 0; i < products.length; i++) {
    const getProducts = products[i];

    const card = document.createElement('div');
    card.className = 'product-cart';
    card.innerHTML = `<img class="product-img" src="${getProducts.img}" alt="${getProducts.name}">
                        <h3>${getProducts.name}</h3>
                        <p>₱${getProducts.price}</p>
                        <button onclick="addCart(${getProducts.id})">Add to Cart</button>
    `;

    container.appendChild(card);
}
//ADD TO CART FUNCTION
function addCart(id) {
let cart = [];
const getId = products.find((p) => p.id === id);
cart.push(getId);
alert('Added to cart!')
};