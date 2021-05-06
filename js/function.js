const answers = [{"a": "나는 나의 파트너가 사랑의 편지를 주면 마음이 흐뭇해진다.","e": "나는 나의 파트너가 포옹해 주는 것이 좋다."}, {"b": "나는 나의 파트너와 단둘이 있는 것이 좋다.","d": "나는 나의 파트너가 나의 일을 도와줄 때 사랑을 느낀다."}, {"c": "나는 나의 파트너가 특별한 선물을 줄 때 기분이 좋다.","b": "나는 나의 파트너와 함께 여행하는 것이 좋다."}, {"d": "나는 나의 파트너가 도와줄 때 기분이 좋다.","e": "나는 나의 파트너가 스킨십할 때 기분이 좋다."}, {"e": " 나는 나의 파트너가 팔로 나를 안을 때 사랑을 느낀다.","c": "나는 나의 파트너의 깜짝 선물을 통해 사랑을 느낀다."}, {"b": "나는 파트너와 함께라면 어디를 가든 좋다.","e": " 나는 나의 파트너의 손을 잡는 것이 좋다."}, {"c": "나는 나의 파트너가 주는 선물을 소중히 여긴다.","a": "나는 아내로부터 사랑한다는 말을 듣는 것이 좋다."}, {"e": "나는 아내가 내 가까이 앉는 것이 좋다.","a": "나는 아내가 나를 멋있다고 하는 말이 기분 좋다."}, {"e": "나는 파트너와 같이 있는 시간이 즐겁다.","c": "나는 작더라도 파트너가 주는 선물이 좋다."}, {"a": "나는 나의 파트너가 나를 자랑스럽게 여긴다고 할 때 사랑을 느낀다.","d": "나는 파트너가 나를 위해 음식을 준비해 줄 때 사랑을 느낀다."}, {"b": "나는 파트너와 함께하는 일이면 뭐든지 좋다.","a": "나는 나의 파트너가 나를 지지하는 말을 하면 기분이 좋다."}, {"d": "나는 파트너가 작은 것이라도 말보다는 행동으로 해주는 것이 더 좋다.","e": "나는 파트너와 포옹하기를 좋아한다."}, {"a": "파트너의 칭찬은 나에게는 아주 중요하다.","c": "파트너로부터 내가 좋아하는 선물을 받는 것이 아주 중요하다."}, {"b": "파트너 곁에 있는 것만으로 기분이 좋다.","e": "나는 아내가 등을 긁어 주는 것이 좋다."}, {"a": "내가 한 일을 파트너가 인정 해줄때 힘이 난다.","d": "파트너 자신은 좋아하지 않는 일을 나를 위해 하는 것은 의미가 크다."}, {"e": "나는 파트너의 키스가 싫은 적이 없다.","b": "내가 좋아하는 일에 아내가 관심을 가지면 기분이 좋다."}, {"d": "파트너가 내가 하는 일을 돕는 것이 중요하다.","c": "파트너가 준 선물을 받아 볼 때 기분이 좋다."}, {"a": "파트너가 나의 외모를 칭찬하면 기분이 좋다.","b": "아내가 내 생각을 귀 기울여 듣고 비판하지 않는 것이 좋다."}, {"e": "파트너가 가까이 있으면 꼭 만지고 싶다.","d": "파트너가 내 심부름을 해주는 것이 고맙다."}, {"d": "파트너가 나를 도와주는 것은 모두 상을 받아야 마땅하다고 생각하며 감동한다..","c": "파트너가 얼마나 깊게 생각하고 선물했는지에 놀라며 감동한다."}, {"b": "나는 파트너가 나에게 전적으로 집중해 주는 것이 고맙다.","d": "집 안 청소를 잘하는 것은 중요한 봉사 행위라 느끼며 고맙다."}, {"c": "나는 파트너가 줄 선물이 기대된다.","a": "내가 소중하다는 파트너의 말은 늘 지겹지 않다."}, {"c": "파트너가 선물로 자신의 사랑을 보여 줬으면 좋겠다.","d": "파트너가 집에서 나의 일을 도움으로 사랑을 표현해 줬으면 좋겠다."}, {"b": "파트너가 내 말을 끊지 않았으면 좋겠다.","c": "파트너가 선물을 주었으면 좋겠다."}, {"d": "내가 피곤할 것을 알고 도와주겠다고 하는 파트너가 고맙다.","b": "어디를 가든 아내와 함께 하는 것이 좋다."}, {"e": "파트너와 섹스 하는 것을 좋아한다.","b": "파트너의 깜짝 선물을 좋아한다."}, {"a": "파트너의 격려하는 말을 들으면 힘이 난다.","b": "파트너와 함께 영화 보는 것이 나는 좋다."}, {"c": "파트너가 주는 선물보다 더 좋은 선물은 없다.","e": "파트너와 손잡고 있는 것이 좋다."}, {"d": "파트너가 바쁜데도 나를 돕는 것이 내게는 큰 의미가 있다.","a": "파트너가 나에게 감사하다고 말하면 나는 기분이 아주 좋다."}, {"e": "파트너와 잠시 떨어져 있다가 다시 만나 키스하는 것이 좋다.","a": "아내가 나를 믿는다는 말하면 기분이 좋다."}];
const lSide = document.querySelector(".leftSide");
const rSide = document.querySelector(".rightSide");
const labelA = document.createElement("label");
labelA.for = "button";
const labelB = document.createElement("label");
labelB.for = "button";
const vsImg = document.querySelector(".vsImg");
const inputInfo = document.querySelector("#inputInfo");
let round = 0;
let selectedCounter = [a = 0, b = 0, c = 0, d = 0, e = 0];

const question1 = `나의 이름을 적어주세요.`;
const question2 = `파트너의 이름을 적어주세요.`;

function paintImage() {
    const image = new Image();
    image.src = `/image/9585.png_300-removebg-preview.png`;
    image.classList.add("bgImage");
    image.style.width = `50%`;
    image.style.height = `auto`;
    vsImg.prepend(image);
}

function pushSelectedCounter(length) {
    counter = selectedCounter[length] + 1;
    selectedCounter.splice(length, 1, counter);
    saveQuestion("TFLL", selectedCounter);
}

function saveQuestion(location, data) {
    localStorage.setItem(location, JSON.stringify(data));
}

function selectedLengthCounter(key) {
    if (key == "a") {
        return 0;
    } else if (key == "b") {
        return 1;
    } else if (key == "c") {
        return 2;
    } else if (key == "d") {
        return 3;
    } else if (key == "e") {
        return 4;
    }
}

function clickA() {
    if (round == (answers.length - 1)) {
        location.href = "/result.html";
    } else {
        let keys = Object.keys(answers[round]);
        const selectedKeyLength = selectedLengthCounter(keys[0]);
        pushSelectedCounter(selectedKeyLength, keys[0]);
        const lBtn = document.querySelector(".lBtn");
        const rBtn = document.querySelector(".rBtn");
        lBtn.parentNode.removeChild(lBtn);
        rBtn.parentNode.removeChild(rBtn);
        round++;
        makeBtn();
    }
}

function clickB() {
    if (round == (answers.length - 1)) {
        location.href = "/result.html";
    } else {
        let keys = Object.keys(answers[round]);
        const selectedKeyLength = selectedLengthCounter(keys[1]);
        pushSelectedCounter(selectedKeyLength, keys[1]);
        const lBtn = document.querySelector(".lBtn");
        const rBtn = document.querySelector(".rBtn");
        lBtn.parentNode.removeChild(lBtn);
        rBtn.parentNode.removeChild(rBtn);
        round++;
        makeBtn();
    }
}

function makeBtn() {
    let keys = Object.keys(answers[round]);

    const questionA = answers[round][keys[0]];
    const questionB = answers[round][keys[1]];
    const lBtn = document.createElement("button");
    lBtn.className = "lBtn";
    lBtn.innerText = `${questionA}`
    const rBtn = document.createElement("button");
    rBtn.className = "rBtn";
    rBtn.innerText = `${questionB}`
    lBtn.addEventListener("click", clickA);
    rBtn.addEventListener("click", clickB);
    lSide.appendChild(lBtn);
    rSide.appendChild(rBtn);
}

function roundStart() {
    saveQuestion("TFLL", selectedCounter);
    makeBtn();
    paintImage();
}

function inputMyPartner(q) {
    const nameQ = document.createElement("h1");
    const partnerName = document.createElement("input");
    partnerName.addEventListener(`keypress`, function (e) {
        if (e.keyCode == 13) {
            nameQ.parentNode.removeChild(nameQ);
            partnerName.parentNode.removeChild(partnerName);
            saveQuestion("partnerName", partnerName.value);
            roundStart()
        }
    });
    nameQ.textContent = q;
    inputInfo.appendChild(nameQ);
    inputInfo.appendChild(partnerName);
    partnerName.focus();
}

function inputMyName(q) {
    const nameQ = document.createElement("h1");
    const myName = document.createElement("input");
    myName.addEventListener(`keypress`, function (e) {
        if (e.keyCode == 13) {
            nameQ.parentNode.removeChild(nameQ);
            myName.parentNode.removeChild(myName);
            saveQuestion("myName", myName.value);
            inputMyPartner(question2);
        }
    });
    nameQ.textContent = q;
    inputInfo.appendChild(nameQ);
    inputInfo.appendChild(myName);
    myName.focus();
}

function init() {
    localStorage.clear();
    inputMyName(question1);
}
init();