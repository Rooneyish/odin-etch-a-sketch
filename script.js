let container = document.querySelector("#container");
let reset=document.querySelector("#reset");

createSketch();

function createSketch(){
    container.innerHTML='';

    let numberOfBlock =prompt("Number of block");

    let row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row");

    let block = document.createElement("div");
    row.appendChild(block);
    block.classList.add("block");

    for (let i = 0; i < numberOfBlock; i++) {
      let row = document.createElement("div");
      container.appendChild(row);
      row.classList.add("row");
      row.style.display = "flex";

      for (let j = 0; j < numberOfBlock; j++) {
        let block = document.createElement("div");
        row.appendChild(block);
        block.classList.add("block");
        block.style.background = "#070F2B";
        block.style.width = "10px";
        block.style.height = "10px";

        block.addEventListener("mouseover", function () {
          block.style.background = "#9290C3";
        });
      }
    }
}

reset.addEventListener("click", function(){
    createSketch();
})


