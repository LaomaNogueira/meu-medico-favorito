<h1 align="center"> Meu Médico Favorito - Api Rest Nodejs </h1>

## Índice

- <a href="#sobre">Sobre
- <a href="#tecnologias">Tecnologias
- <a href="#iniciando-projeto">Iniciando o Projeto
- <a href="#deploy">Deploy
- <a href="#contato">Contato

<hr>

<h2 id="sobre">Sobre</h2>

<p align="left">Desenvolvi o backend dessa API durante o curso de Node.js do Programa Women Can Code. A página web que se comunica com a API foi desenvolvida pelo time de Frontend da Dasa.
</p>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message= EM%20DESENVOLVIMENTO &color=&style=for-the-badge"/>
</p>

<hr>

### Funcionalidades da API:

- [x] listar todos os médicos
- [x] listar médico por ID
- [x] adicionar um novo médico
- [x] remover um médico da lista
- [x] alterar informações do médico
- [x] favoritar/desfavoritar um médico

<hr>

<!-- TECHNOLOGIES -->

<h2 id="tecnologias">Tecnologias</h2>
  
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [Postgres](https://www.postgresql.org/)
  - [Framework Express](https://expressjs.com/pt-br/)
  - [ORM Sequelize](https://sequelize.org/)

<hr>

<h2 id="iniciando-projeto">Iniciando o Projeto</h2>

### Pré-requisitos

- Node JS

  ```sh
  https://nodejs.org/en/
  ```

- Npm ou Yarn

  ```sh
  https://www.npmjs.com/
  ```

<hr>


### Instalação

1. Clonar o repositório:

   ```sh
   git clone https://github.com/LaomaNogueira/meu-medico-favorito.git
   ```
   ```
   cd meu-medico-favorito
   ```

2. Instalar os pacotes:

   ```sh
   npm install
   ```
<hr>

### Uso

1. Para usar e testar a API, você precisa importar o arquivo db.sql da pasta ./db_postgres no Postgres.


2. Copie o arquivo `.env.example`, renomeie para `.env` e crie suas variáveis de ambiente e substitua-as.


3. Subir o servidor:

   ```sh
   npm run dev
   ```


4. Rodar os testes conforme indicado abaixo.

<hr>

### Testes

Com a API em funcionamento, vamos rodar os testes via [Insomnia](https://insomnia.rest/download) (ou algum similar). Seguem os testes:

#### *POST*:
- <u>Cadastrar novo médico</u> - rota: *http://localhost:3000/doctors*
    Preencher o JSON, conforme exemplo:
    ```
    {
        "name": "Meredith Grey",
        "crm" : "123456-SP",
        "specialty": "Cirurgia",
        "clinic": "Seattle Grace Hospital",
        "phone": "11991122334",
        "favorite": false
    }
    ```


#### *GET*:
- <u>Listar todos os médicos</u> - rota: *http://localhost:3000/doctors*
- <u>Listar os médicos favoritos</u> - rota: *http://localhost:3000/doctors?favorite=true* (Passar *true* ou *false* como query)
- <u>Listar médicos por ID</u> - rota: *http://localhost:3000/doctors/1* (Informar o ID como parâmetro)


#### *PUT*:
- <u>Atualizar um médico existente</u> - rota: *http://localhost:3000/doctors/1* (Informar o ID como parâmetro)
    Preencher o JSON, com os campos que deseja atualizar, conforme exemplo:
    ```
    {
        "name": "Meredith Grey",
        "crm" : "123456-SP",
        "specialty": "Cirurgia",
        "clinic": "Seattle Grace Hospital",
        "phone": "11991122334",
        "favorite": false
    }
    ```


#### *PATCH*:
- <u>Favoritar e desfavoritar um médico</u> - rota: *http://localhost:3000/doctors/1/favorite* (Informar o ID como parâmetro)
    Preencher o JSON com *true* para favoritar ou *false* para desfavoritar um médico, conforme exemplo:
    ```
    {
    "favorite": true
    }
    ```


#### *DELETE*:
- Deletar um médico - rota: *http://localhost:3000/doctors/1* (Informar o ID como parâmetro)

<hr>

<!-- DEPLOY -->

<h2 id="deploy">Deploy</h2>

**__Heroku__**: [Meu Médico Favorito](https://meu-medico-favorito-laomanog.herokuapp.com/) 

  Para utilizar o Heroku, substituir na rota *http://localhost:3000* por *https://meu-medico-favorito-laomanog.herokuapp.com*.

<hr>

<!-- CONTACT -->

<h2 id="contato">Contato</h2>

#### Laoma Nogueira

<p align="left"> 🤝 Se tiver interesse em conversar comigo, será ótimo trocar uma ideia com você! Estes são os meus contatos: </p>

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/LaomaNogueira)](https://github.com/LaomaNogueira)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/laoma-nogueira/)](https://www.linkedin.com/in/laoma-nogueira/)
<a href="mailto:laomanogueira@gmail.com" alt="gmail" target="_blank">
<img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=mailto:laomanogueira@gmail.com" />
</a>
<hr>
