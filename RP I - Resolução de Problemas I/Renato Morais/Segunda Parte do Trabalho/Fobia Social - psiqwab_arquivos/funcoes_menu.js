// JavaScript Document
function dentro(celula, cor){
	while(celula.tagName!="TD")
		celula = celula.parentElement;

	celula.style.cursor = 'hand';
	celula.style.backgroundColor = cor;
}

function fora(celula, cor){
	while(celula.tagName!="TD")
		celula = celula.parentElement;

	celula.style.cursor = 'hand';
	celula.style.backgroundColor = cor;
}

function clicar(celula) {
	celula.children.tags('A')[0].click();
}

function mostra_hint(texto){
	document.all.hint.innerHTML = texto;
}

function esconde_hint(){
	document.all.hint.innerHTML = '';
}

function troca_imagem(imagem, objeto){
	objeto.src = imagem;
}
