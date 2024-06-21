

var info_str =new Uint8Array([10,32,32,32,32,32,32,32,32,89,111,117,32,99,97,110,32,100,105,114,101,99,116,108,121,32,114,101,97,99,104,32,111,117,116,32,116,111,32,109,101,32,118,105,97,32,97,110,121,32,111,102,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,10,32,32,32,32,32,32,32,32,60,98,114,62,10,32,32,32,32,32,32,32,32,100,105,115,99,111,114,100,32,110,97,109,101,32,45,32,32,60,115,112,97,110,32,115,116,121,108,101,61,34,99,111,108,111,114,58,114,101,100,34,62,114,111,115,109,97,110,111,122,105,108,108,60,47,115,112,97,110,62,60,98,114,62,10,32,32,32,32,32,32,32,32,101,109,97,105,108,32,45,32,60,115,112,97,110,32,115,116,121,108,101,61,34,99,111,108,111,114,58,114,101,100,34,62,97,107,114,105,97,57,50,51,49,64,112,114,111,116,111,110,46,109,101,60,47,115,112,97,110,62,10,32,32,32,32,32,32,32,32,60,98,114,62,10,32,32,32,32,32,32,32,32,99,111,110,116,97,99,116,115,32,97,110,121,116,105,109,101,46,10,32,32,32,32]);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  var content = document.querySelector('.modal-content p');
  const decorder = new TextDecoder();
  content.innerHTML =decorder.decode(info_str);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}