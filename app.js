let usdBuy = document.querySelector("#usd > .sell-price > p.value");
let usdSell = document.querySelector("#usd>.buy-price>.value");
let eurBuy = document.querySelector("#eur>.sell-price>.value");
let eurSell = document.querySelector("#eur>.buy-price>.value");
let update = document.querySelector(".update");
let usdArrow = document.querySelector("#usdArrow");
let eurArrow = document.querySelector("#eurArrow");
let gPrices;
let latest = document.querySelector("#latest");
let url = 'https://nayzac.online/prices.php'
if (localStorage.getItem("prices")) {
    gPrices = JSON.parse(localStorage.getItem("prices"));
    updatePrices();
}
fetchData()
async function fetchData() {

    document.querySelector("#refreshIcon").classList.add("rotate");
    await fetch(url).then(data => data.json()).then(prices => {
        gPrices = prices;

        localStorage.setItem("prices", JSON.stringify(prices));
        updatePrices()
        update.classList.add("justUpdated");
        setTimeout(() => {
            update.classList.remove("justUpdated");
            document.querySelector("#refreshIcon").classList.remove("rotate");
        }, 3000);
    })
}

function updatePrices() {

    usdSell.textContent = gPrices[0].bid;
    usdBuy.textContent = gPrices[0].ask;
    usdArrow.src = gPrices[0].arrow == 0 ? "/assets/arrow-down.svg" : usdArrow.src = "/assets/arrow-up.svg";
    eurSell.textContent = gPrices[1].bid;
    eurBuy.textContent = gPrices[1].ask;
    eurArrow.src = gPrices[1].arrow == 0 ? "/assets/arrow-down.svg" : eurArrow.src = "/assets/arrow-up.svg";
    latest.textContent = gPrices.lastUpdate;
}
