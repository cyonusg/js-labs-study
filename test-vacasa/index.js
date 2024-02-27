/*
array cartas.
cantidad de jugadores.
cantidad a repartir por jugadores.
y validacion de si las cartas con junto a la cantidad son suficiente para repartir

y cuanatas cartas quedaron en el mazo.

Output:
Mazo cartas.
N jugadores cartas.
*/
const createMazo = (card_quantity) => {
    let mazo = [];
    for (let index = 0; index < card_quantity; index++) {
        mazo.push(i);
    }
    return mazo;
}
const randomSort =  (mazo) => {
    return mazo.sort((a, b) => 0.5 - Math.random());
}

const main = (card_quantity, players_quantity, deal_cards) => {
    const mazo = createMazo(card_quantity);
    const randMazo = randomSort(mazo);
    // 10
    // 5
    // 2
    const necesitoCartas = players_quantity * deal_cards;
    if(randMazo.lenght < necesitoCartas) {
        console.log("La cantidad de cartas en el mazo no son suficientes");
        return;
    }
    cards_players = {};
    for (let index = 1; index < players_quantity; index++) {
        
    }
}

main();