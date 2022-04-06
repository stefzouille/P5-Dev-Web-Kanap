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
  let color = [];
  let quantity = [];
  let total = [];


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
        console.log(product);


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
        settingQuantity.textContent = "Qté :";

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
        var deleteItemP = document.createElement('P');
        deleteItemP.textContent = "Supprimer";
        deleteItem.appendChild(deleteItemP);
        article.appendChild(deleteItem);

        article.appendChild(settings);



        // changer quantite
        settingQuantityInput.addEventListener('change', function (e) {

          // itemQuantity.addEventListener('change', function (e) {
          var itemQuantity = e.target;
          var itemQuantityValue = itemQuantity.value;
          changeQuantityLocalStorage(itemQuantityValue, _id, color);
        });


      })
    ).catch(error => console.log("erreur : " + error));
}
)
// reste les fonctions ajout supprimer avec le local et le post ensuite

function changeQuantityLocalStorage(quantity, _id, color) {
  const panier = JSON.parse(localStorage.getItem('product'));
  panier.forEach(canap => {
    if (canap.id == _id && canap.color == color && canap.quantity == quantity) {
      canap.quantity = parseInt(quantity);

    }
  });
  localStorage.setItem('product', JSON.stringify(panier));
  console.log(panier);
  //   // sameCanap = true
  //   canap.quantity = parseInt(canap.quantity) + parseInt(numberQuantity)

  // }

  // });

}
