let usdBuy = document.querySelector("#usd > .sell-price > p.value");
let usdSell = document.querySelector("#usd>.buy-price>.value");
let eurBuy = document.querySelector("#eur>.sell-price>.value");
let eurSell = document.querySelector("#eur>.buy-price>.value");
let update = document.querySelector(".update");
let usdArrow = document.querySelector("#usdArrow");
let eurArrow = document.querySelector("#eurArrow");
let gPrices, gDate;
try {
    gPrices = JSON.parse(localStorage.getItem("prices"));
    gDate = localStorage.getItem("date");
    updatePrices();
} catch {
    console.info("Prices haven't been loaded yet");
}


fetch('https://viralcarbons.com/get.php').then(data => data.json()).then(prices => {
    console.log(prices);
    localStorage.setItem("date", new Date().toLocaleDateString());
    localStorage.setItem("prices", JSON.stringify(prices));
    update.classList.add("justUpdated");
    updatePrices()
})

function updatePrices() {

    usdSell.textContent = gPrices[0].sell_price;
    usdBuy.textContent = gPrices[0].buy_price;
    gPrices[0].arrow == 0 ? usdArrow.src = "/assets/arrow-down.svg" : usdArrow.src = "/assets/arrow-up.svg";
    eurSell.textContent = gPrices[1].sell_price;
    eurBuy.textContent = gPrices[1].buy_price;
    gPrices[1].arrow == 0 ? eurArrow.src = "/assets/arrow-down.svg" : eurArrow.src = "/assets/arrow-up.svg";

}