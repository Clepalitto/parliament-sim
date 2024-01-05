firstValue = Math.random()*100;
secondValue = Math.random()*100;
thirdValue = Math.random()*100;
fourthValue = Math.random()*100;
console.log(firstValue, secondValue, thirdValue, fourthValue);
valuesList = [firstValue, secondValue, thirdValue, fourthValue]
let smallerFromFirstRow;
let biggerFromFirstRow;
let smallerFromSecondRow;
let biggerFromSecondRow;
let biggestValue;
let secondBiggestValue;
let secondSmallestValue;
function sort() {
    if (valuesList[0]>valuesList[1]) {
        smallerFromFirstRow = 1
        biggerFromFirstRow = 0
    }
    if (valuesList[0]<valuesList[1]) {
        smallerFromFirstRow = 0
        biggerFromFirstRow = 1
    }
    console.log("Smaller from first row is", valuesList[smallerFromFirstRow]);

    if (valuesList[2]>valuesList[3]) {
        smallerFromSecondRow = 3
        biggerFromSecondRow = 2
    }
    if (valuesList[2]<valuesList[3]) {
        smallerFromSecondRow = 2
        biggerFromSecondRow = 3
    }
    console.log("Smaller from second row is", valuesList[smallerFromSecondRow]);

    if (valuesList[smallerFromFirstRow]>valuesList[smallerFromSecondRow]) {
        smallestValue = smallerFromSecondRow
        secondSmallestValue = smallerFromFirstRow;
        if (valuesList[biggerFromFirstRow]>valuesList[biggerFromSecondRow]) {
            biggestValue = biggerFromFirstRow;
            secondBiggestValue = biggerFromSecondRow;
        }
        if (valuesList[biggerFromFirstRow]<valuesList[biggerFromSecondRow]) {
            biggestValue = biggerFromSecondRow
            secondBiggestValue = biggerFromFirstRow;
        }
    }
    if (valuesList[smallerFromFirstRow]<valuesList[smallerFromSecondRow]) {
        smallestValue = smallerFromFirstRow
        secondSmallestValue = smallerFromSecondRow
        if (valuesList[biggerFromFirstRow]>valuesList[biggerFromSecondRow]) {
            biggestValue = biggerFromFirstRow;
            secondBiggestValue = biggerFromSecondRow;
        }
        if (valuesList[biggerFromFirstRow]<valuesList[biggerFromSecondRow]) {
            biggestValue = biggerFromSecondRow
            secondBiggestValue = biggerFromFirstRow;
        }
    }
    // proofing
    if (valuesList[secondBiggestValue]<valuesList[secondSmallestValue]) {
        secondSmallestValue = secondBiggestValue
        secondBiggestValue = secondSmallestValue
    }
    console.log("Smallest value : ", valuesList[smallestValue]);
    console.log("Second smallest value : ", valuesList[secondSmallestValue]);
    console.log("Second biggest value : ", valuesList[secondBiggestValue]);
    console.log("Biggest value : ", valuesList[biggestValue]);
}

sort()

// results
yourGroupsResults = valuesList[smallestValue];
g1r = valuesList[secondSmallestValue]-yourGroupsResults;
g2r = valuesList[secondBiggestValue]-valuesList[secondSmallestValue];
g3r = valuesList[biggestValue]-valuesList[secondBiggestValue];
g4r = 100-valuesList[biggestValue];

yourGroupsResults = Math.round(yourGroupsResults*1)/1;
g1r = Math.round(g1r*1)/1;
g2r = Math.round(g2r*1)/1;
g3r = Math.round(g3r*1)/1;
g4r = Math.round(g4r*1)/1;

document.getElementById("yourResults").innerHTML += yourGroupsResults+'%';
document.getElementById("g1r").innerHTML += g1r+'%';
document.getElementById("g2r").innerHTML += g2r+'%';
document.getElementById("g3r").innerHTML += g3r+'%';
document.getElementById("g4r").innerHTML += g4r+'%';

//Parliament
function createParliamentGrid() {
    for (let i = 0; i < 100; i++) {
        document.getElementById("parliament").innerHTML += '<div id="a'+i+'" class="seat"></div>';
        
        if (i>valuesList[biggestValue]) {
            document.getElementById("a"+i).style = "background-color: "+g4color;
            document.getElementById("a"+i).title = "The "+g4name;
        }
        if (i<valuesList[biggestValue]) {
            document.getElementById("a"+i).style = "background-color: "+g3color;
            document.getElementById("a"+i).title = "The "+g3name;
        }
        if (i<valuesList[secondBiggestValue]) {
            document.getElementById("a"+i).style = "background-color: "+g2color;
            document.getElementById("a"+i).title = "The "+g2name;
        }
        if (i<valuesList[secondSmallestValue]) {
            document.getElementById("a"+i).style = "background-color: "+g1color;
            document.getElementById("a"+i).title = "The "+g1name;
        }
        if (i<yourGroupsResults) {
            document.getElementById("a"+i).style = "background-color: "+yourColor;
            document.getElementById("a"+i).title = "The "+yourGroupName;
        }
    }
}

createParliamentGrid()