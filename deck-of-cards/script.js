let deckID1
let deckID2

/******player one******/
let getAPI1 = () => {
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
    }

document.querySelector('.create1').addEventListener('click', getAPI1)


let drawCard1 = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID1}/draw/?count=1`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('.p1-card').src = data.cards[0].image
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('.draw1').addEventListener('click', drawCard1)


/******player two******/
let getAPI2 = () => {
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

    document.querySelector('.create2').addEventListener('click', getAPI2)

    let drawCard2 = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckID2}/draw/?count=1`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('.p2-card').src = data.cards[0].image
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }
    
    document.querySelector('.draw2').addEventListener('click', drawCard2)