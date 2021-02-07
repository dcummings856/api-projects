let getAPI = () => {
    
    fetch('https://statsapi.web.nhl.com/api/v1/teams')
    .then(res => res.json()) // parse response as JSON
    .then(data => {

    let val = document.querySelector('select').value.toLowerCase()
    let url = 'https://statsapi.web.nhl.com/api/v1/teams/'
    console.log(val)
    console.log(data)
    if (val === 'new jersey devils') {
        url = 'https://statsapi.web.nhl.com/api/v1/teams/1'
    } else if (val === 'new york islands') {
        url = 'https://statsapi.web.nhl.com/api/v1/teams/2'
    } else if (val === 'new york rangers') {
        url = 'https://statsapi.web.nhl.com/api/v1/teams/3'
    }
    
    console.log(url)

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = `Team Name: ${data.teams.name}`
        document.querySelector('h2').innerText = `First year of play: ${data.teams.firstYearOfPlay}`
        document.querySelector('a').innerText = 'Team Site'
        document.querySelector('a').href = data.teams.officialSiteUrl
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', getAPI)