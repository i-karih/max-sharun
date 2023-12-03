"use strict"
const spoilerContent = document.querySelectorAll('[data-spoiler]')

const removeOpen = (items) => {
  items.forEach(item => {
    item.classList.remove('isOpen')
  })
}

spoilerContent.forEach(container => {
  const btn = container.querySelector('[data-spoiler-btn]')

  btn.addEventListener('click', () => {
    console.log(container.classList.contains('isOpen'));
    if(container.classList.contains('isOpen')) {
      container.classList.remove('isOpen')
    } else {
      removeOpen(spoilerContent)
      container.classList.add('isOpen')
    }
  })
})