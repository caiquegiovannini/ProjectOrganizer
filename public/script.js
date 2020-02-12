const loadButton = document.querySelector('header button:last-child')
const loadOverlay = document.querySelector('.load-overlay')

loadButton.addEventListener('click', function() { 
    loadOverlay.classList.add('active')
})

document.querySelector('.close-load').addEventListener('click', function() {
    loadOverlay.classList.remove('active')
})

const AddItem = {
    newIssue() {
        const issues = document.querySelector('.project-issues')
        const fieldContainer = document.querySelectorAll('.issue')

        // Realiza um clone da última issue adicionada
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.children[0].value == "") return false

        // Deixa o valor do input vazio
        newField.children[0].value = ""
        issues.appendChild(newField)
    }
}