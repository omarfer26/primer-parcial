fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))

const añadirCarrito = document.getElementById('añadirCarrito');
añadirCarrito.addEventListener('click', () => {
    const productId = document.getElementById('productContainer').id;
    fetch('https://fakestoreapi.com/carts',{
    method:"POST",
        body:JSON.stringify({
            userId: 1, 
            date: new Date(),
            products: [{ productId: productId, quantity: 1 }] 
        })
    })
    .then(res => res.json())
    .then(json => console.log(json));
});

