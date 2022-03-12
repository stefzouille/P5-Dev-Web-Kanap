// // 1 - afficher les produits sur la page d accueil

const items = document.getElementById('items');

let api = fetch('http://localhost:3000/api/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
    return data;
  });
console.log(api);
console.log();

// let data = [];
// for (const elem of data) {
//   array.push(elem) = api;
// }
// console.log(api);


class canape {
  constructor(colors, _id, name, price, imageUrl, description, altTxt) {
    this.colors = colors;
    this.id = _id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.altTxt = altTxt;
  }
}


// //chercher dans l api les produits
// let canap1 = new canape(api.colors, api._id, api.name, api.price, api.imageUrl, api.description, api.altTxt);
// let canap = new canape(1, "canape", "20", "img/canape.jpg", "canape", "10");
// let canap2 = new canape(2, "canape2", "20", "img/canape2.jpg", "canape2", "10");
// let canap3 = new canape(3, "canape3", "20", "img/canape3.jpg", "canape3", "10");
// let canap4 = new canape(4, "canape4", "20", "img/canape4.jpg", "canape4", "10");

// console.log(canap1);




