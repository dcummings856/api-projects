let getAPI = () => {

    fetch('https://statsapi.web.nhl.com/api/v1/teams/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let val = document.querySelector('select').value.toLowerCase()
        for (let i = 0; i < data.teams.length; i++) {
            if (data.teams[i].name.toLowerCase() === val) {
                document.querySelector('h1').innerText = `Team Name: ${data.teams[i].name}`
                document.querySelector('h2').innerText = `First year of play: ${data.teams[i].firstYearOfPlay}`
                document.querySelector('a').innerText = 'Team Site'
                document.querySelector('a').href = data.teams[i].officialSiteUrl
            }
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', getAPI)