// Events 
// const knap = document.querySelector("MinKnapp")
// const para = document.querySelector("minParagraf")
// let counter = 0;

// knap.addEventListener("click", () => para.textContent = ++counter);

// function increment(){
//     counter++;
//     para.textContent = counter;
// }
let div2LeftPosition = 0;
let div2TopPosition = 0;

const div2 = document.createElement("div");
div2.id="div";
div2.style.backgroundColor = "black";
div2.style.width = '100px';
div2.style.height = '100px';
div2.style.position = "relative";
div2.textContent = "I'm moving";
div2.style.textAlign = "center";
div2.style.borderRadius = "40px";
document.body.appendChild(div2);

div2.addEventListener("click", () => {
     div2.style.backgroundColor = "red";
     console.log(div2.style.backgroundColor = "red")
     div2LeftPosition += 10;
     div2.style.left = div2LeftPosition + "px";
});
div2.addEventListener("mouseenter",() => div2.style.width = "300px");
div2.addEventListener("mouseleave", () => div2.style.backgroundColor = "blue");
div2.addEventListener("dblclick", () => div2.style.backgroundColor = "yellow");

const p = document.createElement("p");
p.id = "p";
p.class = "p"
document.body.appendChild(p);

window.addEventListener("keypress", (e) =>{
    if (e.key === "d"){
        div2LeftPosition += 10;
        div2.style.left = div2LeftPosition + "px";
    }
    if (e.key === "a"){
        div2LeftPosition += 10;
        div2.style.right = div2LeftPosition + "px";
    }
    if(e.key === "w"){
        div2LeftPosition += 10;
        div2.style.bottom = div2TopPosition + "px";
    }
    if(e.key === "s"){
        div2LeftPosition += 10;
        div2.style.top = div2TopPosition + "px";
    }
});