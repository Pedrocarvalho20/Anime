    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
// validação do form
function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (nome.trim() === '') {
        alert('Por favor, preencha o campo nome.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, preencha o campo e-mail.');
        return false;
    }

    if (senha.trim() === '') {
        alert('Por favor, preencha o campo senha.');
        return false;
    }
    

// Verifica se a senha contém pelo menos uma letra maiúscula
if (!/[A-Z]/.test(senha)) {
    alert('A senha deve conter pelo menos uma letra maiúscula.');
    return false;
}

// Verifica se a senha contém pelo menos uma letra minúscula
if (!/[a-z]/.test(senha)) {
    alert('A senha deve conter pelo menos uma letra minúscula.');
    return false;
}

// Verifica se a senha contém pelo menos um caractere especial
if (!/[\W_]/.test(senha)) {
    alert('A senha deve conter pelo menos um caractere especial.');
    return false;
}

    return true;
}
