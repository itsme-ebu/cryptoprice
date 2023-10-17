let bitCoin = document.querySelector("#bitcoin");
let ethereum = document.querySelector("#ethereum");
let dogecoin = document.querySelector("#dogecoin");

(async function coinprice() {
  let rawurl = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=INR"
  );
  let priceURL = await rawurl.json();
  console.log(priceURL.dogecoin.inr);
  bitCoin.textContent = "₹ " + priceURL.bitcoin.inr;
  ethereum.textContent = "₹ " + priceURL.ethereum.inr;
  dogecoin.textContent = "₹ " + priceURL.dogecoin.inr;
})();
