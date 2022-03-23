// recup urlsearchparams page produit
const url = 'http://localhost:3000/api/products/';
// nouvelle objet de type urlsearchparams et ds ce constructeur on recupere la chaine de charactere a manipuler
// console.log(window.location);
var searchParams = new URLSearchParams(window.location.search);

// search a des methode pour manip les characteres
// methode has pour verifier ds le params si existe ds l url un params nommé id

// console.log(searchParams.has('id')); // return true 

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
        // console.log('data:', data);

        // var objetProduits = document.getElementsByClassName('item');
        var baliseItem = document.querySelector('.item');
        // console.log(baliseItem);
        let product = data
        //objet product creer les el html et mettre les info dedans
        //create el appenchild et set attribute

        var objet = document.createElement('article');

        // creer create element puis setattribut puis text content puis appendchild

        //créer element a
        var baliseSection = document.createElement('section')
        baliseSection.setAttribute('href', './product.html?id=' + product._id);
        baliseSection.textContent = product._id;
        baliseSection.appendChild(objet);
        console.log(baliseSection);

        var baliseImg = document.createElement('img');
        baliseImg.setAttribute('item__img', product.imageUrl);

        baliseImg.setAttribute('alt', product.altTxt);
        objet.appendChild(baliseImg);

        var baliseH1 = document.createElement('h1');
        baliseH1.setAttribute('id', 'title');
        //  récupère le contenu de tous les éléments (de objet)
        baliseH1.textContent = product.name;
        objet.appendChild(baliseH1);

        var baliseDescription = document.createElement('p');
        baliseDescription.setAttribute('class', 'item__content__description__title');
        baliseDescription.textContent = product.description;
        objet.appendChild((baliseDescription));

        baliseItem.appendChild(baliseSection);

      })
    ).catch(error => alert("Erreur : " + error));
}

produit();


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

