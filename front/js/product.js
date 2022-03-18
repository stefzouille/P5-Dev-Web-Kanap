

const url = 'http://localhost:3000/api/products';

// recuperer les données de l api
function produit() {
  fetch(url)
    .then(response => response.json()
      .then(data => {
        console.log('data:', data);

        var baliseProduits = document.getElementById('items');
        console.log(baliseProduits);

        for (let product of data) {

          var objet = document.createElement('section');

          var img = document.createElement('img');
          img.setAttribute('src', product.imageUrl);
          img.setAttribute('alt', product.altTxt);
          img.textContent = product.imageUrl;
          baliseProduits.appendChild(img);

          // baliseProduits.appendChild(img)
          console.log(img);
        }
      })
    ).catch(error => alert("Erreur : " + error));
}

produit();

