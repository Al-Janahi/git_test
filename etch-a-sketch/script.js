const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");
let N = 16;
let boxes;
function createGrid(N) {
    container.innerHTML = ""
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);

            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "black";
            });

            square.style.width = `${640 / N}px`;
            square.style.height = `${640 / N}px`;
        }
    }
}
createGrid(N);
gridButton.addEventListener("click", () => {
    N = prompt("choose a number");
    createGrid(N);
})
