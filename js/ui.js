import api from "./api.js"

const ui = {
    async preencherFormulario(petId){
        const pet = await api.buscarPetPorId(petId)
        document.getElementById("pet-id").value = pet.id
        document.getElementById("pet-nome").value = pet.nome
        document.getElementById("pet-especie").value = pet.especie
        document.getElementById("pet-raca").value = pet.raca
     },

    async renderizarPets() {
        const listaPets = document.getElementById("lista-pets")
        listaPets.innerHTML = "";

        try {
            const pets = await api.buscarPets()
            pets.forEach(ui.adicionarPetNaLista)
        } catch (error) {
            console.error("Erro ao obter pets:", error);
            alert("Erro ao obter pets. Tente novamente mais tarde.");
        }
    },

    adicionarPetNaLista(pet) {
        const listaPets = document.getElementById("lista-pets")
        const li = document.createElement("li")
        li.setAttribute("pet-id", pet.id)
        li.classList.add("li-pet")

        const nomePet = document.createElement("div")
        nomePet.textContent = `Nome: ${pet.nome}`;
        nomePet.classList.add("pet-nome");

        const especiePet = document.createElement("div");
        especiePet.textContent = `Especie: ${pet.especie}`;
        especiePet.classList.add("pet-especie");

        const racaPet = document.createElement("div");
        racaPet.textContent = `Raça: ${pet.raca}`;
        racaPet.classList.add("pet-raca");

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao-editar")
        botaoEditar.onclick = () => ui.preencherFormulario(pet.id)

        const iconeEditar = document.createElement("img")
        iconeEditar.src = "assets/imagens/icone-editar.png"
        iconeEditar.alt = "Editar"
        botaoEditar.appendChild(iconeEditar)

        const icones = document.createElement("div")
        icones.classList.add("icones")
        icones.appendChild(botaoEditar)

        li.appendChild(nomePet);
        li.appendChild(especiePet);
        li.appendChild(racaPet);
        li.appendChild(icones)
        listaPets.appendChild(li);
    }
}

export default ui;