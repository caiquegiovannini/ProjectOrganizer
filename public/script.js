const loadButton = document.querySelector('header button:last-child')
const loadOverlay = document.querySelector('.load-overlay')

loadButton.addEventListener('click', function() { 
    loadOverlay.classList.add('active')
})

document.querySelector('.close-load').addEventListener('click', function() {
    loadOverlay.classList.remove('active')
})