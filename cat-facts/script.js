let getAPI = () => {
fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('h2').innerText = data[Math.floor(Math.random() * 4)].text
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', getAPI)