let usdBuy = document.querySelector("#usd > .sell-price > p.value");
let usdSell = document.querySelector("#usd>.buy-price>.value");
let eurBuy = document.querySelector("#eur>.sell-price>.value");
let eurSell = document.querySelector("#eur>.buy-price>.value");
let update = document.querySelector(".update");
let usdArrow = document.querySelector("#usdArrow");
let eurArrow = document.querySelector("#eurArrow");
let gPrices;
let latest = document.querySelector("#latest");
let url='https://noursofanati.online/'
if (localStorage.getItem("prices")) {
    gPrices = JSON.parse(localStorage.getItem("prices"));
    updatePrices();
}

await fetchData()
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

    usdSell.textContent = gPrices.newPrices[0].sell_price;
    usdBuy.textContent = gPrices.newPrices[0].buy_price;
    gPrices.newPrices[0].sell_price < gPrices.oldPrices[0].sell_price ? usdArrow.src = "/assets/arrow-down.svg" : usdArrow.src = "/assets/arrow-up.svg";
    eurSell.textContent = gPrices.newPrices[1].sell_price;
    eurBuy.textContent = gPrices.newPrices[1].buy_price;
    gPrices.newPrices[1].sell_price < gPrices.oldPrices[1].sell_price ? eurArrow.src = "/assets/arrow-down.svg" : eurArrow.src = "/assets/arrow-up.svg";
    latest.textContent = gPrices.lastUpdate;
}
