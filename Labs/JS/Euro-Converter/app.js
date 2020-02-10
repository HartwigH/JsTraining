function convertEurToUsd() {
    let amountInEur = document.getElementById('euro').value;

    //remember to convert
    amountInEur = parseInt(amountInEur);

    let eurToUsd = amountInEur * 1.1;

    document.getElementById('usd').value = eurToUsd;
}


function convertUsdToEur() {
    let amountInUsd = document.getElementById('usd').value;

    //remember to convert
    amountInUsd = parseInt(amountInUsd);

    let usdToEur = amountInUsd * 0.9;

    document.getElementById('euro').value = usdToEur;
}