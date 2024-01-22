

let year = document.querySelector(".year")
let day = document.querySelector(".day")
let month = document.querySelector(".month")


let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let daysName = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday",
                    "Saturday"];
let monthsName = ["January","Februuary","March","April","May","June","July",
                    "August","September","October","November","December"];

setInterval(()=>{
    let currentTime = new Date ();
    
    day.textContent = daysName[currentTime.getDay()];
    month.textContent = monthsName[currentTime.getMonth()];
    year.textContent = currentTime.getFullYear();

    let hours = currentTime.getHours() % 12 || 12;
    let pmam = currentTime.getHours()>= 12 ? "PM" : "AM";

    
    hrs.textContent = (hours <10?"0":"") + hours ;
    min.textContent = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
    sec.textContent = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();

    document.querySelector(".pmam").textContent = pmam;
});