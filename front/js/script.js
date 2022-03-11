// 1 - afficher les produits sur la page d accueil

const items = document.getElementById('items');

fetch("../../back/controllers/products.js")
  .then(Response => Response.json())
  .then(data => {

  })

class canape {
  constructor(id, nom, prix, img, description, stock) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.img = img;
    this.description = description;
    this.stock = stock;
  }
}
function name(params) {

  console.log('merdoum' + " " + params);

}

//chercher dans l api les produits
let canap1 = new canape(fetch("../api/canape/1"));
let canap = new canape(1, "canape", "20", "img/canape.jpg", "canape", "10");
let canap2 = new canape(2, "canape2", "20", "img/canape2.jpg", "canape2", "10");
let canap3 = new canape(3, "canape3", "20", "img/canape3.jpg", "canape3", "10");
let canap4 = new canape(4, "canape4", "20", "img/canape4.jpg", "canape4", "10");

console.log(canap1);
console.log(canap2);
console.log(items);
name('test');