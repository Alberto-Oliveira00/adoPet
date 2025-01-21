import ui from "./ui.js"
import api from "./api.js"

const regexConteudo = /^[A-Za-z\s]{2,}$/

function validarConteudo(nome, especie, raca) {
  return regexConteudo.test(nome, especie, raca)
}

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPets();

    const formularioPet = document.getElementById("form-cadastro-pet")
    const inputBusca = document.getElementById("campo-busca")

    formularioPet.addEventListener("submit", manipularSubmissaoFormulario)
    inputBusca.addEventListener("input", manipularBusca)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pet-id").value;
    const nome = document.getElementById("pet-nome").value;
    const especie = document.getElementById("pet-especie").value;
    const raca = document.getElementById("pet-raca").value;

    if(!validarConteudo(nome, especie, raca)){ 
      alert("É permitido apenas a inclusão de letras espaços e no mínimo 2 caracteres.")
      return
    }
  
    try {
      if (id) {
      await api.editarPet({ id, nome, especie, raca });
      } else {
        await api.salvarPet({ nome, especie, raca });
      }
      ui.renderizarPets();
    } catch (error) {
      console.error("Erro ao salvar pet:", error);
      alert("Erro ao salvar pet.");
    }
  }
  async function manipularBusca() {
    const termoBusca = document.getElementById("campo-busca").value
    try {
        const petsFiltrados = await api.buscarPetPorTermo(termoBusca)
        ui.renderizarPets(petsFiltrados)
    } catch (error) {
        alert("Erro ao realizar busca")
    }
  }