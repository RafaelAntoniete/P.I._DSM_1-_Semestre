const login = document.querySelector('#login')
const url = './orcamento.html'

function openwin(url){
    window.open(url)
}
login.addEventListener('click', () =>{
    openwin(url)
})