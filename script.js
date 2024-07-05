// Data produk (dapat berasal dari API atau backend)
const productDetails = [
    {
        id: 1,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique velit quis maximus consequat.",
        price: 49.99,
        image: "product1.webp"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Suspendisse potenti. Vivamus pellentesque, libero eget posuere vehicula, justo libero egestas odio, a convallis felis sem non risus.",
        price: 29.99,
        image: "product2.webp"
    },
    {
        id: 3,
        name: "Product 3",
        description: "Duis non ipsum vitae nisi commodo tempus. Donec egestas sapien in consectetur feugiat.",
        price: 39.99,
        image: "product3.webp"
    },
    {
        id: 4,
        name: "Product 4",
        description: "Etiam interdum enim sit amet ligula pharetra, sit amet consectetur libero lacinia. Sed eu ullamcorper urna.",
        price: 19.99,
        image: "product4.webp"
    }
];

// Function to display products on the home page
function displayProducts() {
    const productGrid = document.getElementById('product-grid');

    productDetails.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <a href="product${product.id}.html" class="btn-details">Details</a>
        `;
        productGrid.appendChild(productItem);
    });
}

// Function to display products in catalog (men's and women's)
function displayCatalogProducts() {
    const mensProductGrid = document.getElementById('mens-products');
    const womensProductGrid = document.getElementById('womens-products');

    productDetails.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <a href="product${product.id}.html" class="btn-details">Details</a>
        `;

        if (product.id % 2 === 0) {
            womensProductGrid.appendChild(productItem);
        } else {
            mensProductGrid.appendChild(productItem);
        }
    });
}

// Initialize the correct page display based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html') || currentPage === '/') {
        displayProducts();
    } else if (currentPage.includes('catalog.html')) {
        displayCatalogProducts();
    }
});
