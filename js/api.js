const URL_BASE = "http://localhost:3001"

const api = {
    async buscarPets() {
        try {
            const response = await axios.get(`${URL_BASE}/pets`)
            return await response.data
        } catch (error) {
            alert('Erro ao buscar Pets')
            throw error
        }
    },
    async salvarPet(pet) {
        try {
            const response = await axios.post(`${URL_BASE}/pets`, pet)
            return await response.data
        } catch (error) {
            alert(`Erro ${error.message}`)
            throw error
        }
    },
    
    async buscarPetPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pets/${id}`)
            return await response.data
        } catch {
            alert("Erro ao buscar pet")
            throw error
        }
    },

    async editarPet(pet) {
        try {
            const response = await axios.put(`${URL_BASE}/pets/${pet.id}`, pet)
            return await response.data
        } 
        catch {
            alert("Erro ao editar pet")
            throw error
        }
    },

    async excluirPet(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pets/${id}`)
        } 
        catch {
            alert("Erro ao excluir pet")
            throw error
        }
    },

    async buscarPetPorTermo(termo) {
        try {
            const pets = await this.buscarPets()
            const termoEmMinusculas = termo.toLowerCase()
    
            const petsFiltrados = pets.filter(pet => {
                return(pet.nome.toLowerCase().includes(termoEmMinusculas) || pet.especie.toLowerCase().includes(termoEmMinusculas) || pet.raca.toLowerCase().includes(termoEmMinusculas))
            })
            return petsFiltrados
        } catch (error) {
            alert("Erro ao buscar Pet")
            throw error
        }
    }
}

export default api;