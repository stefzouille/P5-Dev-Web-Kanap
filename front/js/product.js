// recup urlsearchparams page produit

console.log(window.location);
// nouvelle objet de type urlsearchparams et ds ce constructeur on recupere la chaine de charactere a manipuler
var searchParams = new URLSearchParams(window.location.search);

// search a des methode pour manip les characteres
// methode has pour verifier ds le params si existe ds l url un params nommé id

console.log(searchParams.has('id')); // return true 

// si le params id existe ds l url 
if (searchParams.has('id')) {
  // aller rechercher la valeur de l attribut id ds l url avec la methode get
  var ProductId = searchParams.get('id');
  console.log(ProductId);

  // si il existe pas renvoie vers la page d accueil
} else {
  window.location.href = './index.html';
}
function produit() {
  fetch(searchParams)
    .then(response => response.json()
      .then(data => {
        console.log('data:', data);

        // var Produits = document.getElementById('items');
        // console.log(Produits);
      })
    ).catch(error => alert("Erreur : " + error));
}

// produit();


// recuperer les données de l api

//         for (let product of data) {

//           var objet = document.createElement('section');

//           var img = document.createElement('img');
//           img.setAttribute('src', product.imageUrl);
//           img.setAttribute('alt', product.altTxt);
//           img.textContent = product.imageUrl;
//           // baliseProduits.appendChild(img);

//           // baliseProduits.appendChild(img)
//           console.log(img);
//         }
//       })
//     ).catch(error => alert("Erreur : " + error));
// }

// produit();

