// recup du parametre orderId dans lurl

var searchParams = new URLSearchParams(window.location.search);

// console.log(searchParams.getAll('orderId'));

// afficher l orderId en remplacement du span
var orderId = document.querySelector('#orderId');
orderId.textContent = searchParams.getAll('orderId');





























