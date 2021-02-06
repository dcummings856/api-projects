let getAPI = () => {
    let val = document.querySelector('input').value.toLowerCase()

    if (val == 'new jersey' || val == 'nj' || val == 'jersey devils' || val == 'new jersey devils' || val == 'devils') {
        val = 1
    } else if (val == 'new york' || val == 'new york islanders' || val == 'islanders')

    console.log(val)

    let url = "https://statsapi.web.nhl.com/api/v1/teams/"+val
    console.log(url)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h1').innerText = `Team Name: ${data.teams[0].name}`
            document.querySelector('h2').innerText = `First year of play: ${data.teams[0].firstYearOfPlay}`
            document.querySelector('a').innerText = 'Team Site'
            document.querySelector('a').href = data.teams[0].officialSiteUrl
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('button').addEventListener('click', getAPI)