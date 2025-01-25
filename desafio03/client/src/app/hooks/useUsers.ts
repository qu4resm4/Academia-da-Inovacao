'use client';
import { toast } from 'sonner';
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

    // Faz a requisição para buscar o usuário atual
    const fetchCurrentUser = async (id: any) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: "GET",
                credentials: 'include'
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
            let response;
            await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataUser),
            })
            .then(
                (resp) => {
                    response = resp
                    toast('Usuário CRIADO com sucesso')
                }
            )
            .catch(
                (err) => {
                    toast('Não foi possível CRIAR o usuário')
                throw new Error(`Error creating user: ${err}`);
                }
            )

            //const data = await response.json();
            return { response };
    };

    // Função para atualizar um usuário existente
    const update = async (id: number, dataUser: CreateUser) => {
        try {
            let response;
            await fetch(`${URL}/${id}`, {
                method: "PATCH",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataUser),
            }).then(
                (resp) => {
                    response = resp
                    toast('Usuário ATUALIZADO com sucesso')
                }
            )
            .catch(
                (err) => {
                    toast('Não foi possível ATUALIZAR o usuário')
                throw new Error(`Error creating user: ${err}`);
                }
            )
            return { response };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    // Função para deletar um usuário
    const deleteUser = async (id: string) => {
        try {
            let response;
            await fetch(`${URL}/${id}`, {
                method: "DELETE",
                credentials: 'include'
            }).then(
                (resp) => {
                    response = resp
                    toast('Usuário DELETADO com sucesso')
                }
            )
            .catch(
                (err) => {
                    toast('Não foi possível DELETAR o usuário')
                throw new Error(`Error creating user: ${err}`);
                }
            )
            return { response };
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
