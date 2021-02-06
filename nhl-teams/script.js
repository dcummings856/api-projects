let getAPI = () => {
    
    // if (val == 'new jersey' || val == 'nj' || val == 'jersey devils' || val == 'new jersey devils' || val == 'devils') {
    //     val = 1
    // } else if (val == 'new york' || val == 'new york islanders' || val == 'islanders')

    console.log('https://statsapi.web.nhl.com/api/v1/teams')
    fetch('https://statsapi.web.nhl.com/api/v1/teams')
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        let val = document.querySelector('input').value.toLowerCase()

        console.log(val)

        console.log(data)
        console.log(data.teams)
        for (let i = 0; i < data.teams.length; i++) {
        if (val == `${data.teams.name}` || val == `${data.teams.locationName}` || val == `${data.teams.shortName}` || val == `${data.teams.teamName}`) {
            val = i
            console.log(val)
        }

        }
    
    let url = 'https://statsapi.web.nhl.com/api/v1/teams/'+val
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