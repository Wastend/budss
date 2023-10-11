const button__business = document.getElementById('button__business')
const button__customers = document.getElementById('button__customers')
const header__buttons = [button__business, button__customers]

const header__bands = document.getElementById('header__bands')
const menu__button_close = document.getElementById('menu__button_close')
const menu = document.getElementById('menu')
const menu__buttons = [header__bands, menu__button_close]

const buttons__contact = document.getElementsByName('button__contact')
const form = document.getElementById('window')
const window__form = document.getElementById('window__form')
const window__positive = document.getElementById('window__positive')
const buttons__close = document.getElementsByName('window__close')
const window__button = document.getElementById('window__button')

const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const phoneInput = document.getElementById('phoneInput')
const companyInput = document.getElementById('companyInput')
const websiteInput = document.getElementById('websiteInput')

const header__bottom = document.getElementById('header__bottom')

const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const phoneError = document.getElementById('phoneError')
const inputs = {
  'nameInput': [nameInput, nameError],
  'emailInput': [emailInput, emailError],
  'phoneInput': [phoneInput, phoneError],
}

const cookie = document.getElementById('cookie')
const cookie__buttons = document.getElementsByName('cookie__button')

header__buttons.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    if (!element.classList.contains('active')) {
      element.classList.add('active')
      element.getAttribute('id') == 'button__business'
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

buttons__contact.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    if (!form.classList.contains('active')) {
      window__positive.classList.remove('active')
      form.classList.add('active')
      window__form.classList.add('active')
      document.body.classList.add('inactive')
    }
  })
})

for (const element in inputs) {
  const input = inputs[element][0]
  const error = inputs[element][1]
  input.addEventListener("input", (e) => {
    if (!e.target.value) {
      input.classList.add('error')
      error.innerHTML = 'This field is required.'
    }
    else {
      input.classList.remove('error')
      error.innerHTML = ''
    }
    if (nameInput.value && emailInput.value && phoneInput.value)
      window__button.disabled = window__button.disabled == true && false
    else
      window__button.disabled = true
  })
}

buttons__close.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    form.classList.remove('active')
    document.body.classList.remove('inactive')
  })
})

document.addEventListener('scroll', function () {
  if (window.scrollY > 40)
    header__bottom.classList.add('fixed')
  else
    header__bottom.classList.remove('fixed')
})



window__button.addEventListener('click', (e) => {
  e.preventDefault()
  nameInput.value = ''
  emailInput.value = ''
  phoneInput.value = ''
  companyInput.value = ''
  websiteInput.value = ''
  window__form.classList.remove('active')
  window__positive.classList.add('active')
  window__button.disabled = true
})

cookie__buttons.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    cookie.classList.add('hide')
    setTimeout(() => { cookie.classList.remove('show') }, 1000)
  })
})