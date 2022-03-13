// // 1 - afficher les produits sur la page d accueil




// const promiseGetProduct = new Promise((resolve, reject) => {
//   if (PRODUCT !== 'undefine') {
//     resolve(PRODUCT);
//   } else {
//     reject('Accés aux produits impossible !');
//   }
// })

const url = 'http://localhost:3000/api/products';

document.querySelector("#nom-de l id de la page html")

// recuperer les données de l api
fetch(url)
  .then(response => response.json()
    .then(data => {
      console.log(data);
      let affichage = '<ol>';
      for (let product of data) {
        //recup des paires clé valeurs de l api
        affichage += `<li> nom : ${product.name}  - description : ${product.description}</li>`;
      }
      affichage += '</ul>';
      // affiche sur la page html avec l id de la balise div
      document.querySelector('#items').innerHTML = affichage;
    })
  ).catch(err => console.log("Erreur : " + err));





// class canape {
//   constructor(colors, _id, name, price, imageUrl, description, altTxt) {
//     this.colors = colors;
//     this.id = _id;
//     this.name = name;
//     this.price = price;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.altTxt = altTxt;
//   }
// }







