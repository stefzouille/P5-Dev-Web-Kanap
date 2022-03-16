// // 1 - afficher les produits sur la page d accueil

const url = 'http://localhost:3000/api/products';

// recuperer les données de l api
function items() {
  fetch(url)
    .then(response => response.json()
      .then(data => {
        console.log('data:', data);

        var baliseItems = document.getElementById('items');

        for (let product of data) {
          //objet product creer les el html et mettre les info dedans
          //create el appenchild et set attribute

          var objet = document.createElement('article');

          // creer create element puis setattribut puis text content puis appendchild



        }
      })
    ).catch(error => alert("Erreur : " + error));
}

items();








