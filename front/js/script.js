// // 1 - afficher les produits sur la page d accueil

const url = 'http://localhost:3000/api/products';

// recuperer les données de l api
function items() {
  fetch(url)
    .then(response => response.json()
      .then(data => {
        var baliseItems = document.getElementById('items');

        for (let product of data) {
          //objet product creer les el html et mettre les info dedans
          //create el appenchild et set attribute

          var objet = document.createElement('article');

          // creer create element puis setattribut puis text content puis appendchild

          //créer element a
          var baliseA = document.createElement('a')
          //créer attribut href de l element a et lui passe le parametre product du tableau
          baliseA.setAttribute('href', './product.html?id=' + product._id);
          //  récupère le contenu de tous les éléments (de objet)
          // baliseA.textContent = product._id;
          //place/créer objet en tant qu'enfant de la baliseA
          baliseA.appendChild(objet);

          var baliseImg = document.createElement('img');
          baliseImg.setAttribute('src', product.imageUrl);
          baliseImg.setAttribute('alt', product.altTxt);
          objet.appendChild(baliseImg);

          var baliseH3 = document.createElement('h3');
          baliseH3.setAttribute('class', 'productName');
          //  récupère le contenu de tous les éléments (de objet)
          baliseH3.textContent = product.name;
          objet.appendChild(baliseH3);

          var baliseP = document.createElement('p');
          baliseP.setAttribute('class', 'productDescription');
          baliseP.textContent = product.description;
          objet.appendChild((baliseP));

          baliseItems.appendChild(baliseA);
        }
      })
    ).catch(error => alert("Erreur : " + error));
}
items();










