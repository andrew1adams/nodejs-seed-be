# Node JS - Clean Seed

Nesse projeto temos um template de uma aplicação NodeJS com algumas configurações básicas. Configurações que facilitarão o desenvolvimento do projeto, e trarão melhor qualidade pro código padronizando-o e padronizando também os commits que subirão para o repositório remoto.Abaixo listarei as ferramentas que utilizei pra trazer esses padrões.

Libraries e Frameworks:

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [CommitLint](https://commitlint.js.org/#/)
- [Swagger](https://swagger.io/)



<br/>

# Getting Stared ~

Parabéns, você já está no caminho para começar a criar um projeto NodeJS com o Clean Seed. Para começar execute no terminal, dentro da pasta raiz do projeto o comando:

```bash
  npm i && npm run prepare
```

Com o comando acima você instalará todas as dependências necessárias para o projeto. E também habilitará os `git-hooks` dentro do seu repo local.

<br/>

# Gerador de Swagger API Docs ~

Para gerar uma documentação para sua API com o `swagger` basta executar o seguinte comando em seu terminal:

```bash
  npm run docs:gen
```

Obs: Será necessário apenas apontar o caminho da sua rota principal para gerar o documentação. Essa edição será aplicada no arquivo `swagger/swagger.ts - Ln 15 | Col 27` e o script se encarregará do resto.