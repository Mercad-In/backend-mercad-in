# <img src="https://github.com/Mercad-In/backend-mercad-in/blob/master/.github/mercado.png" width="56px" height="56px"> Aplicação back-end do Mercad-in

![https://nodejs.org/en/docs](https://img.shields.io/static/v1?label&?style=flat&logo=nodedotjs&logoColor=339933&message=node.js&color=026e00)
![https://www.npmjs.com/](https://img.shields.io/static/v1?label&?style=flat&logo=npm&logoColor=FFFFFF&message=npm&color=CB3837)
![https://jestjs.io/pt-BR/](https://img.shields.io/static/v1?label&?style=flat&logo=jest&logoColor=FFFFF&message=jest&color=c21325)
![https://swagger.io/tools/swagger-ui/](https://img.shields.io/static/v1?label&?style=flat&logo=swagger&logoColor=173647&message=swagger&color=85EA2D)
![https://www.typescriptlang.org](https://img.shields.io/static/v1?label&?style=flat&logo=typescript&logoColor=FFFFFF&message=typescript&color=3178C6)
![https://nestjs.com](https://img.shields.io/static/v1?label&?style=flat&logo=nestjs&logoColor=E0234E&message=nest.js&color=111)
![https://www.prisma.io](https://img.shields.io/static/v1?label&?style=flat&logo=prisma&logoColor=FFFFFF&message=prisma&color=2D3748)

Aplicação back-end desenvolvido em TDD, utilizando as tecnologias Node.js, e Nest.js. Este projeto é um trabalho acadêmico desenvolvido para fins de estudo prático de aplicabilidade da ferramenta Jest para teste unitário e automatizado, em aplicações back-end que utilizam Node.js.

## 💻 Tecnologias
Descrição detalhada de todas as principais tecnologias e libs que fora utilizadas no desenvolvimento do projeto:
- @nestjs/cli: v9.0.0,
- @nestjs/core: v9.0.0,
- @nestjs/swagger: v6.3.0,
- typescript: v4.7.4,
- ts-node: v10.0.0,
- supertest: v6.1.3,
- bcrypt: v5.1.0,
- prisma: v4.13.0,
- @prisma/client: v4.13.0,
- class-validator: v0.14.0,
- passport: v0.6.0,
- passport-jwt: v4.0.1,
- jest: v28.1.3

Para ver todas as libs presentes, acesse o arquivo [package.json](https://github.com/Mercad-In/backend-mercad-in/blob/master/package.json) do projeto.

## 📙 Tutorial de instalação
Siga o passo a passo a seguir para instalar as dependências da aplicação.

**Aviso:** Para executar o passo a passo a seguir é necessário ter configurado o Node.js e o git em sua máquina e ter noções básicas em comandos de terminal. 

Para clonar o projeto via git, digite o seguinte comando:
```
git clone https://github.com/Mercad-In/backend-mercad-in.git
```
Após clonar o projeto e abrir em seu Vscode digite no terminal o comando para instalar todas as dependências do projeto:
```
npm i
```
**Obs.:** Como o projeto utiliza o banco de dados SQLite que é um banco de dados que fica armazenado localmente dentro do projeto, não é necessário se preocupar em fazer uma conexão, mas se você quiser trocar o banco de dados, siga o passo a passo no site da documentação do Prisma ORM.

## 🏦 Acessando o editor do banco de dados
Para poder acessar o editor do banco de dados da aplicação, pode ser usado o **Beekeeper Studio** ou via **Prisma Studio**. Para acessar via prisma studio digite o seguinte comando no terminal. Após a execução do comando, o prisma studio irá abrir em uma página do browser onde você poderá ter acesso ao editor do banco de dados do SQLite, e poderá adicionar e deletar os dados do banco:
```
npx prisma studio
```
Para poder encerrar, basta apertar **CTRL + C** no terminal.

## 🏁 Pondo a aplicação para rodar

Após instalar as dependências a aplicação já pode ser startada, aqui no tutorial utilizaremos o comando para rodar a aplicação em modo de desenvolvimento, mas é possível rodar utilizando outros comandos listados no arquivo package.json.
```
npm run start:dev
```
Para visualizar a documentação swagger da aplicação, digite a seguinte url:
```
localhost:4451/doc
```
Pelo swagger você pode ver como estão escritas as rotas HTTP da aplicação, além de fazer algumas requisições. Através dela pode-se obter o endereço para ser utilizado em ferramentas de requisição como **Postman** ou **Insomnia.**

## 🚏 Rotas HTTP da aplicação
Um pequeno resumo do que são rotas HTTP e métodos de requisição

### O que é uma rota HTTP?
Uma rota é uma associação entre um método HTTP, uma URL e um método de um controlador, responsável por processar a requisição e gerar a resposta dessa requisição. As rotas consistem em duas partes: um método HTTP e um caminho de recurso, por exemplo, **GET /pets.** É possível definir métodos HTTP específicos para a rota.

### O que são métodos de requisição HTTP?
São métodos que interagem com o protocolo HTTP, é através deles que conseguimos fazer interações com as rotas, que traram uma resposta depois de receber uma requisição. 

Os métodos mais comuns são

**GET** 

O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados. 

**POST**

O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

**PUT**

O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

**DELETE**

O método DELETE remove um recurso específico.

**PATCH**

O método PATCH é utilizado para aplicar modificações parciais em um recurso.

A seguir você verá a descrição da funcionalidade de cada rota de requisição http de presente no back-end. Para realizar requisições que interagem com essas rotas você deve utilizar alguma ferramenta de requisição, existem várias ferramentas no mercado, mas os mais populares são o **Postman** e o **Insomnia.** Nós recomendamos utilizar a ferramenta **Postman**, por causa da quantidade de opções e funcionalidades que essa ferramenta possui, tornando completa para qualquer desenvolvedor back-end. 

**Aviso:** Para utilizar ambas essas ferramentas é necessário ter um conhecimento básico de requisições HTTP e json.

## 🛒 Supermarket module

**POST** Create Supermarket account: 

Cria uma conta de supermercado

> /supermarket

**GET** Find supermarket account by ID:

Mostra os dados de uma conta, é necessário passar o ID da conta pelas Path Variables do request.

> /supermarket/:id

**GET** Find all:

Lista todas as contas cadastradas.

> /supermarket

**PATCH** Update supermarket account:

Nesta rota é possível fazer a atualização nos dados da conta, é necessário passar o ID da conta pelas Path Variables do request, e depois passar o json no body, detalhe, não precisa ter o id no corpo do json, só no path.

> /supermarket/:id

**DELETE** Remove supermarket account:

Nesta rota é possível deletar uma conta, pelo ID informado no Path Variables.

> /supermarket/:id

## 🏷 Categories module

**GET** Find all:

Lista todas as categorias cadastradas no banco de dados.

> /categories

**GET** Find category by id:

Busca a categoria pelo id, é necessário passar o ID da da categoria pelas Path Variables do request.

> /categories/:id

**GET** Find category by name:

Busca a categoria pelo nome dela, é necessário passar o nome da categoria pelas Path Variables do request.

> /categories/find-by/:name

## 🍬 Product module

**POST** Create product: 

Cria um produto. Para concluir a criação de um produto é necessário preencher o campo categoryId com um id de uma das categorias cadastradas no banco, feito isso aquele prouto será relacionado com aquela categoria daquele id. Isso é obrigatório para classificar o produto.

> /products

**GET** Find all:

Lista todos os produtos cadastrados no banco de dados.

> /products

**GET** Find product by id:

Busca o produto pelo id, é necessário passar o ID do produto pelas Path Variables do request.

> /products/:id

**GET** Find product by name:

Busca o produto pelo nome, é necessário passar o nome do produto pelas Path Variables do request.

> /products/product/:name

**PATCH** Update a product:

Nesta rota é possível fazer a atualização nos dados de um produto, é necessário passar o ID do produto pelas Path Variables do request, e depois passar o json no body, detalhe, não precisa ter o id no corpo do json, só no path.

> /products/:id

**DELETE** Remove product:

Nesta rota é possível remover um produto, é necessário passar o ID do produto pelas Path Variables do request para executar esta requisição.

> /products/:id

## 🧪 Executando os testes
A aplicação possui várias classes testes, dentro dessas classes são feitas testes de execução, validação e criação. A biblioteca utilizada para os testes unitários, é o jest, que é uma biblioteca de teste da linguagem javascript, criada pelo Facebook, tem linha de aprendizado muito fácil, além proporcionar o desenvolvimento de vários tipos de teste no software 

Para executar todas classes de teste da aplicação, basta executar o seguinte comando no terminal:
```
npm run test
```

Ao executar este comando no terminal, abrirá um console no terminal onde será mostrado os arquivos testados, o total de testes realizados e o tempo que eles foram concluídos.
