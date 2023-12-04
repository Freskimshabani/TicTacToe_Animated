
let ticTacToeGrid = document.getElementById("GameGrid");
let ticTacToeSquares = ticTacToeGrid.querySelectorAll('.game--grid__container');
let squareChildren = ticTacToeSquares.children;
const currentWinner = document.getElementById('CurrentWinner');
const resetButton = document.getElementById('ResetButton');

let playerCount = 1;

function createXElement(node) {
    const xContainer = document.createElement('div');
    const xElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const xLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const xLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    // <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.75 29.75"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px;}</style></defs><line class="cls-1" x1="2.5" y1="2.5" x2="27.25" y2="27.25"/></svg>
    // <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.75 29.75"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px;}</style></defs><line class="cls-1" x1="2.5" y1="27.25" x2="27.25" y2="2.5"/></svg>
    xElement.classList.add('x--player', 'center');
    xElement.setAttribute('viewBox', '-10 -10 50 50');
    xElement.classList.add('X');

    xLine1.setAttribute('x1', '2.5');
    xLine1.setAttribute('y1', '2.5');
    xLine1.setAttribute('x2', '27.25');
    xLine1.setAttribute('y2', '27.25');

    xLine2.setAttribute('x1', '2.5');
    xLine2.setAttribute('y1', '27.25');
    xLine2.setAttribute('x2', '27.25');
    xLine2.setAttribute('y2', '2.5');

    xContainer.classList.add('player--container');

    xElement.appendChild(xLine1);
    xElement.appendChild(xLine2);

    xContainer.appendChild(xElement)

    return node.appendChild(xContainer);
}

function createOElement(node) {
    const oContainer = document.createElement('div');
    const oElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const oCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    oElement.classList.add('o--player', 'center');
    oElement.setAttribute('viewBox', '-10 -10 50 50');
    oElement.classList.add('O');
    // <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px;}</style></defs><circle class="cls-1" cx="15" cy="15" r="12.5"/></svg>
    oCircle.setAttribute('cx', '15');
    oCircle.setAttribute('cy', '15');
    oCircle.setAttribute('r', '12.5');

    oContainer.classList.add('player--container');

    oElement.appendChild(oCircle);

    oContainer.appendChild(oElement);

    return node.appendChild(oContainer);
}

function placeSymbol(div) {

    if (div.children.length < 1) {
        if ((playerCount % 2) == 0) {
            createOElement(div)
        } else {
            createXElement(div)
        }
        playerCount += 1;
    }

    currentWinner.textContent = "Draw"
    console.log(div)
    console.log(playerCount)
}

ticTacToeSquares[2].classList.add('test');

for (var i = 0; i < ticTacToeSquares.length; i++) {
    ticTacToeSquares[i].setAttribute('tabindex', '0');
}

function determineWinner(container) {
    var containerChild = container.children;

    if (containerChild.classList.contains('X')) {
        if (ticTacToeSquares[0].contains() == ticTacToeSquares[1].contains(player) && ticTacToeSquares[1].contains(player) == ticTacToeSquares[2].contains(player)) {
            currentWinner.textContent = "X Wins!"
        }
    }
}

resetButton.addEventListener('click', () => {
    ticTacToeSquares.forEach(div => {
        div.remove.children;
    })
})

ticTacToeSquares.forEach(div => {
    div.addEventListener('click', () => {
        placeSymbol(div);
        determineWinner(squareChildren);
    })
});
