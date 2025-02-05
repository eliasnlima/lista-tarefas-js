function adicionaTarefa() {

	let mensagem = document.getElementById("texto")

	let tarefa = document.getElementById("tarefa").value.trim();

	if (tarefa == "") {
		mensagem.style.color = "red"
		mensagem.textContent = "Campo vazio, escreva a tarefa que deseja adicionar!"
	}
	else {

	let addNovaTarefa = document.createElement("li");

	document.getElementById("lista").appendChild(addNovaTarefa).textContent = tarefa;
	addNovaTarefa.id ="linhaTarefa"
	document.getElementById("tarefa").value = ""

	mensagem.style.color = "#28a745"
	mensagem.textContent = "Clique na tarefa para marca-la como feita!"

	let tarefaFeita = document.querySelectorAll("#linhaTarefa");

		tarefaFeita.forEach((tarefa) => {
		tarefa.addEventListener("click", () => {
		tarefa.style.textDecoration = "line-through";
		tarefa.style.textDecorationColor = "red"
	})


})
}

}

function excluiTarefa() {

	document.getElementById("texto").textContent = "Escolha uma tarefa para excluir!"
	
	let linhaTarefa = document.querySelectorAll("#linhaTarefa");

	linhaTarefa.forEach((linha) => {

     linha.addEventListener("click", () => {
		linha.remove();


})

	
	})
}

