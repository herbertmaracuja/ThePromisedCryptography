# 🗝️ The Promised Cryptography

> Um puzzle narrativo de lógica e criptografia inspirado no universo de *The Promised Neverland*. Ajude Norman a decifrar a verdade e escapar de Gracefield.

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Tech](https://img.shields.io/badge/Tech-HTML%20|%20CSS%20|%20JS-blue)

## 📖 Sobre o Jogo

**The Promised Cryptography** é uma experiência web interativa onde o jogador assume o papel de **Norman**. Em um dia aparentemente comum no orfanato Gracefield, você encontra uma carta misteriosa escondida em um livro da biblioteca de Minerva.

A carta revela a terrível realidade do orfanato, mas a rota de fuga está codificada. Para sobreviver, o jogador deve usar a **Cifra de César** para decodificar mensagens, revelar pistas ocultas e escolher as portas corretas para a liberdade.

## Como Jogar

1.  **A Descoberta:** Explore o cenário e encontre a carta oculta.
2.  **A Decodificação:** Utilize a lógica da *Cifra de César* (deslocamento de alfabeto) para traduzir o texto criptografado.
3.  **A Fuga:** Use a senha decifrada para selecionar a porta correta. Uma escolha errada pode levar ao "Game Over".

## Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do jogo.
* **CSS3:** Estilização atmosférica, animações e responsividade.
* **JavaScript (Vanilla):** Lógica de criptografia, manipulação do DOM e controle de fluxo narrativo.

## Conceitos Técnicos e Matemática Discreta

Este projeto aplica conceitos fundamentais de computação e matemática:

* **Aritmética Modular (Criptografia):** A lógica da Cifra de César baseia-se na fórmula matemática $C = (P + K) \mod 26$, onde aplicamos deslocamentos no alfabeto para ocultar a informação.
* **Máquina de Estados:** O sistema de navegação (Menu -> Carta -> Puzzle -> Fim) funciona como um autômato finito, gerenciando as transições de tela.
* **Lógica Booleana:** Controle de inventário e estados de interação (ex: carta aberta/fechada).

## Ferramentas e Créditos

O desenvolvimento deste projeto contou com o auxílio de ferramentas modernas para design e código:

* ** Gemini (Google):** Geração de ativos visuais e ilustrações conceituais dos personagens e cenários.
* ** Canva:** Criação da interface de usuário (UI), design da carta e elementos gráficos.
* ** ChatGPT (OpenAI):** Apoio na estruturação da arquitetura do código e lógica dos algoritmos.

## Como Rodar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/THE-PROMISED-CRYPTOGRAPHY.git](https://github.com/SEU-USUARIO/THE-PROMISED-CRYPTOGRAPHY.git)
    ```
2.  Abra o arquivo `index.html` no seu navegador.

---

**Desenvolvido por [Herbert Aciolly Leão de Jesus]**
