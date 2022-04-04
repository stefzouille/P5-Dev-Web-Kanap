const url = 'http://localhost:3000/api/products/';


// recuperer le panier en tableau
var panier = JSON.parse(localStorage.getItem('product'));
console.log(panier);

// foreach pour parcourir le tableau et faire un fetch a chaque element du tableau
panier.forEach(function (product) {
  var productId = product.id;
  var productColor = product.color;
  var productQuantity = product.quantity;
  var productPrice = product.price;
  console.log(productId);

  fetch(url + productId)
    .then(response => response.json()
      .then(data => {

        var productPanier = document.getElementById("cart__items")

        var panierId = document.createElement("div");
        panierId.setAttribute("class", "panier__id");
        panierId.textContent = product.id;
        productPanier.appendChild(panierId);

        var panierColor = document.createElement("div");
        panierColor.textContent = product.color;
        productPanier.appendChild(panierColor);

        var panierQuantity = document.createElement("div");
        panierQuantity.textContent = product.quantity;
        productPanier.appendChild(panierQuantity);
        console.log(productPanier);
      })
    )
})