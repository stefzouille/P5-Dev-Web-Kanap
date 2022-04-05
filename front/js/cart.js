const url = 'http://localhost:3000/api/products/';

// var searchParams = new URLSearchParams(window.location.search);
// // aller rechercher la valeur de l attribut id ds l url avec la methode get
// var productId = searchParams.get('id');
// console.log(productId);

// recuperer le panier en tableau
var panier = JSON.parse(localStorage.getItem('product'));
// console.log(panier);

// foreach pour parcourir le tableau et faire un fetch a chaque element du tableau
panier.forEach(function (product) {
  var productId = product.id;
  var productColor = product.color;
  var productQuantity = product.quantity;
  // console.log(productId);
  // console.log(productColor);
  // console.log(productQuantity);

  fetch(url)
    .then(response => response.json()
      .then(data => {
        var product = data;
        console.log(product);

        var prod = document.getElementById('cart__items');
        console.log(prod);

        var item = document.createElement('cart__item');
        item.classList.add('cart__item');
        prod.appendChild(item);


        var prodId = document.createElement('h3');
        prodId.textContent = productId;
        item.appendChild(prodId);

        var prodColor = document.createElement('p');
        prodColor.textContent = productColor;
        item.appendChild(prodColor);

        var prodQuantity = document.createElement('p');
        prodQuantity.textContent = productQuantity;
        item.appendChild(prodQuantity);

        // integrate array in the cart
        var cart = data.filter(function (product) {
          return productId;
        });
        console.log(cart);










      })
    ).catch(error => console.log("erreur : " + error));
}
)


