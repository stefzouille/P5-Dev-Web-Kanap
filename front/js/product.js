// recup urlsearchparams page produit
const url = 'http://localhost:3000/api/products/';

var searchParams = new URLSearchParams(window.location.search);

// si le params id existe ds l url 
if (searchParams.has('id')) {
  // aller rechercher la valeur de l attribut id ds l url avec la methode get
  var productId = searchParams.get('id');

  // si il existe pas renvoie vers la page d accueil
} else {
  window.location.href = './index.html';
}


function produit() {
  fetch(url + productId)
    .then(response => response.json()
      .then(data => {

        var product = data
        console.log(product);
        // image et text alt du produit
        var images = document.createElement('img');
        images.setAttribute('src', product.imageUrl);
        images.setAttribute('alt', product.altTxt);
        var contenairImg = document.querySelector('.item__img');
        contenairImg.appendChild(images);

        // nom du produit
        var title = document.createElement('h1');
        title.textContent = product.name;
        var contenairTitle = document.querySelector('#title');
        contenairTitle.appendChild(title);

        //indication du prix
        var price = document.createElement('span');
        price.textContent = product.price;
        var contenairPrice = document.querySelector('#price');
        contenairPrice.appendChild(price);

        // description du produit
        var description = document.createElement('p');
        description.textContent = product.description;
        var contenairDescription = document.querySelector('#description');
        contenairDescription.appendChild(description);

        // option choix de couleur
        var select = document.getElementById('colors');

        product.colors.forEach(function (color) {
          var selectOption = document.createElement('option');
          //injecter la fonction dans le select
          selectOption.textContent = `${color}`;
          selectOption.value = `${color}`;
          select.appendChild(selectOption);
        });
        addBasket(product);
      })
    ).catch(error => console.log("erreur : " + error));
}
produit();

// ajouter le produit dans le local storage
// et appel de la fct addBasket dans la fct produit
const addBasket = () => {

  var button = document.querySelector('.item__content__addButton');
  button.addEventListener('click', function () {
    var productArray = JSON.parse(localStorage.getItem('product'));
    var select = document.getElementById('colors');
    var color = select.options[select.selectedIndex].value;
    var numberQuantity = document.getElementById('quantity').value;

    // console.log(color);
    // console.log(numberQuantity);
    // controle des champs utilisateur color et quantité
    if (color == '' && numberQuantity == 0) {
      return alert("veuillez saisir une quantité et une couleur")
    } else if (color == '') {
      return alert("veuillez saisir une couleur")
    } else if (numberQuantity == 0) {
      return alert("veuillez saisir une quantité")
    } else {
      return selectValue(color, numberQuantity);
    }

    // verifier si il y a deja un produit dans le local storage
    function selectValue() {
      if (productArray === null) {
        // si il est null alors c est unt tableau vide
        productArray = [];
      }
      var sameCanap = false
      productArray.forEach(canape => {
        if (canape.id == productId && canape.color == color) {
          sameCanap = true
          canape.quantity = parseInt(canape.quantity) + parseInt(numberQuantity)
        }
      });
      //controle si canape existe deja  dans le local storage
      if (sameCanap == false) {
        productArray.push({
          id: productId,
          color: color,
          quantity: numberQuantity,
        });
      }
      localStorage.setItem('product', JSON.stringify(productArray));
    }
  });
};
