const button__business = document.getElementById('button__business')
const button__customers = document.getElementById('button__customers')
const header__buttons = [button__business, button__customers]

const header__bands = document.getElementById('header__bands')
const menu__button_close = document.getElementById('menu__button_close')
const menu = document.getElementById('menu')
const menu__buttons = [header__bands, menu__button_close]


header__buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        if (!element.classList.contains('active')) {
            element.classList.add('active')
            element.getAttribute('id') === 'button__business'
                ? button__customers.classList.remove('active')
                : button__business.classList.remove('active')
        }
    })
})

menu__buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active')

    })
})