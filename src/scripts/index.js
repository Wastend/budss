const button__business = document.getElementsByName('button__business')
const button__customers = document.getElementsByName('button__customers')
const header__buttons = [button__business, button__customers]

const header__button_contact = document.getElementById('header__button_contact')
const header__buttons_apps = document.getElementById('header__buttons_apps')

const header__bands = document.getElementById('header__bands')
const menu__button_close = document.getElementById('menu__button_close')
const menu = document.getElementById('menu')
const menu__buttons = [header__bands, menu__button_close]
const menu__button_contact = document.getElementById('menu__button_contact')
const menu__buttons_apps = document.getElementById('menu__buttons_apps')

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
const commonError = document.getElementById('commonError')
const inputs = {
  'nameInput': [nameInput, nameError],
  'emailInput': [emailInput, emailError],
  'phoneInput': [phoneInput, phoneError],
}

const cookie = document.getElementById('cookie')
const cookie__buttons = document.getElementsByName('cookie__button')

header__buttons.forEach(element => {
  element.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      if (el.getAttribute('name') == 'button__business') {
        !button__business[0].classList.contains('active') && button__business[0].classList.add('active')
        button__customers[0].classList.remove('active')
        if (window.innerWidth > 375) {
          header__button_contact.classList.remove('invisible')
          header__buttons_apps.classList.add('invisible')
        }
        else {
          menu__button_contact.classList.remove('invisible')
          menu__buttons_apps.classList.add('invisible')
        }
      }
      else {
        !button__customers[0].classList.contains('active') && button__customers[0].classList.add('active')
        button__business[0].classList.remove('active')
        if (window.innerWidth > 375) {
          header__button_contact.classList.add('invisible')
          header__buttons_apps.classList.remove('invisible')
        }
        else {
          menu__button_contact.classList.add('invisible')
          menu__buttons_apps.classList.remove('invisible')
        }
      }
    })
  }
  )
})

menu__buttons.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    if (menu.classList.contains('active')) {
      menu.classList.remove('active')
      header__bottom.style.display = 'flex'
    } else {
      menu.classList.add('active')
      header__bottom.style.display = 'none'
    }
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
      commonError.innerHTML = 'Please fill in all required fields'
    }
    else {
      input.classList.remove('error')
      error.innerHTML = ''
    }
    if (!nameError.innerHTML && !emailError.innerHTML && !phoneError.innerHTML)
      commonError.innerHTML = ''
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