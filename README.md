
# Desafio estágio Rentcars - Projeto de Locadora de Veículos

Este projeto consiste em desenvolver um CRUD (Create, Read, Update, Delete) que permitirá a gestão de veículos em uma locadora de carros. 
Cada veículo terá informações detalhadas, incluindo ID, locadora, modelo, marca, ano, número de portas, tipo de câmbio, presença de ar-condicionado e datas de criação e atualização.


## Stack utilizada

**Front-end:** 

![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


**Back-end:** 

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![sequelize.js](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue) ![mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

Além dessas, também foi utilizado:
 - Nodemon: ferramenta de desenvolvimento para reiniciar automaticamente o servidor em alteração de código.
 - Cors: Middleware para habilitar o acesso a origens cruzadas.
 - Dotenv: Para geranciamento de variáveis de ambiente.


## Pré-Requesitos

Node.js, MySQL e Docker instalados.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu **`.env`** .

- `PORT=3000`
- `DB_NAME=testing`
- `DB_USER=root`
- `DB_HOST=localhost`
- `DB_PASS=ANSKk08aPEDbFjDO`
- `DB_PORT=3307`

Você pode adicionar as variáves no arquivo **`.env.example`** e renomear o mesmo para **`.env`** 
## Rodando localmente


**Clone o projeto**

```bash
git clone https://github.com/NanneSantin/projeto-de-locadora-rentcars.git
```

**Inicialize o Docker**

- Para Windows e MacOS

```bash
Abra o Docker Desktop
```

- Para Linux
```bash
sudo systemctl start docker
```

**Abra o terminal e rode os comandos:**
```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

**Entre no diretório do projeto**

```bash
  cd projeto-de-locadora-rentcars
```

**Insira o arquivo .env e configure as variáveis de ambiente**

Veja as orientações em: [Variáveis de Ambiente](#variáveis-de-ambiente)

**Abra o terminal na pasta backend**
```bash
  cd backend
```

**Instale as dependências**

```bash
  npm install
```

**Inicie o servidor**

```bash
  npm run dev
```

**Navegue até o arquivo index.html no navegador e utilize a interface amigável para:**


- Cadastrar um veículo preenchendo os campos e clicando em "Adicionar".
- Visualizar a lista de veículos clicando em "Atualizar Lista".
- Detalhar ou Deletar um veículo da lista.
    - Após deletar, clique em "Atualizar Lista" para atualizar a tabela.
- Atualizar informações de um veículo:
    - No menu superior, clique em "Atualizar Dados".
    - Insira o ID do veículo.
    - Preencha os campos do formulário.
    - Clique em "Atualizar".
    - Retorne para a tela de Cadastro de Veículos e atualize novamente a lista para ver as alterações.



## Demonstração

![demonstracao](demonstração.gif)

## Documentação da API

#### Retorna todos os veículos cadastrados

```http
GET /veiculos
```


#### Retorna o detalhamento de um veículo

```http
GET /veiculos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do veículo que você quer. |

#### Cadastra um veículo

```http
POST /veiculos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `locadora`      | `string` | **Obrigatório**. O nome da locadora. |
| `modelo`      | `string` | **Obrigatório**. O modelo do veículo. |
| `marca`      | `string` | **Obrigatório**. O marca do veículo. |
| `ano`      | `number` | **Obrigatório**. O ano do veículo. Só aceita números maiores ou iguais a 1900. |
| `motor`      | `string` | **Obrigatório**. O motor do veículo. |
| `cambio`      | `string` | **Obrigatório**. O tipo do câmbio do veículo. |
| `portas`      | `number` | **Obrigatório**. A quantidade de portas do veículo. Só aceita números maiores ou iguais a 2 e menores ou iguais a 5.  |
| `ar_condicionado`      | `boolean` | **Obrigatório**. Se o veículo possui ou não ar condicionado. |

#### Atualiza um veículo

```http
PUT /veiculos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do veículo que você quer. |
| `locadora`      | `string` | **Obrigatório**. O nome da locadora. |
| `modelo`      | `string` | **Obrigatório**. O modelo do veículo. |
| `marca`      | `string` | **Obrigatório**. O marca do veículo. |
| `ano`      | `number` | **Obrigatório**. O ano do veículo. Só aceita números maiores ou iguais a 1900. |
| `motor`      | `string` | **Obrigatório**. O motor do veículo. |
| `cambio`      | `string` | **Obrigatório**. O tipo do câmbio do veículo. |
| `portas`      | `number` | **Obrigatório**. A quantidade de portas do veículo. Só aceita números maiores ou iguais a 2 e menores ou iguais a 5.  |
| `ar_condicionado`      | `boolean` | **Obrigatório**. Se o veículo possui ou não ar condicionado. |

#### Deleta um veículo

```http
DELETE /veiculos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do veículo que você quer. |

Para explorar as funcionalidades implementadas você também pode utilizar o Insomnia. O arquivo para ser importador no Insomnia também está disponível neste repositório insomnia.json.

**Veja como importar o arquivo no insomnia:**

![demonstracao_insomnia](https://i.imgur.com/owu3zLx.gif)

## Próximos Passos

- Implementar uma interface amigável para a rota `GET /veiculos/:id`




## Autores

[Elaine Stefani Santin](https://www.github.com/NanneSantin)

<img src="https://avatars.githubusercontent.com/u/129112213?s=400&u=40dc03383b4e899f4a35224b0f5b9bb692966986&v=4" alt="Elaine" style="border-radius: 50%;" width="100px">

