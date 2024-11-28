const maincontainer = document.createElement('div');
maincontainer.className = "maincontainer";
document.body.appendChild(maincontainer);

function generate() {
    //console.log("debug 1");
    const amount = parseInt(document.getElementById("button1").value);
    //console.log(amount);
    if (amount >= 1 && amount <= 100){
        //console.log("debug 2");
        for (let i = 0; i < amount; i++){
            //console.log("Debug 3");
            const cube = document.createElement('div');
            cube.className = "cube";
            cube.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
            cube.textContent = i +1;
            maincontainer.appendChild(cube);
        }
    } else {
        return alert("100 is the max number");
    }  
}
function clearcubes(){
    const listofcubes = document.getElementsByClassName("cube");
    while (listofcubes.length > 0){
        listofcubes[0].remove();
    }
};
