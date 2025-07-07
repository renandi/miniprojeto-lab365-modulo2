const entrar = document.getElementById('entrar');

document.getElementById("entrar").disabled = true;

document.getElementById("email").addEventListener("input", () => {
    if (document.getElementById("email").value && document.getElementById("senha").value) {
        document.getElementById("entrar").disabled = false;
    } else {
        document.getElementById("entrar").disabled = true;
    }
});

document.getElementById("senha").addEventListener("input", () => {
    if (document.getElementById("email").value && document.getElementById("senha").value) {
        document.getElementById("entrar").disabled = false;
    } else {
        document.getElementById("entrar").disabled = true;
    }
});

entrar.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    localStorage.setItem('email', email);
    window.location.href = 'listagem.html';
});