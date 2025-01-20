const api = {
    async buscarPets() {
        try {
            const response = await fetch('http://localhost:3001/pets')
            return await response.json()
        } catch (error) {
            alert('Erro ao buscar Pets')
            throw error
        }
    },
    async salvarPet(pet) {
        try {
            const response = await fetch('http://localhost:3001/pets', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pet),
            })
            return await response.json()
        } catch (error) {
            alert(`Erro ${error.message}`)
            throw error
        }
    },
    
    async buscarPetPorId(id) {
        try {
            const response = await fetch(`http://localhost:3001/pets/${id}`)
            return await response.json()
        } catch {
            alert("Erro ao buscar pet")
            throw error
        }
    },

    async editarPet(pet) {
        try {
            const response = await fetch(`http://localhost:3001/pets/${pet.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify(pet)
            })
            return await response.json()
        } 
        catch {
            alert("Erro ao editar pet")
            throw error
        }
    },

    async excluirPet(id) {
        try {
            const response = await fetch(`http://localhost:3001/pets/${id}`, {
            method: "DELETE",
            })
        } 
        catch {
            alert("Erro ao excluir pet")
            throw error
        }
    },
}

export default api;