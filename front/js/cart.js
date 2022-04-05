const url = 'http://localhost:3000/api/products/';

// recuperer le panier en tableau
var panier = JSON.parse(localStorage.getItem('product'));
// console.log(panier);

// foreach pour parcourir le tableau storage et faire un fetch de api a chaque element du tableau
panier.forEach(function (product, index) {
  product['index'] = index;
  let _id = [];
  let name = [];
  let price = [];
  let imageUrl = [];
  let altTxt = [];
  _id.push(product.id);
  console.log(_id);

  // console.log(product);

  // comparer l id de l api avec l id du localstorage

  var productId = product.id;
  var productColor = product.color;
  var productQuantity = product.quantity;
  // console.log(productId);
  // console.log(productColor);
  // console.log(productQuantity);

  fetch(url + productId)
    .then(response => response.json()
      .then(data => {

        // product c est l api
        var product = data;
        // console.log(product);
        // --------------------------------------------recuperer les donnees de l api------------------------------------------------------

        //recup le name de l api et push ds mon array vide declaré dans mon panier.foreach
        name.push(product.name);
        // console.log(product.name);

        //recup le prix de l api et push ds mon array vide declaré dans mon panier.foreach
        price.push(product.price);
        // console.log(product.price);

        //recup l image de l api et push ds mon array vide declaré dans mon panier.foreach
        imageUrl.push(product.imageUrl);
        // console.log(product.imageUrl);

        //recup l alt de l api et push ds mon array vide declaré dans mon panier.foreach
        altTxt.push(product.altTxt);
        // console.log(product.altTxt);

        // --------------------------------------------afficher sur le dom------------------------------------------------------

        // prod recup info du dom
        var prod = document.getElementById('cart__items');
        // console.log(prod);

        // creation d un div cart__item
        var item = document.createElement('cart__item');
        item.classList.add('cart__item');
        prod.appendChild(item);

        // afficher le nom ds le dom
        var prodName = document.createElement('cart__item__name');
        prodName.textContent = product.name;
        item.appendChild(prodName);

        // afficher le prix ds le dom
        var prodPrice = document.createElement('cart__item__price');
        prodPrice.textContent = product.price;
        item.appendChild(prodPrice);

        //afficher image ds le dom
        var prodImg = document.createElement('img');
        prodImg.setAttribute('src', product.imageUrl);

        // image s affiche mais en grand ------------------------------------
        // item.appendChild(prodImg);

        //img altTxt
        var prodAlt = document.createElement('cart__item__img');
        prodAlt.textContent = product.altTxt;
        item.appendChild(prodAlt);

        var prodColor = document.createElement('cart__item__color');
        prodColor.textContent = productColor;
        item.appendChild(prodColor);


        var prodQuantity = document.createElement('p');
        prodQuantity.textContent = productQuantity;
        item.appendChild(prodQuantity);

        // --------------------------------------------afficher le total------------------------------------------------------
        // faire le total
        var total = document.getElementById('totalQuantity');

        // console.log(total);
        // calcul du total
        // var totalPrice = 0;
        // for (var i = 0; i < price.length; i++) {
        //   totalPrice += price[i] * productQuantity;
        // }

        totalPrice = [];
        for (var i = 0; i < totalPrice.length; i++) {
          total.textContent = totalPrice[i];
        }
        totalPrice.push(product.price * productQuantity);

        totalPrice = totalPrice.reduce(function (a, b) {
          return a + b;
        });
        console.log(totalPrice);


        var totalPrice = document.createElement('p');
        totalPrice.textContent = product.price;
        total.appendChild(totalPrice);

        // console.log(totalPrice);

      })
    ).catch(error => console.log("erreur : " + error));
}
)


