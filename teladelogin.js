function clicar() {
    let senha = window.document.getElementById('parte2')
    let usuário = window.document.getElementById('parte')
    let msg = window.document.getElementById('oi')
    if (senha.value.length == 0 || usuário.value.length == 0) {
      msg.innerHTML = `Prenchar os espaços abaixo!`
      usuário.setAttribute('style', 'border-color: red')
      senha.setAttribute('style', 'border-color: red')
    }
   let listaUser = []
    
    let userValid = {
      nome: '',
      user: '',
      senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
      if(usuário.value == item.user && senha.value == item.senha){
      
      userValid = {
        nome: item.nome,
        user: item.user,
        senha: item.senha
      }
  
    }
  })
  
  if (usuário.value == userValid.user && senha.value == userValid.senha) {
    let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    console.log('funfou')
  }
    
  }
   