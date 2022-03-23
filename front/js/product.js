// recup urlsearchparams page produit
const url = 'http://localhost:3000/api/products/';

var searchParams = new URLSearchParams(window.location.search);

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

        var objetProduits = document.querySelector('.item');

        var product = data
        // var objet = document.createElement('article');

        console.log(product);

        var images = document.createElement('img');
        images.setAttribute('src', product.imageUrl);
        images.setAttribute('alt', product.altTxt);
        var contenairImg = document.querySelector('.item__img');
        contenairImg.appendChild(images);

        var title = document.createElement('h1');
        // title.setAttribute('id', product.name);
        title.textContent = product.name;
        var contenairTitle = document.querySelector('#title');
        contenairTitle.appendChild(title);

        var price = document.createElement('span');
        price.textContent = product.price;
        var contenairPrice = document.querySelector('#price');
        contenairPrice.appendChild(price);


        var description = document.createElement('p');
        description.textContent = product.description;
        var contenairDescription = document.querySelector('#description');
        contenairDescription.appendChild(description);

        // selection de la couleur
        var color = document.createElement('option');
        color.textContent = product.color;
        var contenairColor = document.querySelector('#color');
        contenairColor.appendChild(color);

        // contenairColor.appendChild(value);
        console.log(contenairColor);






        // console.log(title);
        // console.log(objetProduits);


      })
    ).catch(error => alert("Erreur : " + error));
}

produit();