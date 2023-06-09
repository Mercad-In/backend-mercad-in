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

## 📙 Manual de como rodar a aplicação
Siga o passo a passo a seguir para rodar a aplicação na sua máquina.

**Aviso:** Para executar o passo a passo a seguir é necessário ter configurado o Node.js e o git em sua máquina e ter noções básicas em comandos de terminal. 

**1º Etapa:** Para clonar o projeto via git, digite o seguinte comando:
```
git clone https://github.com/Mercad-In/backend-mercad-in.git
```
**2º Etapa:** Após clonar o projeto e abrir em seu Vscode digite no terminal o comando para instalar todas as dependências do projeto:
```
npm i
```
**Obs.:** Como o projeto utiliza o banco de dados SQLite que é um banco de dados que fica armazenado localmente dentro do projeto, não é necessário se preocupar em fazer uma conexão, mas se você quiser trocar o banco de dados, siga o passo a passo no site da documentação do Prisma ORM.

**3º Etapa:** Após instalar as dependências a aplicação já pode ser startada, aqui tutorial utilizaremos o comando para rodar a aplicação em desenvolvimento, mas é possível rodar utilizando outros comandos listados no arquivo package.json:
```
npm run start:dev
```
Para visualizar a documentação swagger da aplicação, digite a seguinte url:
```
localhost:4451/doc
```

## Acessando o editor do banco de dados
Para poder acessar o editor do banco de dados da aplicação, pode ser usado o **Beekeeper Studio** ou via **Prisma Studio**. Para acessar via prisma studio digite o seguinte comando no terminal. Após a execução do comando, o prisma studio irá abrir em uma página do browser onde você poderá ter acesso ao editor do banco de dados do SQLite, e poderá adicionar e deletar os dados do banco:
```
npx prisma studio
```
Para poder encerrar, basta apertar **CTRL + C** no terminal.

## 🧪 Executando os testes
Para executar as classes de teste da aplicação, basta executar o seguinte comando no terminal:
```
npm run test
```
