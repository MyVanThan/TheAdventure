const text = document.querySelector('.title')
const bird1 = document.getElementById('bird1')
const bird2 = document.getElementById('bird2')
const forest = document.getElementById('forest')
const rocks = document.getElementById('rocks')
const water = document.getElementById('water')

document.addEventListener('scroll', function(){
    const value = window.scrollY || document.documentElement.scrollTop
    text.style.marginTop = - value * 1 + 'px'
    bird1.style.bottom = value * 0.25  + 'px'
    bird1.style.left = value * 1 + 'px'
    bird2.style.bottom = value * 0.25  + 'px'
    bird2.style.right = value * 1 + 'px'
    forest.style.top = value * 0.5 + 'px'
    rocks.style.bottom = value * 0.12  + 'px'

})