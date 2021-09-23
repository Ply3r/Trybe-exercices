const fetchApi = () => (
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((res) => res.message)
)

module.exports = { fetchApi }