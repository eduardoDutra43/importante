function clicar() {
    let senha = window.document.getElementById('parte2')
    let user = window.document.getElementById('parte')
    let msg = window.document.getElementById('oi')
   let listaUser = []
    
    let userValid = {
      nome: '',
      user: '',
      senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    
  });((item) => {
      if(user.value == item.user && senha.value == item.senha) {
      
      userValid = {
        nome: item.nome,
        user: item.user,
        senha: item.senha
      }
  
    }
  })
  console.log(userValid)
  console.log(listaUser)
  
  }
   