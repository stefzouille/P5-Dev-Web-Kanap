// recuperer le tableau dans le local storage
var productInLocalStorage = JSON.parse(localStorage.getItem('product'));
console.log(productInLocalStorage);
const url = 'http://localhost:3000/api/products';

// affichage des produits du panier
// injecter le code dans une class

const ajoutPanier = document.querySelector('.cart__items');
console.log(ajoutPanier);

// test si le panier est vide
function isEmpty() {

  if (productInLocalStorage == null) {
    const productStorage = [];
    console.log("vide");


    // --------------------- alert a remettre apres !! ----------------------
    // alert("Le panier est vide");
    // ajoutPanier.textContent = "Le panier est vide";

  } else {
    console.log("pas vide");
    for (let i = 0; i < productInLocalStorage.length; i++) {
      const productStorage = productInLocalStorage[i];
      console.log(productStorage);



    }

  }

}
isEmpty();
// recuperer les données de l api
function items() {
  fetch(url)
    .then(response => response.json()
      .then(data => {
        console.log('data:', data);

        var baliseItems = document.getElementById('items');


        for (let product of data) {


        }

      })
    ).catch(error => alert("Erreur : " + error));

}
items();
class canapePanier {
  constructor(id, name, price, imageUrl, altTxt) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.altTxt = altTxt;
  }
}
let productInStorage = new canapePanier(JSON.parse(localStorage.getItem('product')));
console.log(productInStorage);
let productApi = new canapePanier(items());

console.log(productApi);






