// // 1 - afficher les produits sur la page d accueil

const url = 'http://localhost:3000/api/products';

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
  ).catch(error => console.log("Erreur : " + error));





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







