// Suggested code may be subject to a license. Learn more: ~LicenseLog:1363155520.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3297566247.
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById('productContainer');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" width="200">
        <p>Precio: $${product.price}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productElement);
    });
  });

const botonJoyeria = document.getElementById('jeweleryButton');

botonJoyeria.addEventListener('click', () => {
fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById('productContainer');
      productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" width="200">
        <p>Precio: $${product.price}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productElement);
    });
  });
});

const botonElectronica = document.getElementById('electronicButton');

botonElectronica.addEventListener('click', () => {
fetch('https://fakestoreapi.com/products/category/electronics')
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById('productContainer');
      productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" width="200">
        <p>Precio: $${product.price}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productElement);
    });
  });
});

const botonRopaHombre = document.getElementById('menButton');

botonRopaHombre.addEventListener('click', () => {
fetch("https://fakestoreapi.com/products/category/men's clothing")
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById('productContainer');
      productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" width="200">
        <p>Precio: $${product.price}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productElement);
    });
  });
});

const botonRopaMujer = document.getElementById('womenButton');

botonRopaMujer.addEventListener('click', () => {
fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById('productContainer');
      productList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" width="200">
        <p>Precio: $${product.price}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productElement);
    });
  });
});


