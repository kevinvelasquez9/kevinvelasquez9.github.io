const body = document.body;
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    body.classList.add(currentTheme);
}

const choices = document.querySelectorAll('.circle');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        body.className = '';
        body.classList.add(choice.id);
        
        if (body.classList.contains(choice.id)) {
            localStorage.setItem('currentTheme', choice.id);
        }

    })
})