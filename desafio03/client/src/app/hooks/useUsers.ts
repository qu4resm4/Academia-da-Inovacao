'use client';
import { toast } from 'sonner';
import { CreateUser }from  '../components/templates/form'
import { LoginInterface } from '../login/page'
import Cookies from 'js-cookie'
import {jwtDecode} from 'jwt-decode';

export default function useUsers() {
    const URL = 'http://localhost:4000';
    let userId: string | undefined;
    if(Cookies.get('token')) {
        const token = Cookies.get('token') || '';
        if(token != '' || token != null || token != undefined) {
            const decodedToken = jwtDecode(token);
            userId = decodedToken.sub;
        }
    }
        

    // Fetch para autenticação
    const fetchAuth = async (data: LoginInterface) => {
        let response;
        await fetch(`${URL}/login`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(
            (resp) => {
                response = resp
                toast('Logado com sucesso, vá para Dashboard')
                if (resp.status == 200) {
                    toast('Logado com sucesso, vá para o Dashboard');
                } else if (resp.status == 401) {
                    toast('Credenciais inválidas');
                } else {
                    toast('Falha na autenticação');
                }
            }
        ).catch(
            (err) => {
                toast('Falha na autenticação')
                throw new Error(`Erro na autenticação: ${err}`);
            }        
        )

            //const data = await response.json();
            return { response };
    };

    // Fetch para obter a lista de usuários
    const fetchUsers = async () => {
        try {
            const response = await fetch(`${URL}/users`);
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
    const fetchCurrentUser = async () => {
        try {
            console.log("USER ID: ", userId)
            const response = await fetch(`${URL}/users/${userId}`, {
                method: "GET",
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`Erro ao buscar o usuário: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("CURRENT: ", data)
            return { data };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    // Função para criar um novo usuário
    const create = async (dataUser: CreateUser) => {
            let response;
            await fetch(`${URL}/users`, {
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
    const update = async (dataUser: CreateUser) => {
        try {
            let response;
            await fetch(`${URL}/users/${userId}`, {
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
    const deleteUser = async () => {
        try {
            let response;
            await fetch(`${URL}/users/${userId}`, {
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
        fetchAuth,
        fetchUsers,
        fetchCurrentUser,
        create,
        update,
        deleteUser,
    };
}
