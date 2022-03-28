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

        console.log(product);

        // image et text alt du produit
        var images = document.createElement('img');
        images.setAttribute('src', product.imageUrl);
        images.setAttribute('alt', product.altTxt);
        var contenairImg = document.querySelector('.item__img');
        contenairImg.appendChild(images);

        // nom du produit
        var title = document.createElement('h1');
        title.textContent = product.name;
        var contenairTitle = document.querySelector('#title');
        contenairTitle.appendChild(title);

        //indication du prix
        var price = document.createElement('span');
        price.textContent = product.price;
        var contenairPrice = document.querySelector('#price');
        contenairPrice.appendChild(price);

        // description du produit
        var description = document.createElement('p');
        description.textContent = product.description;
        var contenairDescription = document.querySelector('#description');
        contenairDescription.appendChild(description);


        var select = document.getElementById('colors');
        console.log(product.colors);

        product.colors.forEach(function (color) {

          var tagOption = document.createElement('option');

          //injecter la fonction dans le select
          tagOption.textContent = `${color}`;
          tagOption.value = `${color}`;

          select.appendChild(tagOption);

          console.log(tagOption);
          console.log(color);
        });
      })
    ).catch(error => console.log("erreur : " + error));
}
produit();