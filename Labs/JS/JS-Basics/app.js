function askUserInput() {
    let myNumberArray = [];
    let x;

    // ask until user enters 0
    while (x != 0) {
        x = prompt("Enter numbers, if you are finised enter 0");
        x = parseInt(x);
        if (x != 0) {
            myNumberArray.push(x);
        }
    }
    // clean the 0 from the end
    //myNumberArray.pop();

    // call other functions
    //numbersMaxMin(myNumberArray);
    let results = numbersMaxMin(myNumberArray);
    alert("The largest number is: " + results[0] + "\nThe smallest number is: " + results[1]);
    alert("The sum of the entered numbers is: " + numbersSum(myNumberArray));
    alert("Average of the entered numbers is: " + numbersAvg(myNumberArray));
    alert("Numbers entered: " + myNumberArray);
}

function numbersMaxMin(myNumberArray) {
    let findMax = myNumberArray[0];
    for (let i = 1; i < myNumberArray.length; i++) {
        if (myNumberArray[i] > findMax) {
            findMax = myNumberArray[i];
        }
    }

    let findMin = myNumberArray[0];
    for (let i = 1; i < myNumberArray.length; i++) {
        if (myNumberArray[i] < findMin) {
            findMin = myNumberArray[i];
        }
    }

    return [findMax, findMin];
    //return [Math.max(...myNumberArray), Math.min(...myNumberArray)];
}

function numbersSum(myNumberArray) {
    let counter = 0;
    for (let i = 0; i < myNumberArray.length; i++) {
        counter += myNumberArray[i];
    }
    return counter;
}

function numbersAvg(myNumberArray) {
    let avg;
    avg = numbersSum(myNumberArray) / myNumberArray.length;
    return avg;
}

// ----------------

function randomArray() {
    let symbolsArray = ['A','B','C','D'];
    let symbolsArrayChance = [25,25,25,25];
    let numberToExtract=100;

    let resultArray = [];

    for (let i=0;i<numberToExtract;i++){
        let randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        let symbolSelected=extractSymbol(symbolsArray,symbolsArrayChance,randomNumber);        
        resultArray.push(symbolSelected);
    }

    return resultArray;

}

function extractSymbol(symbolsArray1,symbolsArrayChance1, currentNumber1){

    //let symbolsArray = ['A','B','C','D'];
    //let symbolsArrayChance = [25,25,25,25];
    //let currentNumber=60;

    for (let i = 0; i < symbolsArray1.length; i++) {
        if (symbolsArrayChance1[i] == currentNumber1) {
            return symbolsArray1[i];
        }
        return '';
    }

    //return 'A';
}