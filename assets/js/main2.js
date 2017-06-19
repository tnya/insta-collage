//se especifica tipo de datos a transferir
function drag(event) {
  console.log(event.target.src);
  event.dataTransfer.setData('text', event.target.id);
}


function permitirDrop(event){
  event.preventDefault();
}

function drop(ev) {
  event.preventDefault();
  var photo_id = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(photo_id));
}

