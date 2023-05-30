# Futebol-clube-back-end

## Entre em contato comigo

Sinta-se a vontade para entrar em contato seja qual for o motivo, pincipalmente se for para me dar um trabalho :smile:

**Linkedin:** [https://www.linkedin.com/in/jhony-altoe/](https://www.linkedin.com/in/jhony-altoe/)<br />
**Email:** jhonymikealtoe@hotmail.com<br />
**Whatsapp:** +55 27 99506-5211

## **Seja bem-vindo ao meu projeto back-end!**

Com foco no back-end aqui você vai encontrar uma API com uma temática de futebol onde é possível controlar partidas e ao final do campeonato ver a pontuação completa. Será possível iniciar uma partida e finalizar, além de editar a quantidade de gols durante as partidas.

Também existem dois níveis de login que já estão pré-definidos e autenticados, a senha dos usuários estão criptografadas, uma criptografia simples mas exemplifica a importância de se fazer isso.

## **Sumário**
- [Futebol-clube-back-end](#futebol-clube-back-end)
  - [Entre em contato comigo](#entre-em-contato-comigo)
  - [**Seja bem-vindo ao meu projeto back-end!**](#seja-bem-vindo-ao-meu-projeto-back-end)
  - [**Sumário**](#sumário)
  - [**Tecnologias que eu usei**](#tecnologias-que-eu-usei)
  - [**Não se preocupe com o ambiente de desenvolvimento.**](#não-se-preocupe-com-o-ambiente-de-desenvolvimento)
  - [**Rodando a aplicação com o Docker**](#rodando-a-aplicação-com-o-docker)
    - [Para a versão desktop do docker:](#para-a-versão-desktop-do-docker)
    - [Para outras versões:](#para-outras-versões)
  - [**Documentação**](#documentação)

## **Tecnologias que eu usei**
- node.js
- typescript
- express
- mysql
- docker
- jsonwebtoken (jwt)
- bcryptjs
- sequelize
- joi
- jest

[Ir para o sumário](#sumário)

## **Não se preocupe com o ambiente de desenvolvimento.**

Você não tem o node instalado na sua máquina? Fica tranquilo que aqui você só precisa de um pré requisito.

Com o Docker instalado você pode rodar todo o projeto sem maiores preocupações sem se preocupar se as versões ou o ambiente em que a aplicação vai rodar.

Caso ainda não tenha instalado aqui está o [Docker Desktop](https://docs.docker.com/desktop/) com versão gráfica ou se preferir fazer tudo pelo terminal é no [Docker Engine](https://docs.docker.com/engine/), em ambos você só vai verificar qual o sistema operacional e seguir o passo-a-passo. Se tiver alguma dificuldade pode me chamar pelo meu [Linkedin](https://www.linkedin.com/in/jhony-altoe/), será um prazer ajudar.

[Ir para o sumário](#sumário)

## **Rodando a aplicação com o Docker**

- **Passo 1:** faça o clone do repositório

  `git clone git@github.com:JhonyAltoe/futebol-clube-back-end.git`

- **Passo 2:** entre na pasta raiz do projeto

  `cd futebol-clube-back-end`
  
- **Passo 3:** instale as dependências
 
  `npm install`
 
- **Passo 4:** rode o docker compose usando o script

  `npm run compose:up:dev`

**obs.:** dependendo da versão do docker compose será necessário modificar o script localizado no arquivo `package.json`. Não se assuste a diferença é mínima, somente um hífen a mais ou a menos no comando *docker compose*, veja:

`docker-compose` ou `docker compose`

Bem simples, não é?
  
### Para a versão desktop do docker:
  
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
 
### Para outras versões:
  
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

[Ir para o sumário](#sumário)

## **Documentação**

Bem, eu fiz uma documentação bem bonita usando o postman então fique a vontade para conferir [aqui](https://documenter.getpostman.com/view/23798069/2s93m61MYC#a4036827-6cd1-4623-a479-619da4e5b722).

[Ir para o sumário](#sumário)