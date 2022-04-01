// recuperer localstorage et api
// ajouter un produit au panier
// supprimer un produit du panier
// modifier la quantité d'un produit du panier
// afficher le panier
// afficher le prix total du panier
// afficher le nombre de produit dans le panier

const url = 'http://localhost:3000/api/products/';
// recuperer le tableau dans le local storage
var addProduit = JSON.parse(localStorage.getItem('product'));
// console.log(addProduit);

console.log(url);
console.log(addProduit);

function produit() {
  fetch(url + addProduit[1].id)
    .then(response => response.json()
      .then(data => {

        var product = data
        console.log(product);
      })
    ).catch(error => console.log("erreur : " + error));
}
produit();



// const url = 'http://localhost:3000/api/products/';

// // // recuperer le tableau dans le local storage
// var addProduit = JSON.parse(localStorage.getItem('product'));
// console.log(addProduit);
// var apiStotrage = [];



// function items() {
//   fetch(url)
//     .then(response => response.json()
//       .then(data => {
//         console.log('data:', data);
//         apiStotrage = data;
//         var afficher = document.getElementById('cart__items');
//         console.log(apiStotrage);

//         var title = document.createElement('h1');
//         title.textContent = apiStotrage.name;

//         afficher.appendChild(title);



//         console.log(afficher);
//       })
//     ).catch(error => alert("Erreur : " + error));
// }
// items();
// apiStotrage.push(addProduit);





