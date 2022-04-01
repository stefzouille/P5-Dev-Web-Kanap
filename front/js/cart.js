const url = 'http://localhost:3000/api/products/';

// // recuperer le tableau dans le local storage
var addProduit = JSON.parse(localStorage.getItem('product'));
console.log(addProduit);
var apiStotrage = [];



function items() {
  fetch(url)
    .then(response => response.json()
      .then(data => {
        console.log('data:', data);
        apiStotrage = data;
      })
    ).catch(error => alert("Erreur : " + error));
}
items();
apiStotrage.push(addProduit);


console.log(apiStotrage);

