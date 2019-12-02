let gPrices;
let usdBuy = document.querySelector("#usd > .sell-price > p.value");
let usdSell = document.querySelector("#usd>.buy-price>.value");
let eurBuy = document.querySelector("#eur>.sell-price>.value");
let eurSell = document.querySelector("#eur>.buy-price>.value");

fetch('https://viralcarbons.com/get.php').then(data=>data.json()).then(prices=>{
    console.log(prices);
    usdSell.textContent=prices[0].sell_price;
    usdBuy.textContent=prices[0].buy_price;
    eurSell.textContent=prices[1].sell_price;
    eurBuy.textContent=prices[1].buy_price;
})
