const url = 'http://localhost:3000/api/products/';

// recuperer le panier en tableau
var panier = JSON.parse(localStorage.getItem('product'));

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


  fetch(url + productId)
    .then(response => response.json()
      .then(data => {

        // product c est l api
        var product = data;

        // --------------------------------------------recuperer les donnees de l api------------------------------------------------------

        //recup le name de l api et push ds mon array vide declaré dans mon panier.foreach
        name.push(product.name);

        //recup le prix de l api et push ds mon array vide declaré dans mon panier.foreach
        price.push(product.price);

        //recup l image de l api et push ds mon array vide declaré dans mon panier.foreach
        imageUrl.push(product.imageUrl);

        //recup l alt de l api et push ds mon array vide declaré dans mon panier.foreach
        altTxt.push(product.altTxt);

        // --------------------------------------------afficher sur le dom------------------------------------------------------

        // prod recup info du dom
        var prod = document.getElementById('cart__items');

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

        settingQuantityInput.addEventListener('change', function () {
          var newQuantity = this.value;
          if (newQuantity > 100) {
            alert("Veuillez entrer une quantité inférieure à 100");
            return console.log(false);
          } else {
            changeQuantityLocalStorage(newQuantity, product._id, productColor);
          }
        })
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


        deleteItemP.addEventListener('click', function () {
          deleteItemStorage(product._id, productColor);
        })

        // --------------------------------------------afficher le total------------------------------------------------------

        // recup le total ds le dom
        var total = document.getElementById('totalQuantity');

        // afficher le total ds le dom
        total.textContent = calculQuantity();

        // --------------------------------------------afficher le prix total------------------------------------------------------

        // recup le total ds le dom
        var totalPrice = document.getElementById('totalPrice');

        // afficher le total ds le dom
        totalPrice.textContent = calculPrice(product.price);
      })
    ).catch(error => console.log("erreur : " + error));
});

// ............................................................
// changer quantité panier du localstorage

function changeQuantityLocalStorage(quantity, _id, color) {
  const panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {

    if (canap.id == _id && canap.color == color) {
      canap.quantity = parseInt(quantity);
      return true;
    } else {
      controlQuantity(canap.quantity);
    }

  });
  localStorage.setItem('product', JSON.stringify(panier));
  location.reload();
}



// supprimer la quantité du localstorage
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



//--------------------------------- calculer quantité total --------------------------------------------------
function calculQuantity() {
  var quantity = 0;
  var panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {
    // additionner les quantitées
    // parseint pour convertir en entier et addittionner au lieu de concatener !
    quantity += parseInt(canap.quantity);
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
  });

  return priceTotal;

}

// ............................................................ formulaire de contact

// prenom et nom
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');

// adress
var adress = document.getElementById('address');

// city
var city = document.getElementById('city');

// email
var email = document.getElementById('email');

// commander
var commander = document.getElementById('order');


// ecoute de l input 
firstName.addEventListener('change', function () {
  validFirstName(this);
});
// controler prenom
const validFirstName = (firstName) => {
  // creation de regex expression reguliere prenom
  var firstnameRegExp = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ -]+$/;
  let firstNameErrorMsg = firstName.nextElementSibling;

  if (firstName.value.length < 2 || firstName.value.length > 20 || !firstnameRegExp.test(firstName.value)) {
    firstNameErrorMsg.textContent = "Veuillez entrer un prenom valide !";
    firstNameErrorMsg.style.color = "red";
    firstName.style.border = "2px solid red";
  } else {
    firstName.style.border = "2px solid green";
    firstNameErrorMsg.style.color = "darkgreen";
    firstNameErrorMsg.textContent = "Le prenom est valide !";
    // return true pour la validation ligne 342
    return true;
  }
}

// ecoute de l input
lastName.addEventListener('change', function () {
  validLastName(this);
});
// controler le nom
const validLastName = (lastName) => {
  // creation de regex expression reguliere nom
  var lastnameRegExp = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ -]+$/;
  let lastNameErrorMsg = lastName.nextElementSibling;

  if (lastName.value.length < 2 || lastName.value.length > 20 || !lastnameRegExp.test(lastName.value)) {
    lastNameErrorMsg.textContent = "Veuillez entrer un nom valide !";
    lastNameErrorMsg.style.color = "red";
    lastName.style.border = "2px solid red";
  } else {
    lastNameErrorMsg.style.color = "darkgreen";
    lastNameErrorMsg.textContent = "Le nom est valide !";
    lastName.style.border = "2px solid green";
    return true;
  }
}

// ecoute de l input
adress.addEventListener('change', function () {
  validAdress(this);
});
// controller une adresse 
const validAdress = (adress) => {
  // creation de regex expression reguliere adresse
  var adressRegExp = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ -]+$/;
  let adressErrorMsg = adress.nextElementSibling;

  if (adress.value.length < 2 || adress.value.length > 20 || !adressRegExp.test(adress.value)) {
    adressErrorMsg.textContent = "Veuillez entrer une adresse valide";
    adressErrorMsg.style.color = "red";
    adress.style.border = "2px solid red";
  } else {
    adressErrorMsg.textContent = "Adresse valide !";
    adressErrorMsg.style.color = "darkgreen";
    adress.style.border = "2px solid green";
    return true;
  }
}

// ecoute de l input
city.addEventListener('change', function () {
  validCity(this);
});
// controller si c est bien une ville
const validCity = (city) => {
  // creation de regex expression reguliere ville
  var cityRegExp = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ -]+$/;
  let cityErrorMsg = city.nextElementSibling;

  if (city.value.length < 2 || city.value.length > 40 || !cityRegExp.test(city.value)) {
    cityErrorMsg.textContent = "Veuillez entrer une ville valide";
    cityErrorMsg.style.color = "red";
    city.style.border = "2px solid red";
  } else {
    cityErrorMsg.textContent = "La ville est valide !";
    cityErrorMsg.style.color = "darkgreen";
    city.style.border = "2px solid green";
    return true;
  }
}

// ecoute de l input
email.addEventListener('change', function () {
  validEmail(this);
});
// controller si c est bien un email
const validEmail = (email) => {
  // creation de regex expression reguliere email
  var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$/;
  let emailErrorMsg = email.nextElementSibling;

  if (email.value.length < 2 || email.value.length > 40 || !emailRegExp.test(email.value)) {
    emailErrorMsg.textContent = "Veuillez entrer une adresse email valide";
    emailErrorMsg.style.color = "red";
    email.style.border = "2px solid red";
  } else {
    emailErrorMsg.textContent = "Adresse email valide !";
    emailErrorMsg.style.color = "darkgreen";
    email.style.border = "2px solid green";
    return true;
  }
}

// methode post pour envoyer le formulaire de contact au serveur
commander.addEventListener('click', function (e) {
  var products = [];
  var okToSend = true;
  var panier = JSON.parse(localStorage.getItem('product'));
  var inputs = document.querySelectorAll('.itemQuantity');

  // verification de la validite des inputs inferieurs a 100
  for (const elem of inputs) {
    if (elem.value > 100) {
      okToSend = false;
    }
    panier.forEach(canap => {
      products.push(canap.id);
    });
    e.preventDefault();


    // passe le fetch dans le if de controle des champs formulaire a true
    if (validFirstName(firstName) && validLastName(lastName) && validAdress(adress) && validCity(city) && okToSend) {
      // alert(okToSend);
      var contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: adress.value,
        city: city.value,
        email: email.value,

      }
      var data = {
        contact, products
      }

      // fetch api et methode post pour envoyer le formulaire de contact au serveur et recuperer numero de commande
      fetch('http://localhost:3000/api/products/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json()).then(data => {

        // afficher le numero de commande
        var orderNumber = document.getElementById('order');
        orderNumber.appendChild(document.createTextNode(data.orderNumber));
        // afficher le message de confirmation


        // // renvoyer sur page confirmation
        window.location.href = "confirmation.html?orderId=" + data.orderId;
      });
    }
    else {
      return alert('Veuillez corriger ou remplir les champs du formulaire et/ou verifier que votre quantité est inférieure à 100');
    }
  }
});
















