const login = document.querySelector('#login')
const url = './orcamento.html'

function openWin(url, e){
    e.preventDefault()
    window.location.href = url
}
login.addEventListener('click', (e)=>{
    openWin(url, e)
})