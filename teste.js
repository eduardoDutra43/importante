

let id = 0
let mathRandom = Math.random().toString(16).substr(2)
function botao() {
let token = mathRandom + mathRandom
id++
let tolen = JSON.parse(localStorage.getItem('tolen') || '[]')
let msg = document.querySelector('.ok')
console.log(token)
console.log(id)
tolen.push(
    {
      token: token
    }
  )
  localStorage.setItem('tolen', JSON.stringify(tolen))
msg.innerHTML = `<span>o seu token e ${token}</span>`
if (id >= 6) {
 msg.innerHTML = `<span>O maximo de token que e posivel criar e 6</span>`
  token = console.log('nada')
}
}
function hack() {
    let text = document.querySelector('.text')
    let msgError = document.querySelector('.longe')
    let tolen = []
    
    let tolenValid = {
      nome: '',
      user: '',
      senha: ''
    }
    
    tolen = JSON.parse(localStorage.getItem('tolen'))
  
  tolen.forEach((item) => {
    
  });((item) => {
    console.log(item.senha)
    console.log(item.senha)
      if(text.value == item.token) {
      
      tolenValid = {
        token: item.token
      }
    }
    })
    
    if (text.value == tolenValid.token) {
        window.alert('e fake ok')
    }
}
