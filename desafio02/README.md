# Aplicação fullstack com Next: CRUD com Autenticação JWT

Este repositório contém a implementação de um desafio de bootcamp que consistia em criar uma API CRUD funcional com autenticação JWT, seguindo as especificações.

## AVISO!
Devido ao tempo limitado, optei por priorizar os requisitos do [Desafio 03](https://github.com/qu4resm4/Academia-da-Inovacao/tree/main/desafio03). A estrutura desenvolvida neste repositório foi aproveitada no [Desafio 03](https://github.com/qu4resm4/Academia-da-Inovacao/tree/main/desafio03). **ESTE PROJETO NÃO FOI CONCLUÍDO!**

## Descrição do Projeto
A ideia do projeto consiste em uma API CRUD com autenticação JWT, permitindo a gestão de dados pessoais, residenciais, acadêmicos e emergenciais dos usuários.

### Desafio Proposto
```bash
Para esse desafio, utilizem a documentação de cada tecnologia.
Claro, o intuito é que vocês realmente aprendam então, não utilizem as IAs, apenas a documentação, fóruns e stack overflow.
Data de entrega: 23:59h de 29/12/24.


Desafio da semana: criação de uma API CRUD funcional.
Tecnologias envolvidas:

Next.js: para a construção da API.
PostgreSQL: como banco de dados.
Prisma: para ORM e integração com o PostgreSQL.
JWT (JSON Web Token): para autenticação.
Tailwind CSS: para estilização da interface.
Conventional Commits: para os commits.
Typescript: para tipagem de dados.


Aqui estão os campos do CRUD para os usuários:



Dados Pessoais:
Nome Completo (name): String
Data de Nascimento (dateOfBirth): Date
Idade (age): Number (gerado com base na data de nascimento, opcional armazenar)
Gênero (gender): Enum (MALE, FEMALE, OTHER, PREFER_NOT_TO_SAY)
CPF (ou Documento de Identificação) (cpf): String (único)
Telefone (phone): String
Email (email): String (único)
Nacionalidade (nationality): String
Estado Civil (maritalStatus): Enum (SINGLE, MARRIED, DIVORCED, WIDOWED, OTHER)



Dados Residenciais:
Endereço (address): String
Logradouro (street): String
Número (number): String
Complemento (complement): String (opcional)
Bairro (neighborhood): String
Cidade (city): String
Estado (state): String
CEP (postalCode): String
País (country): String

 
Dados Acadêmicos:
Número de Matrícula (registrationNumber): String (único)
Curso (course): String
Ano de Ingresso (yearOfEntry): Number
Semestre Atual (currentSemester): Number
Status Acadêmico (academicStatus): Enum (ACTIVE, INACTIVE, GRADUATED, DROPPED_OUT, SUSPENDED)
Média Geral (GPA) (gpa): Number (opcional)
Modalidade de Ensino (educationMode): Enum (PRESENTIAL, REMOTE, HYBRID)



Informações Emergenciais:
Nome (name): String
Parentesco (relationship): String
Telefone (phone): String
Email (email): String
```

## Stack Utilizada
- **Next.js** (API Routes para desenvolvimento do backend).
- **Prisma** (ORM para integração com o PostgreSQL).
- **PostgreSQL** (banco de dados relacional).
- **TypeScript** (tipagem estática).

## Como Testar

### Requisitos

- Node.js instalado.
- npm instalado.
- PostgreSQL configurado.

### Passos para rodar o projeto
1. Instale as dependências necessárias:
   ```bash
   npm install
   ```

2. Configure o banco de dados:
   - Crie um banco de dados PostgreSQL.
   - Altere as informações de conexão no arquivo `.env`.

3. Migre o schema para o banco de dados:
   ```bash
   npx prisma migrate deploy
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse o aplicativo no navegador:
   Abra [http://localhost:3000](http://localhost:3000) para interagir com a API.
