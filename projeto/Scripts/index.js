const conhecer = document.querySelector('#conhecer')
conhecer.addEventListener('click', () => {
    document.body.scrollTop = 800
    document.documentElement.scrollTop = 800
})

const navbar = document.querySelector('#navbar')
window.onscroll = function() {scrollfunction ()}
function scrollfunction() {
    if (document.body.scrolltop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.background = '#aa882c';
        navbar.style.transition = '.5s'
    } else {
        navbar.style.background = 'transparent'
    }
}

const personalize = document.querySelector('#personalize')
const url = './personalize.html'

function openWin(url, e){
    e.preventDefault()
    window.location.href = url
}
personalize.addEventListener('click', (e)=>{
    console.log('isajdia') 
    openWin(url, e)
})
