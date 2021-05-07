'use strict';
const inputResult = document.querySelector(".result");
// const getArray = JSON.parse(localStorage.getItem("TFLL"));
const getArray = [1,2,3,9,10];
const getMyName = JSON.parse(localStorage.getItem("myName"));
const getPartnerName = JSON.parse(localStorage.getItem("partnerName"));
const resultArray = [{name: "a","value": `${getArray[0]}`}, {name: "b","value": `${getArray[1]}`}, {name: "c","value": `${getArray[2]}`}, {name: "d","value": `${getArray[3]}`}, {name: "e","value": `${getArray[4]}`}]

const sort = resultArray.sort(function (a, b) {
    if (a.value > b.value) {
        return -1;
    }
    if (a.value < b.value) {
        return 1;
    }
    // a must be equal to b
    return 0;
});

const secondLoveLanguage = [];

if (sort[1].value > sort[2].value) {
    secondLoveLanguage.push(sort[1].name);
} else if (sort[1].value == sort[2].value) {
    secondLoveLanguage.push([`"${sort[1].name}"와 "${sort[2].name}"`]);
}

for(let i=0;i<sort.length;i++){
    console.log(sort[i]);
}

const resultText = `${getMyName}이(가) ${getPartnerName}에게 바라는 사랑의 제1 언어는 ${JSON.stringify(sort[0].name)}, 제 2 언어는 ${secondLoveLanguage} 입니다.`

function printResult(q) {
    const result = document.createElement("h1");
    result.textContent = q;
    inputResult.appendChild(result);
}

function drawGraph(dataArr) {
    const canvas = document.getElementById("canvas");
    canvas.width = 250;
    canvas.height = 250;
    canvas.className = "canvas";
    ctx = canvas.getContext("2d");

    const GRAPH_WIDTH = canvas.width * 0.9;
    const GRAPH_HEIGHT = canvas.height * 0.9;

    const arrayLen = [dataArr.length];
    let vertical = [];
    let horizontal = [];
    for (let i = 1; i < 15; i++) {
        horizontal.push(i * GRAPH_WIDTH / 8);
        vertical.push(i * GRAPH_HEIGHT);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // set font for fillText()  
    ctx.font = "11px Arial";

    // draw X and Y axis  
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, GRAPH_HEIGHT);
    ctx.lineTo(GRAPH_WIDTH, GRAPH_HEIGHT);
    ctx.stroke();

    const fillTextArray = ["", "a", "b", "c", "d", "e"];
    const fillTextValues = [];
    for (let i = 0; i < resultArray.length; i++) {
        let res = resultArray.find(n => n.name === fillTextArray[i + 1]);
        fillTextValues.push(Number(res.value));
    }
    ctx.beginPath();
    // draw reference value for day of the week  
    for (let i = 0; i < fillTextArray.length; i++) {
        ctx.lineTo(horizontal[i] * 1.28, GRAPH_HEIGHT - (fillTextValues[i] * 15));
        ctx.fillText(fillTextValues[i], (horizontal[i]) * 1.28, GRAPH_HEIGHT - (fillTextValues[i] * 15) + 12);
        // draw reference value for day of the week  
        ctx.fillText((fillTextArray[i]), (GRAPH_WIDTH - 60) / arrayLen * i, GRAPH_HEIGHT + 15);
    }
    ctx.stroke();
}

function init() {
    printResult(resultText);
    drawGraph(getArray);
}

init();