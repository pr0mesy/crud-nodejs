# Sistema CRUD de Produtos em Node.js

Este é um projeto simples em Node.js criado para demonstrar a aplicação de arquitetura em camadas e persistência de dados utilizando arquivos JSON.
O sistema permite cadastrar, listar, atualizar e deletar produtos, mantendo os dados salvos mesmo após o servidor ser reiniciado.

## Objetivo

O objetivo deste projeto é servir como base para aprendizado de conceitos importantes de desenvolvimento backend, como:

* Separação de responsabilidades
* Boas práticas de organização de código
* Persistência de dados simples em arquivos JSON
* Uso de RESTful APIs

## Tecnologias e Conceitos Aplicados

* **Node.js 20+**
* **Express** (Framework web para Node.js)
* **Arquitetura em Camadas:**
    * **Routes:** define as rotas da aplicação
    * **Controllers:** manipula `req` e `res`
    * **Services:** contém a lógica de negócio
    * **Models:** gerencia a persistência de dados
* **Persistência de Dados em JSON:**
    * Produtos são salvos em `src/data/produtos.json`
    * ID automático e incremental
* **RESTful API:**
    * Métodos `GET`, `POST`, `PATCH` e `DELETE`
    * Respostas padronizadas em JSON

## Como Executar

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
    ```

2.  Instale as dependências:
    ```bash
    cd nome-do-repo
    npm install
    ```

3.  Inicie o servidor:
    ```bash
    node index.js
    ```

4.  Acesse a API usando Postman, Insomnia ou `curl`:

    * `GET /produtos` → Lista todos os produtos
    * `GET /produtos/:id` → Busca produto por ID
    * `POST /produtos` → Cria um novo produto
        ```json
        { "nome": "Camiseta", "preco": 49.9 }
        ```
    * `PATCH /produtos/:id` → Atualiza parcialmente um produto
        ```json
        { "preco": 59.9 }
        ```
    * `DELETE /produtos/:id` → Remove um produto

## Exemplo de Saída Esperada (GET /produtos):

```json
{
  "sucesso": true,
  "produtos": [
    { "id": 1, "nome": "Camiseta", "preco": 49.9 },
    { "id": 2, "nome": "Calça Jeans", "preco": 89.9 }
  ]
}
```