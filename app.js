// checking connection
console.log("welcome");

//common function for setting all charges 
function setPrice(charge, price) {
    const costId = document.getElementById(charge + '-charge');
    costId.innerText = price;
    totalCost()
};

// calculating all charges
function totalCost() {
    document.getElementById('promo').disabled = false;
    const memoryCharge = document.getElementById('memory-charge');
    const storageCharge = document.getElementById('storage-charge');
    const deliveryCharge = document.getElementById('ship-charge');
    const bestPrice = document.getElementById('best-price');
    const totalCharge = document.getElementsByClassName('total-charge');
    const total = parseInt(memoryCharge.innerText) + parseInt(storageCharge.innerText) + parseInt(bestPrice.innerText) + parseInt(deliveryCharge.innerText);
    // console.log(totals);

    // iterating through all nodes that totalCharge returns
    for (let i = 0; i < totalCharge.length; i++) {
        totalCharge[i].innerText = total;
    };

};

// promo code validation
function promoCode() {
    // getting input field value
    const couponMsg = document.getElementById('code');
    if (couponMsg.value.toLowerCase() == 'stevekaku') {
        const totalCharge = document.getElementById('discount');
        totalCharge.innerText = parseInt(totalCharge.innerText) - parseInt(totalCharge.innerText) * 0.2;
        // disabling the promo code option
        document.getElementById('promo').disabled = true;
    }
    else {
        console.log('wrong promo')
    }
    // clearing promo input field
    couponMsg.value = '';
};

// getting all the click events

document.getElementById('8GB-memory').addEventListener('click', function () {
    setPrice('memory', 0);
});

document.getElementById('16GB-memory').addEventListener('click', function () {
    setPrice('memory', 180);
});
document.getElementById('256GB-storage').addEventListener('click', function () {
    setPrice('storage', 0);
});

document.getElementById('512GB-storage').addEventListener('click', function () {
    setPrice('storage', 100);
});
document.getElementById('1TB-storage').addEventListener('click', function () {
    setPrice('storage', 180);
});

document.getElementById('free-charge').addEventListener('click', function () {
    setPrice('ship', 0);
});
document.getElementById('delivery-charge').addEventListener('click', function () {
    setPrice('ship', 20);
});
document.getElementById('promo').addEventListener('click', function () {
    promoCode();
});
