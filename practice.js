let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("button");

let pturn = true;

let player = document.querySelector("h1");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

reset.addEventListener("click", () => {
    pturn = true;
    for (const box of boxes) {
        box.classList.remove("disabled");
        box.innerHTML = "";
    }
    player.innerHTML = "";
})

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (pturn) {
            box.innerText = "X";
            pturn = false
        } else {
            box.innerText = "O";
            pturn = true
        }
        box.classList.add("disabled");
        checkWinner();
    });
});

const checkWinner = () => {
    for (const val of winPatterns) {
        let pos1Val = boxes[val[0]].innerText;
        let pos2Val = boxes[val[1]].innerText;
        let pos3Val = boxes[val[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                boxes.forEach((box) => box.classList.add("disabled"));
                if (pturn === true)
                    player.innerText = "Player 2 Won";
                else
                    player.innerText = "Player 1 Won";
            }
        }
    }
}