function drag(event){
	event.dataTransfer.setData("text", event.target.id); /* setData le digo q tipo soy */ /*text pq los navegadores leen las imagenes como tipo texto */
	/* sabe q el drag esta dentro de un id, ese es el objetivo para agarrar (formato, el objetivo) nuestro target es el objetivo*/
	/* sabe que id usar pq tiene un drag*/

}

function finalDrop(hijo){
	hijo.preventDefault();/*SIEMPRE va esto para que el navegador no lo manipule*/
}

function drop(event){
	event.preventDefault();

	var dato=event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(dato)); 
}