# PROJETO INTEGRADOR 4

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


Trabalho de integração das matérias de "Computação & Sociedade" com "Tópicos Especiais em Sistemas de Informação".

## Objetivo
Desenvolver um joguinho educativo de perguntas e respostas para ser utilizado pelas crianças envolvidas em projetos sociais da instituição.

## Autores
```
Mateus Garcia - @naturesprophet
Vitor Knupp - @vkcosta
```

## Descrição do projeto

O projeto consiste em uma aplicação em html + css + javascript que funciona como um quiz educativo, fazendo perguntas dos mais diversos temas e complexidades. Jogável por um ou dois jogadores, o objetivo do jogo é ver quem é capaz de responder corretamente a maior quantidade de perguntas no menor tempo possível.

O joguinho foi preparado para funcionar como um aplicativo android através da plataforma cordova.

O Banco de dados para o rank de jogadores foi criado na núvem, no [ElephantSQL](https://www.elephantsql.com/), e o acesso a este banco foi intermediado por meio de um web-service simples desenvolvido em typescript utilizando o framework [Nestjs](https://nestjs.com/). 

O web-service foi hospedado na núvem, através da plataforma oferecida pelo [Heroku](https://dashboard.heroku.com). 

A aplicação do quiz embarcada no cordova faz o crud dos dados enviando requisições HTTP a este web service.