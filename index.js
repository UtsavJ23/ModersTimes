// 01 02 03
// 04 05 06
// 07 08 09
// 10 11 12
// 13 14 15
const numbers = [
	[1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1], // 0
    [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1], // 1
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1], // 2
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], // 3
	[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1], // 4
	[1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1], // 5
	[1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 6
	[1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], // 7
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 8
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]  // 9
];

const digits = [];
for(let i=0; i<60; i++)
digits.push(String(i).padStart(2, '0'));

let lightMode = "text-lg font-bold m-0 p-0 text-gray-200 bg-gray-200 bg-opacity-20";
let darkMode  = "text-lg font-light m-0 p-0 text-gray-600";

let d1, d2, d3, d4, span;
d1= document.getElementById("digit1");
d2= document.getElementById("digit2");
d3= document.getElementById("digit3");
d4= document.getElementById("digit4");
for(let j=0; j<5; j++){
    for(let i=0; i<12; i++){
        span = document.createElement("span");
        // span.className = "m-1";
        span.innerHTML = digits[i*5+j];//i*5+j
        if(i<3)
        d1.appendChild(span);
        else if(i<6)
        d2.appendChild(span);
        else if(i<9)
        d3.appendChild(span);
        else
        d4.appendChild(span);
    }
}
function updateClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // console.log(`${hours}:${minutes}:${seconds}`);
    let h1 = numbers[Math.floor(hours/10)];
    let h2 = numbers[Math.floor(hours%10)];
    let m1 = numbers[Math.floor(minutes/10)];;
    let m2 = numbers[Math.floor(minutes%10)];;
    console.log(hours/10);

    updateDigit(d1, h1);
    updateDigit(d2, h2);
    updateDigit(d3, m1);
    updateDigit(d4, m2);
    let grid, cell;
    if(seconds<15){
        grid = d1;
        cell = Math.floor(seconds/5) + 3*(seconds%5);
    }
    else if(seconds<30){
        grid = d2;
        cell = Math.floor((seconds-15)/5) + 3*((seconds-15)%5);
    }
    else if(seconds<45){
        grid = d3;
        cell = Math.floor((seconds-30)/5) + 3*((seconds-30)%5);
    }
    else{
        grid = d4;
        cell = Math.floor((seconds-45)/5) + 3*((seconds-45)%5);
    }
    let secondCell = grid.children[cell];
    if (secondCell.nodeType === 1) {
        secondCell.className = secondCell.classList.contains("bg-gray-200")?
        "text-lg m-0 p-0 text-cyan-500 bg-gray-200 bg-opacity-20":"text-lg m-0 p-0 text-cyan-500"; 
    }
}
setInterval(updateClock,1000);

function updateDigit(element, number) {
    const spans = element.children;
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].nodeType === 1) {
            spans[i].className = number[i] == 1 ? lightMode : darkMode; 
        }
    }
}