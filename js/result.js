const inputResult = document.querySelector(".result");
const getArray = JSON.parse(localStorage.getItem("TFLL"));
const getMyName = JSON.parse(localStorage.getItem("myName"));
const getPartnerName = JSON.parse(localStorage.getItem("partnerName"));
const resultArray = [{name: "a","value": `${getArray[0]}`}, {name: "b","value": `${getArray[1]}`}, {name: "c","value": `${getArray[2]}`}, {name: "d","value": `${getArray[3]}`}, {name: "e","value": `${getArray[4]}`}]
const sort = resultArray.sort(function (a, b) {
    if (a.value > b.value) {
        return -1;
    }
    if (a.value < b.value) {
        return 1
    }
    return 0;
});

const resultText = `${getMyName}이 ${getPartnerName}에게 바라는 사랑의 제1 언어는 ${JSON.stringify(sort[0].name)}, 제 2 언어는 ${JSON.stringify(sort[1].name)} 입니다.`
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

    const GRAPH_TOP = 0;
    const GRAPH_BOTTOM = 200;
    const GRAPH_LEFT = 0;
    const GRAPH_RIGHT = 200;
    const LINE_TOP_START = GRAPH_TOP + 25;
    const LINE_LEFT_START = GRAPH_LEFT + 25;
    const GRAPH_HEIGHT = 300;

    const arrayLen = [dataArr.length];
    let vertical = [];
    let horizontal = [];
    for (let i = 1; i < 15; i++) {
        horizontal.push(i * 32);
        vertical.push(i * 10);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // set font for fillText()  
    ctx.font = "11px Arial";

    // draw X and Y axis  
    ctx.beginPath();
    ctx.moveTo(LINE_TOP_START, LINE_LEFT_START + 50);
    ctx.lineTo(LINE_LEFT_START, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_BOTTOM, GRAPH_RIGHT);
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
        ctx.lineTo(horizontal[i] + 20, GRAPH_HEIGHT - (fillTextValues[i] * 30));
        ctx.fillText(fillTextValues[i], horizontal[i] + 15, GRAPH_HEIGHT - (fillTextValues[i] * 30) + 15);
        // draw reference value for day of the week  
        ctx.fillText((fillTextArray[i]), (GRAPH_RIGHT - 50) / arrayLen * i + 25, GRAPH_BOTTOM + 25);
    }
    ctx.stroke();
}

function init() {
    printResult(resultText);
    drawGraph(getArray);
}

init();