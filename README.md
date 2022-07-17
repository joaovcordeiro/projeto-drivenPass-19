<p align="center">
  <a href="https://github.com/Offjhonjhon/projeto-valex-18-API">
    <img src="./readme.png" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    projeto-drivenPass-19
  </h3>
</p>

## Usage

```bash
$ git clone https://github.com/Offjhonjhon/projeto-valex-18-API.git

$ cd projeto-drivenPass-19

$ npm install

$ npm run dev
```

API:

```
- POST /sign-up
    - Rota para cadastrar um novo usuario
    - headers: {}
    - body: {
        "email" : "teste@gmail.com,
        "password" : "0123456789" (A senha deve possuir ao menos 10 caracteres)
    }

- POST /sign-in
    - Rota para o login do usuario, retorna um token
    - headers: {}
    - body: {
    "email": "teste@gmail.com",
    "password": "0123456789" (A senha deve possuir ao menos 10 caracteres)
    }

- POST /crendetial/create (autenticada)
    - Rota para realizar a criação de uma credencial
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {
        "userName": "João",
        "url": "www.teste.com" (A url deve ser uma url válida!),
        "password": "0123456789" (A senha deve possuir ao menos 10 caracteres),
        "credentialTitle": "Titulo"
    }

- GET /credential (autenticada)
    - Rota que devolve todas as credenciais pertencentes ao usuario
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- GET /credential/:id (autenticada)
    - Rota que devolve a credencial do usuario que bate com o id passado.
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- DELETE /credential/:id 
    - Rota para realizar a remoção da credencial do usuario que bate com o id passado
    - headers: {authorization}
    - body: {
    }
    
- POST /card/block 
    - Rota para realizar o bloqueio do cartão
    - headers: {}
    - body: {
        "cardId": 1,
        "cardPassword": "1234",
    }
- POST /card/unlock 
    - Rota para realizar o desbloqueio do cartão
    - headers: {}
    - body: {
        "cardId": 1,
        "cardPassword": "1234",
    }
```