let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("score-home")
let guestScoreEl = document.getElementById("score-guest")

function addHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addGuestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}