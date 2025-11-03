document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('#myForm');

    const validate = (e) => {
        e.preventDefault(); 
        const username = document.querySelector('#username');
        const emailAddress = document.querySelector('#email-address');
        
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
        
        let nombreValor = username.value.trim();
        let emailValor = emailAddress.value.trim();

        
            // tema nombre
        if (nombreValor === "") {
            alert("Por favor, ingresa tu Nombre.");
            username.focus();
            return false;

            // tema nombre2
        } else if (!nombreRegex.test(nombreValor)) {
            alert("El campo Nombre no puede contener números ni caracteres especiales. Solo letras y espacios.");
            username.focus();
            return false;
        }

        if (emailValor === "") {
            alert("Por favor, ingresa tu dirección de Mail.");
            emailAddress.focus();
            return false;
        }
        
        if (form) {
             form.submit();
        }
        
        return true;
    };

    if (form) {
        form.addEventListener('submit', validate);
    }
});