const container = document.querySelector('.products-container');

for (let i = 0; i < products.length; i++) {
    const getProducts = products[i];

    const card = document.createElement('div');
    card.className = 'product-cart';
    card.innerHTML = `<img src="${getProducts.img}" alt="${getProducts.name}">
                        <h3>${getProducts.name}</h3>
                        <p>${getProducts.price}</p>
                        <button onclick="${getProducts.id}">Add to Cart</button>
    `;

    container.appendChild(card);
}
