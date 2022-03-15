// // 1 - afficher les produits sur la page d accueil

const url = 'http://localhost:3000/api/products';

// recuperer les données de l api
function items() {
  fetch(url)
    .then(response => response.json()
      .then(data => {
        console.log('data:', data);
        let affichage = '<ul>';

        for (let product of data) {
          //recup des paires clé valeurs de l api
          affichage += `<li> nom : ${product.name} </li>`;
        }
        affichage += '</ul>';
        console.log(affichage);
        // affiche sur la page html avec l id de la balise div
        document
          // .getElementById("items")
          .getElementsByTagName('h3')[0]
          .innerHTML = affichage;
      })
    ).catch(error => alert("Erreur : " + error));
}

items();

// document
//   .getElementById("items")
//   .addEventListener("change", items());


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







