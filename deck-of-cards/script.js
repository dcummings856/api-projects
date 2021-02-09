let deckID1
let deckID2

/******create decks******/
let getAPI = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            deckID1 = data.deck_id
    fetch(`https://deckofcardsapi.com/api/deck/${deckID1}/shuffle/?deck_count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

        fetch("https://deckofcardsapi.com/api/deck/new/")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            deckID2 = data.deck_id
    fetch(`https://deckofcardsapi.com/api/deck/${deckID2}/shuffle/?deck_count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }
document.querySelector('.create1').addEventListener('click', getAPI)

/******draw cards. begin war!******/
let drawCard1 = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID1}/draw/?count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('.p1-card').src = data.cards[0].image
        fetch(`https://deckofcardsapi.com/api/deck/${deckID2}/draw/?count=1`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('.p2-card').src = data.cards[0].image
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('.draw1').addEventListener('click', drawCard1)