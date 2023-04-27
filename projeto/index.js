const input = document.querySelector('#color')
const btn = document.querySelector('#btn')
const tatoo = document.querySelector('#backgound')

btn.addEventListener('click', ()=> {
    tatoo.style.fill = input.value;
})