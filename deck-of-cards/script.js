let deckID

let getAPI = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            deckID = data.deck_id
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }

document.querySelector('.create').addEventListener('click', getAPI)

let shuffleDeck = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/?deck_count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('.shuffle').addEventListener('click', shuffleDeck)

let drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('img').src = data.cards[0].image
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('.draw').addEventListener('click', drawCard)