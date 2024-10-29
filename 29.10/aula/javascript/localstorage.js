const form = document.getElementById('formulario')
 var count = 1;

 form.addEventListener('submit', function(event){
    event.preventDefault()
    
    const nome = document.getElementById('idNome').value;
    const documento = document.getElementById('idDocumento').value;
    const telefone = document.getElementById('idTelefone').value;
    const login = document.getElementById('idLogin').value;
    const senha = document.getElementById('idSenha').value;

    const formCadastro = {
        ID:'usuario' +'-' + count,
        nome: nome,
        documento: documento,
        telefone: telefone,
        login: login,
        senha: senha,
    }

    localStorage.setItem('formCadasro'+ CountQueuingStrategy,JSON.stringify(formCadastro))
    confirm('usuario cadastrado com suceso.');
    count++

 })