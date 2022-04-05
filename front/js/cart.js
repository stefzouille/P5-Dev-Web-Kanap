const url = 'http://localhost:3000/api/products/';

// var searchParams = new URLSearchParams(window.location.search);
// // aller rechercher la valeur de l attribut id ds l url avec la methode get
// var productId = searchParams.get('id');
// console.log(productId);

// recuperer le panier en tableau
var panier = JSON.parse(localStorage.getItem('product'));
// console.log(panier);

// foreach pour parcourir le tableau et faire un fetch a chaque element du tableau
panier.forEach(function (product, index) {
  product['index'] = index;
  let _id = [];
  let name = [];
  let price = [];
  let imageUrl = [];
  let altTxt = [];
  _id.push(product.id);
  console.log(_id);

  // comparer l id de l api avec l id du localstorage

  // console.log(product);

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
        console.log(product);
        // --------------------------------------------recuperer les donnees de l api------------------------------------------------------

        //recup le name de l api et push ds mon array vide declaré dans mon panier.foreach
        name.push(product.name);
        console.log(product.name);

        //recup le prix de l api et push ds mon array vide declaré dans mon panier.foreach
        price.push(product.price);
        console.log(product.price);

        //recup l image de l api et push ds mon array vide declaré dans mon panier.foreach
        imageUrl.push(product.imageUrl);
        console.log(product.imageUrl);

        //recup l alt de l api et push ds mon array vide declaré dans mon panier.foreach
        altTxt.push(product.altTxt);
        console.log(product.altTxt);

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
        var prodImg = document.createElement('cart__item__img');
        prodImg.setAttribute('src', product.imageUrl);
        prodImg.setAttribute('alt', product.altTxt);
        prodImg.textContent = product.altTxt;
        item.appendChild(prodImg);

        // afficher l image ds le dom
        var prodColor = document.createElement('cart__item__color');
        prodColor.textContent = productColor;
        item.appendChild(prodColor);


        // creation titre h3
        // var prodId = document.createElement('h3');
        // prodId.textContent = productId;
        // item.appendChild(prodId);

        // var prodColor = document.createElement('p');
        // prodColor.textContent = productColor;
        // item.appendChild(prodColor);

        var prodQuantity = document.createElement('p');
        prodQuantity.textContent = productQuantity;
        item.appendChild(prodQuantity);

      })
    ).catch(error => console.log("erreur : " + error));
}
)


