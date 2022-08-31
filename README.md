# Futebol-clube-back-end

Mais uma aplicação com foco em back-end desenvolvida durante o projeto feito na escola Trybe.

Este foi um projeto divisor de águas, onde finalmente fiz uma aplicação usando Programação Orientada a Objetos e aplicando o SOLID. Estou muito feliz de ter chegado nesse patamar do meu aprendizado, confesso que eu estava ansioso.

Resumidamente esta é uma aplicação com o tema Futebol onde é possível inserir partidas e obter as pontuações dos jogos de forma organizada. A aplicação também acompanha o front para a melhor visualização das informações, mas o foco aqui é o back-end que foi a parte desenvolvida neste projeto.

## Como rodar a aplicação?

- **Passo 1:** faça o clone do repositório

  `git clone git@github.com:JhonyAltoe/futebol-clube-back-end.git`

- **Passo 2:** entre na pasta raiz do projeto

  `cd futebol-clube-back-end`
  
- **Passo 3:** instale as dependências
 
  `npm install`
 
- **Passo 4:** rode o docker compose usando o script

  `npm run compose:up:dev`

**obs.:** dependendo da versão do docker compose será necessário modificar o script localizado no arquivo `package.json`.
  
**Para a versão desktop do docker:**
  
 ```  
{ 
  ...
  "scripts": {
    ...
    "compose:up:dev": "(cd app && docker compose -f docker-compose.dev.yml up -d --build)",
    "compose:down:dev": "(cd app && docker compose -f docker-compose.dev.yml down --remove-orphans)",
    ...
  },
  ...
}
 ```
 
**Para outras versões:**
  
```  
{ 
  ...
  "scripts": {
    ...
    "compose:up:dev": "(cd app && docker-compose -f docker-compose.dev.yml up -d --build)",
    "compose:down:dev": "(cd app && docker-compose -f docker-compose.dev.yml down --remove-orphans)",
    ...
  },
  ...
}
 ```
