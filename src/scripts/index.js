const botton__business = document.getElementById('botton__business')
const botton__customers = document.getElementById('botton__customers')
const header__buttons = [botton__business, botton__customers]

header__buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        if (!element.classList.contains('active')) {
            element.classList.add('active')
            element.getAttribute('id') === 'botton__business' ? botton__customers.classList.remove('active') : botton__business.classList.remove('active')
        }
    })
})