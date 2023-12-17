const searchbar = document.querySelector('.search__container')
const searchBtn = document.querySelector('.search__btn')

searchBtn.addEventListener('click', () => {
  searchbar.classList.toggle('search__container--active')
  searchBtn.classList.toggle('search__btn--active')
})
