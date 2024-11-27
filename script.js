const gridContainer = document.querySelector("#grid-container")
const button = document.querySelector("button");

button.addEventListener("click", () => setGrid());

function setGrid(){
    const qty = prompt("Please enter your desired grid size: (E.g. 10)")
    addGrid(qty);
}

function addGrid(qty){
    if(qty>100){qty = 100}
    
    for(let i = 0; i<qty*qty; i++){
        const gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare"
        gridContainer.appendChild(gridSquare);
        gridSquare.addEventListener("mouseenter", (e) => {gridSquare.style.background = "blue";});
    }
    flexGrid(qty)
}
function flexGrid(qty){
    gridContainer.setAttribute("style", `width: ${qty*16}px;`)

}