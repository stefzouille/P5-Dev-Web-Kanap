// recup du parametre orderId dans lurl

var searchParams = new URLSearchParams(window.location.search);

// console.log(searchParams.getAll('orderId'));

// afficher l orderId en remplaçant le contenu du span id="orderId"
var orderId = document.querySelector('#orderId');
orderId.textContent = searchParams.getAll('orderId');





























