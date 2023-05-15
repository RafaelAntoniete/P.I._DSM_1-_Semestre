const pass = {
    usuario: 'Rafael',
    password: '1234'
}

const username = document.querySelector('#username')
const password = document.querySelector('#password')

const login = document.querySelector('#login')
const url = './orcamento.html'

function openWin(url, e){
    e.preventDefault()
    window.location.href = url
}
login.addEventListener('click', (e)=>{
   
    if(pass.usuario === username.value && pass.password === password.value) {
        return openWin(url, e)      
    } else {
        return window.alert('Senha ou Usuário Incorretos')
    }
    
})

