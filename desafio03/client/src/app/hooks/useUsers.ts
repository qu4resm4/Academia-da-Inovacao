'use client';
import { CreateUser }from  '../components/templates/form'

export default function useUsers() {
    const URL = 'http://localhost:4000/users';

    // Fetch para obter a lista de usuários
    const fetchUsers = async () => {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`Error fetching users: ${response.statusText}`);
            }
            const data = await response.json();
            return { data };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    const fetchCurrentUser = async (id: string) => {
        try {
            if (!id) {
                throw new Error("ID do usuário não fornecido.");
            }

            // Faz a requisição para buscar o usuário atual
            const response = await fetch(`${URL}/${id}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`Erro ao buscar o usuário: ${response.statusText}`);
            }

            const data = await response.json();
            return { data };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    // Função para criar um novo usuário
    const create = async (dataUser: CreateUser) => {
        /*
        try {
            console.log("bloco try")
            console.log(JSON.stringify(dataUser))
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataUser),
            });

            if (!response.ok) {
                throw new Error(`Error creating user: ${response.statusText}`);
            }

            const data = await response.json();
            return { data };
        } catch (err: any) {
            return { error: err.message };
        }*/
            console.log("bloco try")
            console.log(JSON.stringify(dataUser))
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataUser),
            });

            if (!response.ok) {
                throw new Error(`Error creating user: ${response.statusText}`);
            }

            //const data = await response.json();
            return { response };
    };

    // Função para atualizar um usuário existente
    const update = async (id: string, dataUser: CreateUser) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataUser),
            });

            if (!response.ok) {
                throw new Error(`Error updating user: ${response.statusText}`);
            }

            const data = await response.json();
            return { data };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    // Função para deletar um usuário
    const deleteUser = async (id: string) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Error deleting user: ${response.statusText}`);
            }

            return { data: "User deleted successfully" };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    return {
        fetchUsers,
        fetchCurrentUser,
        create,
        update,
        deleteUser,
    };
}
