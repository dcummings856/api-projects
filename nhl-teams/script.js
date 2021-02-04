let getAPI = () => {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            let teamData = data.teams[Math.floor(Math.random() * 30)]
            console.log(teamData)
            document.querySelector('h1').innerText = `Team Name: ${teamData.name}`
            document.querySelector('h2').innerText = `First year of play: ${teamData.firstYearOfPlay}`
            document.querySelector('a').innerText = 'Team Site'
            document.querySelector('a').href = teamData.officialSiteUrl
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('button').addEventListener('click', getAPI)