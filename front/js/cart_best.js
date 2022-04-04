// parcourir local storage avec foreach et selectionner mon element puis sup ou rajouter...

// recuperer le tableau dans le local storage
var addProduit = JSON.parse(localStorage.getItem('product'));
// console.log(addProduit);


// verifier si il y a bien un produit dans le local storage
const basketDisplay = () => {
  if (addProduit) {
    addProduit;
    console.log(addProduit);
    // for (const element of addProduit) {
    //   console.log(element);
    // }
    // afficher le local storage dans le html
    addProduit.forEach(function (product) {
      var productId = product.id;
      var productColor = product.color;
      var productQuantity = product.quantity;
      var productPrice = product.price;

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
      var panierTotal = document.createElement("div");
      panierTotal.textContent = product.total;
      productPanier.appendChild(panierTotal);
    })


  } else {
    addProduit = [];
    console.log(addProduit + "vide");
  };
};
basketDisplay();