function clicar() {
    let nome = window.document.getElementById('parte')
    let usuário = window.document.getElementById('parte2')
    let senha = window.document.getElementById('parte3')
    let confirsenha = window.document.getElementById('parte4')
    let msg = window.document.getElementById('oi')
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    if (nome.value.length == 0 || usuário.value.length == 0 || senha.value.length == 0 || confirsenha.value.length == 0) {
      senha.setAttribute('style', 'border-color: red')
      usuário.setAttribute('style', 'border-color: red')
      nome.setAttribute('style', 'border-color: red')
      confirsenha.setAttribute('style', 'border-color: red')
      msg.innerHTML = `Prenchar os espaços abaixo!`
    }
    else if (nome.value.length == 1 || nome.value.length == 2 || nome.value.length == 3 || nome.value.length == 4) {
      nome.setAttribute('style', 'border-color: red')
      msg.innerHTML = `o nome precisa de pelo menos 5 características!`
    }
    else if (usuário.value.length == 1 || usuário.value.length == 2 || usuário.value.length == 3 || usuário.value.length == 4) {
      usuário.setAttribute('style', 'border-color: red')
      msg.innerHTML = `o usuário precisa de pelo menos 5 características!`
    }
    else if (senha.value.length == 1 || senha.value.length == 2 || senha.value.length == 3 || senha.value.length == 4 || senha.value.length == 5 || senha.value.length == 6 || senha.value.length == 7) {
      msg.innerHTML = `a senha tem quer no minimo 8 características `
      senha.setAttribute('style', 'border-color: red')
    }
    else if (senha.value != confirsenha.value) {
      confirsenha.setAttribute('style', 'border-color: red')
      msg.innerHTML = `as senha são diferentes!`
    }
    else {
      senha.setAttribute('style', 'border-color: green')
      usuário.setAttribute('style', 'border-color: green')
      nome.setAttribute('style', 'border-color: green')
      confirsenha.setAttribute('style', 'border-color: green')
      msg.setAttribute('style', 'color: #0feb0f')
      msg.innerHTML = `GG foi`
      listaUser.push(
      {
        nome: nome.value,
        usuário: usuário.value,
        senha: senha.value
      }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    }
    
    
  }