/*Modals*/

/*Edificio*/

var modalEdificio = document.getElementById("modal-edificio");

// Get the button that opens the modal
var btnEdificio = document.getElementsByClassName("edificio-img")[0];

// Get the <span> element that closes the modal
var spanEdificio = document.getElementsByClassName("close-edificio")[0];

// When the user clicks on the button, open the modal
btnEdificio.onclick = function() {
  modalEdificio.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanEdificio.onclick = function() {
  modalEdificio.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEdificio) {
    modalEdificio.style.display = "none";
  }
} 

/*5A*/

var modalDepto5a = document.getElementById("modal-5a");

// Get the button that opens the modal
var btnDepto5a = document.getElementsByClassName("5a-img")[0];

// Get the <span> element that closes the modal
var spanDepto5a = document.getElementsByClassName("close-5a")[0];

// When the user clicks on the button, open the modal
btnDepto5a.onclick = function() {
  modalDepto5a.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDepto5a.onclick = function() {
  modalDepto5a.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDepto5a) {
    modalDepto5a.style.display = "none";
  }
} 

/*3A*/

var modalDepto3a = document.getElementById("modal-3a");

// Get the button that opens the modal
var btnDepto3a = document.getElementsByClassName("3a-img")[0];

// Get the <span> element that closes the modal
var spanDepto3a = document.getElementsByClassName("close-3a")[0];

// When the user clicks on the button, open the modal
btnDepto3a.onclick = function() {
  modalDepto3a.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDepto3a.onclick = function() {
  modalDepto3a.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDepto3a) {
    modalDepto3a.style.display = "none";
  }
} 

/*3B*/

var modalDepto3b = document.getElementById("modal-3b");

// Get the button that opens the modal
var btnDepto3b = document.getElementsByClassName("3b-img")[0];

// Get the <span> element that closes the modal
var spanDepto3b = document.getElementsByClassName("close-3b")[0];

// When the user clicks on the button, open the modal
btnDepto3b.onclick = function() {
  modalDepto3b.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDepto3b.onclick = function() {
  modalDepto3b.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDepto3b) {
    modalDepto3b.style.display = "none";
  }
} 
