# Teste Prático - Estágio de Programação Web

---

### Objetivo:
 - Interface funcional e desenvolvimento de acordo com os requisítos.

### Funcionalidades:
 - **Interface**: Design limpo.
 - **Validação**: Verifica se os inputs foram preenchidos.
 - **Responsividade**: O formulário se adapta de acordo com o dispositivo.
 - **Interatividade**: Ao enviar o formulário o JS captura o evento e exibe os dados através de um `alert()`.

### Funcionamento:
  - O projeto consiste um um formulário com entradas (inputs) para "Nome Completo", "Email" e "Senha":

  ```html
  <fieldset>
      <legend>Nome Completo</legend>
      <input type="text" name="full_name" id="full_name" placeholder="Nome Completo" required>
  </fieldset>

  <fieldset>
      <legend>Email</legend>
      <input type="email" name="email" id="email" placeholder="Email" required>
  </fieldset>

  <fieldset>
      <legend>Senha</legend>
      <input type="password" name="password" id="password" placeholder="Senha" required>
  </fieldset>
  ```
  (A interface foi codificada em Português, mas a parte funcional em Inglês).

  - No CSS foi feito um reset básico e algumas pré-definições.
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap');

  * {
      margin:      0;
      padding:     0;
      border:      0;
      box-sizing:  border-box;
      font-family: 'Sofia Sans', sans-serif;
  }

  :root {
      --background: #F3F4F6;
      --text: #111827;
  }

  html, body {
      width:  100%;
      height: 100%;
  }

  body,
  header,
  main,
  footer,
  form {
      display: flex;
  }

  body {
      display:          flex;
      flex-direction:   column;
      background-color: var(--background);
      color:            var(--text);
  }
  ```
  Também foi adicionado interatividade nos inputs via CSS, esse efeito se aplica quando é clicado sobre o input e quando ele é preenchido.
  ```css
  main form fieldset input:focus,
  main form fieldset input:not(:placeholder-shown) {
      margin-top:       4px;
      padding:          8px 12px;
      background-color: var(--text);
      color:            var(--background);
  }
  ```
  Para maior fluidez na interface é necessário adicionar `transition` nos inputs.
  ```css
  main form fieldset input {
    ...
    transition: .5s;
    ...
  }
  ```

  - No Javascript existem duas funcionalidades (dentro do mesmo arquivo).

  1ª Funcionalidade: Capturar o evento de submit e exibir uma messagem na tela.
  ```javascript
  /* Exibir Mensagem */

  // Selecionar o formulário
  var form = document.getElementById('form');

  // Adicionar um evento que "escuta" quando o formulário é enviado
  form.addEventListener('submit', () => {

      // Selectionar o valor de cada input pelo ID
      var full_name = document.getElementById('full_name').value;
      var email     = document.getElementById('email').value;
      var password  = document.getElementById('password').value;

      // Criar messagem baseada no valor do inputs
      var message = `Nome Completo: ${ full_name }\n`;
      message += `Email: ${ email }\n`;
      message += `Senha: ${ password }`;

      // Exibir messagem
      alert(message);
  });
  ```
  2ª Funcionalidade: Função que limpa os inputs quando o botão do é pressionado.

  ```javascript
  /* Limpar formulário */

  function clearForm() {

      // Selecionar todos os inputs
      var inputs = document.querySelectorAll('input');    

      // Substituir o conteúdo por uma string vazia
      inputs.forEach(input => {
          input.value = '';
      });
  }
  ```
  (No código foi comentado em inglês).

---
