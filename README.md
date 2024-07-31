# Decodificador de Texto

<h2>
  <img src="Prancheta 3.png" alt="Decodificador de Texto" style="width: 200px; float: left; margin-right: 10px;">
  Desafio One e Alura
</h2>
![Insignia do desafio](<Prancheta 3.png>)

Este projeto implementa um Decodificador de Texto simples e interativo, construído com HTML, CSS e JavaScript. Ele permite aos usuários criptografar e descriptografar mensagens com base em um conjunto de regras de substituição de vogais, proporcionando uma experiência divertida e levemente codificada. 

**Funcionalidades Principais:**

* **Criptografia:** Transforma um texto legível em uma mensagem codificada, substituindo vogais por combinações específicas de caracteres.
    * **Exemplo:** A frase "ola mundo" se torna "olai mundofi".
* **Descriptografia:** Reverte o processo de criptografia, revelando a mensagem original oculta por trás das combinações de caracteres.
    * **Exemplo:** A mensagem codificada "olai mundofi" retorna para "ola mundo".

**Interface Amigável e Intuitiva:**

O site apresenta uma interface clara e fácil de usar, dividida em duas seções principais:

* **Seção de Entrada:** Onde os usuários inserem o texto a ser criptografado ou descriptografado. Instruções simples orientam o uso do decodificador.
* **Seção de Saída:** Exibe o resultado da operação (texto criptografado ou descriptografado) e botões interativos que permitem copiar o resultado ou limpar o decodificador para uma nova operação.

## Melhorias na Estrutura do Código JavaScript

Em versões anteriores, o código JavaScript utilizava uma estrutura com `switch case` para realizar a criptografia, o que tornava o código mais extenso e complexo. Com o objetivo de otimizar e tornar o código mais legível, a estrutura foi reformulada utilizando expressões regulares e o método `replace`.

**Estrutura Anterior (com `switch case`):**

```javascript
let texto = textarea.value.toLowerCase().normalize('NFD');
if (texto !== '' && textarea.value === texto) {
    let textoCriptografado = '';
    texto.split('').forEach(letra => {
        switch (letra) {
            case 'a':
                textoCriptografado += letra.replace('a', 'ai');
                break;
            case 'e':
                textoCriptografado += letra.replace('e', 'enter');
                break;
            case 'i':
                textoCriptografado += letra.replace('i', 'imes');
                break;
            case 'o':
                textoCriptografado += letra.replace('o', 'ober');
                break;
            case 'u':
                textoCriptografado += letra.replace('u', 'ufat');
                break;
            default:
                textoCriptografado += letra;
        }
    });
        // ... restante do código
```

**Estrutura Atualizada (com `replace` e Expressões Regulares):**

```javascript
function criptografar(texto) {
  return texto.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
}
```

A nova estrutura, além de mais concisa, oferece as seguintes vantagens:

* **Melhor Legibilidade:** O código se torna mais fácil de entender e manter.
* **Eficiência:** O uso de expressões regulares pode ser mais eficiente para este tipo de substituição.
* **Simplicidade:** A lógica se torna mais direta e intuitiva.


## Tecnologias Empregadas

1. **HTML (HyperText Markup Language):** Define a estrutura e o conteúdo do site.
    * **Exemplo:**
      ```html
      <section class="secao-esquerda">
        <textarea id="caixa-texto" placeholder="Digite seu texto aqui"></textarea>
        <button class="botao-criptografar">Criptografar</button>
      </section>
      ```

2. **CSS (Cascading Style Sheets):**  Estiliza a aparência visual do site, incluindo cores, fontes, tamanhos de texto, espaçamento e responsividade.
    * **Exemplo:**
      ```css
      .botao-criptografar {
        background-color: #0A3871;
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      ```

3. **JavaScript:**  Insere interatividade e dinamismo ao site.
    * **Exemplo:**
      ```javascript
      function criptografar(texto) {
        return texto.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
      }
      ```

## Como Usar o Decodificador de Texto

1. **Acesse o Site:** Para acessr o click em site em: https://lucasasouzak.github.io/CodeChallengeONE/.
2. **Insira o Texto:** Digite ou cole a mensagem no campo de entrada.
3. **Escolha a Operação:** Clique em "Criptografar" ou "Descriptografar".
4. **Visualize o Resultado:** O resultado será exibido na seção de saída.
5. **Copiar o Resultado:** Clique no botão "Copiar".
6. **Reiniciar o Decodificador:**  Clique em "Limpar".

## Vistas do Site

**Tela Inicial:**

### Vista Desktop
![Imagem da tela inicial do site com o campo de texto vazio e os botões](<assets/vista principal1.PNG>)

### Vista tablet
![Imagem da tela inicial do site com o campo de texto vazio e os botões](<assets/vista principal tablet.PNG>)

### Vista celular
![Imagem da tela inicial do site com o campo de texto vazio e os botões](<assets/vista principal celular.PNG>)

### Demonstração

**Após Criptografar:**

![Imagem da tela após a criptografia de um texto, mostrando o resultado](<assets/vista principal1Cripto.PNG>)

![Imagem da tela após a criptografia de um texto, mostrando o resultado](<assets/vista principal tabletCripto.PNG>)

![Imagem da tela após a criptografia de um texto, mostrando o resultado](<assets/vista principal celularCripto.PNG>)

**Após Descriptografar:**

![Imagem da tela após a descriptografia de um texto, exibindo a mensagem original](<assets/vista principal1DesCripto.PNG>)


## Observações

* O decodificador usa criptografia simples, **não adequada para informações confidenciais.**
* O projeto demonstra conceitos básicos de desenvolvimento web front-end.

## Fontes Relevantes

* **Documentação:**
    * [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
    * [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
    * [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* **Tutoriais:**
    * [W3Schools - HTML](https://www.w3schools.com/html/)
    * [W3Schools - CSS](https://www.w3schools.com/css/)
    * [W3Schools - JavaScript](https://www.w3schools.com/js/)

## Autor

LucasASouzak

## Licença

Este projeto é disponibilizado sob a licença GPLv3, garantindo a liberdade de usar, estudar, modificar e redistribuir o software, e assegurando que todos os derivados permaneçam livres.
