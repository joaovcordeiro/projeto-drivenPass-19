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
-- AUTHORIZATION
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

--CREDENTIAL
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

-- SECURE-NOTE
    
- POST /secureNote/create (autenticada)
    - Rota para realizar a criação de uma nota segura
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {
        "noteTitle": "teste",
        "annotation": "teste"
    }

- GET /secureNote (autenticada)
    - Rota que devolve todas as notas seguras pertencentes ao usuario
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- GET /secureNote/:id (autenticada)
    - Rota que devolve a nota segura do usuario que bate com o id passado.
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- DELETE /secureNote/:id 
    - Rota para realizar a remoção da nota segura do usuario que bate com o id passado
    - headers: {authorization}
    - body: {
    }

--CARD

- POST /card/create (autenticada)
    - Rota para realizar a criação de um cartão
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {
        "cardNumber": "123456789012",
        "cardOwnerName": "João",
        "securityCode": "304",
        "expirationDate": "03/28",
        "password": "3871",
        "isVirtual": true,
        "cardType": "credit", ("credit", "debit", "creditAndDebit")
        "cardName": "Teste"
    }

- GET /card (autenticada)
    - Rota que devolve todas as cartões pertencentes ao usuario
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- GET /card/:id (autenticada)
    - Rota que devolve o cartão do usuario que bate com o id passado.
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- DELETE /card/:id 
    - Rota para realizar a remoção do cartão do usuario que bate com o id passado
    - headers: {authorization}
    - body: {
    }

--WIFI

- POST /wifi/create (autenticada)
    - Rota para realizar a criação de uma rede wifi
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {
       "networkName": "João",
        "wifiTitle": "Teste1",
        "password": "1234"
    }

- GET /wifi (autenticada)
    - Rota que devolve todas as redes wifi pertencentes ao usuario
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- GET /wifi/:id (autenticada)
    - Rota que devolve a rede wifi do usuario que bate com o id passado.
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- DELETE /wifi/:id 
    - Rota para realizar a remoção da rede wifi do usuario que bate com o id passado
    - headers: {authorization}
    - body: {
    }

--DOCUMENT

- POST /document/create (autenticada)
    - Rota para realizar a criação de um documento
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {
       "documentType": "rg", ("rg", "chn")
        "ownerName": "João",
        "issueDate": "03/20",
        "expirationDate": "06/25",
        "registrationNumber": "87218412947813",
        "issuingBody": "SSP"
    }

- GET /document (autenticada)
    - Rota que devolve todas os documentos pertencentes ao usuario
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- GET /document/:id (autenticada)
    - Rota que devolve o documento do usuario que bate com o id passado.
    - headers: {authorization} (O token recebido na rota de login deve ser passado nesse header)
    - body: {}

- DELETE /document/:id 
    - Rota para realizar a remoção do documento do usuario que bate com o id passado
    - headers: {authorization}
    - body: {
    }


```