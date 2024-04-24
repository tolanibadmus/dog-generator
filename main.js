const image = document.getElementById('dog-img')

function generateRandomDog() {
  const url = "https://dog.ceo/api/breeds/image/random"
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    image.src = data.message
  })
  .catch((err) => {
    console.log(err)
  })
}