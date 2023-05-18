export default (Cards) => {
    Cards.forEach(card => {
        console.log(card);
        document.getElementById(card.id).textContent = card.value;
    });
    /*document.getElementById("totalCost").textContent = costTotal;*
    document.getElementById("consumption").textContent = consumption;
    document.getElementById("footPrint").textContent = footPrint;*/
}