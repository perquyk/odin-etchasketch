const gridContainer = document.querySelector("#grid-container")
const button = document.querySelector("button");

button.addEventListener("click", () => setGrid());

function generateColor(){
    const red = parseInt(Math.random()*255);
    const green = parseInt(Math.random()*255);
    const blue = parseInt(Math.random()*255);
    return `rgb(${red},${green},${blue})`
}

function setGrid(){

    const qty = prompt("Please enter your desired grid size: (E.g. 10)")
    addGrid(qty);
}

function removeOldGrid(){
    const gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(gridSquare => (document.querySelector(".gridSquare").remove()));
}

function addGrid(qty){
    if(qty>100){qty = 100}
    if(document.querySelector(".gridSquare")){removeOldGrid()}
    
    for(let i = 0; i<qty*qty; i++){
        const gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare"
        gridContainer.appendChild(gridSquare);
        gridSquare.addEventListener("mouseenter", (e) => {gridSquare.style.background = `${generateColor()}`;});
    }
    flexGrid(qty)
}
function flexGrid(qty){
    gridContainer.setAttribute("style", `width: ${qty*16}px;`)

}