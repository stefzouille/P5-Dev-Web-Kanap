const url = 'http://localhost:3000/api/products/';

// recuperer le panier en tableau
var panier = JSON.parse(localStorage.getItem('product'));
// console.log(panier);

// foreach pour parcourir le tableau storage et faire un fetch de api a chaque element du tableau
panier.forEach(function (product, index) {
  product['index'] = index;
  let name = [];
  let price = [];
  let imageUrl = [];
  let altTxt = [];

  // comparer l id de l api avec l id du localstorage

  var productId = product.id;
  var productColor = product.color;
  var productQuantity = product.quantity;
  var productPrice = product.price;



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

        // quantity.push(product.quantity);

        // --------------------------------------------afficher sur le dom------------------------------------------------------

        // prod recup info du dom
        var prod = document.getElementById('cart__items');
        // console.log(prod);

        // creation d un div cart__item
        var item = document.createElement('div');
        item.classList.add('cart__item');
        prod.appendChild(item);

        // creation d un article cart__item
        var article = document.createElement('article');
        article.classList.add('cart__item');
        item.appendChild(article);

        // creation d un div cart__item__img
        var Img = document.createElement('div');
        Img.classList.add('cart__item__img');
        item.appendChild(Img);
        var itemImg = document.createElement('img');
        itemImg.classList.add('cart__item__img');
        itemImg.setAttribute('src', product.imageUrl);
        itemImg.setAttribute('alt', product.altTxt);
        article.appendChild(itemImg);


        // afficher le nom ds le dom
        var prodName = document.createElement('div');
        prodName.classList.add('cart__item__content');
        var prodNameDescrip = document.createElement('div');
        prodNameDescrip.classList.add('cart__item__content__description');
        var prodNameH2 = document.createElement('h2');
        prodNameH2.textContent = product.name;
        var prodColor = document.createElement('p');
        prodColor.textContent = productColor;
        var prodPrice = document.createElement('p');
        prodPrice.textContent = product.price;
        // console.log(product);


        // ajouter les donnees ds le dom
        prodNameDescrip.appendChild(prodNameH2);
        prodNameDescrip.appendChild(prodColor);
        prodNameDescrip.appendChild(prodPrice);
        prodName.appendChild(prodNameDescrip);
        article.appendChild(prodName);

        // creation d un div cart__item__content__settings
        var settings = document.createElement('div');
        settings.classList.add('cart__item__content__settings');

        var settingQuantity = document.createElement('p');
        settingQuantity.textContent = "Qté : ";

        var settingQuantityInput = document.createElement('input');
        settingQuantityInput.setAttribute('type', 'number');
        settingQuantityInput.setAttribute('value', productQuantity);
        settingQuantityInput.setAttribute('class', 'itemQuantity');
        settingQuantityInput.setAttribute('min', '1');
        settingQuantityInput.setAttribute('max', '100');


        settingQuantity.appendChild(settingQuantityInput);
        settings.appendChild(settingQuantity);
        article.appendChild(settings);

        // creation d un div cart__item__content__settings__delete
        var deleteItem = document.createElement('div');
        deleteItem.classList.add('cart__item__content__settings__delete');
        var deleteItemP = document.createElement('p');
        deleteItemP.textContent = "Supprimer";
        deleteItem.appendChild(deleteItemP);
        article.appendChild(deleteItem);

        article.appendChild(settings);

        // console.log(productQuantity);

        settingQuantityInput.addEventListener('change', function () {
          var newQuantity = this.value;
          changeQuantityLocalStorage(newQuantity, product._id, productColor);
        })

        deleteItemP.addEventListener('click', function () {
          // console.log(product._id);
          // console.log(productColor);
          deleteItemStorage(product._id, productColor);
        })

        // --------------------------------------------afficher le total------------------------------------------------------

        // recup le total ds le dom
        var total = document.getElementById('totalQuantity');
        // console.log(total);

        // afficher le total ds le dom
        total.textContent = calculQuantity();

        // --------------------------------------------afficher le prix total------------------------------------------------------

        // recup le total ds le dom
        var totalPrice = document.getElementById('totalPrice');
        // console.log(totalPrice);

        // afficher le total ds le dom
        totalPrice.textContent = calculPrice(product.price);
      })
    ).catch(error => console.log("erreur : " + error));
  // console.log(settingQuantityInput);
  // console.log(productQuantity);
});

// ............................................................
// changer quantité panier du localstorage

// reste les fonctions ajout supprimer avec le local et le post ensuite

function changeQuantityLocalStorage(quantity, _id, color) {
  const panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {

    if (canap.id == _id && canap.color == color) {
      canap.quantity = parseInt(quantity);
    }
  });
  localStorage.setItem('product', JSON.stringify(panier));
  location.reload();
}

function deleteItemStorage(id, color) {
  const panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {

    if (canap.id == id && canap.color == color) {
      console.log("coucou");
      panier.splice(panier.indexOf(canap), 1);
    }
  });
  localStorage.setItem('product', JSON.stringify(panier));
  location.reload();
}

// 2 fct calcul quantité total et prix total puis afficher au bonne endroits
// appel de fct a 3 endroits au refresh au change et au supprimer

// calculer quantité total
function calculQuantity() {
  var quantity = 0;
  var panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {
    // additionner les quantitées
    // parseint pour convertir en entier et addittionner au lieu de concatener !
    quantity += parseInt(canap.quantity);
    // console.log(quantity);
    // console.log(canap.quantity);
  });
  return quantity;
}

// calculer prix total
function calculPrice(price) {
  var priceTotal = 0;
  var panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {
    // additionner les prix
    priceTotal += parseInt(canap.quantity) * parseInt(price);
    // console.log(priceTotal);
    // console.log(canap.quantity);
  });
  return priceTotal;
}


// ............................................................ formulaire de contact

// prenom et nom
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
console.log(firstName.value);

// adress
var adress = document.getElementById('address');

// city
var city = document.getElementById('city');

// email
var email = document.getElementById('email');

// commander
var commander = document.getElementById('order');


// controler prenom pas un nombre et inferieur a 20 characteres
firstName.addEventListener('input', function () {
  if (firstName.value.length > 20 || firstName.value.length < 2 || isNaN(firstName.value)) {
    this.value = this.value.substring(0, 20);
  }
  if (isNaN(this.value)) {
    this.style.border = "2px solid green";
  } else {
    this.style.border = "3px solid red";
  }
});

lastName.addEventListener('input', function () {
  if (lastName.value.length > 20 || lastName.value.length < 2 || isNaN(lastName.value)) {
    this.value = this.value.substring(0, 20);
  }
  if (isNaN(this.value)) {
    this.style.border = "2px solid green";
  } else {
    this.style.border = "3px solid red";
  }
});

// controller si c est bien une adresse 
adress.addEventListener('input', function () {
  if (this.value.length > 50) {
    this.value = this.value.substring(0, 20);
  }
  if (this.value) {
    this.style.border = "2px solid green";

  } else {
    this.style.border = "3px solid red";
  }
});

// controller si c est bien une ville
city.addEventListener('input', function () {
  if (this.value.length > 20) {
    this.value = this.value.substring(0, 20);
  }
  if (isNaN(this.value)) {
    this.style.border = "2px solid green";
  } else {
    this.style.border = "3px solid red";
  }
});

// controller si c est bien un email
email.addEventListener('input', function () {
  if (this.value.length > 50 || this.value.length < 5 || this.value.indexOf('@') == -1 || this.value.indexOf('.') == -1) {
    this.value = this.value.substring(0, 50);
  }
  if (isNaN(this.value)) {
    this.style.border = "2px solid green";
  } else {
    this.style.border = "3px solid red";
  }
});

// methode post pour envoyer le formulaire de contact au serveur
commander.addEventListener('click', function (e) {
  e.preventDefault();
  var data = {
    firstName: firstName.value,
    lastName: lastName.value,
    adress: adress.value,
    city: city.value,
    email: email.value
  }
  console.log(data);
  fetch('http://localhost:3000/api/products/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(response => {
      console.log(response);
      if (response.message) {
        alert(response.message);
      } else {
        alert("votre commande a bien été prise en compte");
        location.reload();
      }
    })
    .catch(error => console.log("erreur : " + error));
}
);














