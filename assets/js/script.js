
/* Show Message */

// Get form
var form = document.getElementById('form');

// Add event to listen when the form is submitted
form.addEventListener('submit', () => {

    // Get value from each input
    var full_name = document.getElementById('full_name').value;
    var email     = document.getElementById('email').value;
    var password  = document.getElementById('password').value;

    // Create message based on input values
    var message = `Nome Completo: ${ full_name }\n`;
    message += `Email: ${ email }\n`;
    message += `Senha: ${ password }`;

    // Show message
    alert(message);
});

/* Clear Form */

function clearForm() {

    // Get all inputs
    var inputs = document.querySelectorAll('input');    

    // Clear each input
    inputs.forEach(input => {
        input.value = '';
    });
}
