# Cypress Trello API Automação

Este projeto contém testes automatizados usando Cypress para a API do Trello.
Ele inclui a criação e deleção de boards, listas e cards.
O teste utiliza a API pública do Trello para simular as operações mais comuns realizadas na plataforma.

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **Cypress** (versão 13.15.0 ou superior)

## Configuração do Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/JeanHeberth/trello.git

2. Acesse o diretório do projeto:
   cd trello

3. Instale as dependências do projeto:

    ```bash
    npm install 

4. Crie o arquivo .env e adicione suas credenciais:

   touch .env

5. Dentro do arquivo .env, adicione suas credenciais:
      TRELLO_API_KEY=sua_api_key_aqui
      TRELLO_API_TOKEN=seu_token_aqui

6. Execute os testes no Cypress:
   ```bash
    npx cypress open


###  Os testes automatizados incluem os seguintes cenários:

1. Criar um Board no Trello
   O teste cria um novo board e valida se ele foi criado com sucesso.
2. Criar uma Lista no Board
   Após criar o board, uma lista é adicionada dentro desse board.
3. Criar um Card na Lista
   Um card é criado dentro da lista criada no board.
4. Deletar o Card Criado
   O card criado é deletado.
5. Deletar o Board Criado
   Finalmente, o board criado é deletado.



