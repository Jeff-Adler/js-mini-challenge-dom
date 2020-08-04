/***** Deliverable 1 *****/

window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)
    header.style ="color:red"



/***** Deliverable 2 *****/


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

for (let i = 0; i < PLAYERS.length; i++) {
// <div class="player" data-number="(Player Number)">
//   <h3>
//     {player name} (<em>{player nickname}</em>)
//   </h3>
//   <img src="{player image}" alt="{player name}">
// </div>
    const div = document.createElement("div")
    div.setAttribute('class', "player")
    div.setAttribute('data-number', `${PLAYERS[i].number}`)
        const header = document.createElement("h3")
        header.innerHTML = `${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)`
        div.append(header)

        const img = document.createElement("img")
        img.src = `${PLAYERS[i].photo}`
        img.alt = `${PLAYERS[i].name}`
        div.append(img)
    const playerContainer = document.querySelector("div.player-container");
    playerContainer.append(div);
}

/***** Deliverable 4 *****/
    document.querySelector("div[data-number='7']").remove()
});