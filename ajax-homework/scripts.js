const loadBtn = document.querySelector(".js-load")
const jsonButton = document.querySelector('button.json-load')
const resultsContainer = document.querySelector(".js-results")
const searchInput = document.querySelector(".js-input")

const isNotEmpty = (field) => {
  return field ? field : "Пользователь не заполнил это поле"
}

const gitHubLoad = (e) => {
  e.preventDefault()
  const searchValue = searchInput.value.trim()
  fetch(`https://api.github.com/users/${searchValue}`)
  .then(response => response.json())
  .then(data =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${isNotEmpty(data.name)}</span><p>
                <p> О себе: <span>${isNotEmpty(data.bio)}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
  )
}

const jsonPlaceholderLoad = (e) => {
  e.preventDefault()
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => { 
    res.data.forEach(el => {
      const user = `<div class="response-container">
              <p> Имя: <span>${isNotEmpty(el.name)}</span><p>
              <p> Сайт: <span>${isNotEmpty(el.website)}</span><p>
              <p> Телефон: <span>${isNotEmpty(el.phone)}</span><p>
          </div>`
      resultsContainer.insertAdjacentHTML('beforeend', user)
    })
  })
}

loadBtn.addEventListener("click", (e) => gitHubLoad(e))
jsonButton.addEventListener("click", (e) => jsonPlaceholderLoad(e))

