//se especifica tipo de datos a transferir
function drag(event) {
  /*console.log(ev.target.src);*/
  event.dataTransfer.setData('text', event.target.id);
}


function permitirDrop(ev){
  ev.preventDefault();
}


function drop(ev) {
  ev.preventDefault();
  var id_photos = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_photos));
}
