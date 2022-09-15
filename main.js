var hour = document.getElementById("hour");
var min = document.getElementById("minute");
var sec = document.getElementById("second");

function getClock(){
    var allDate = new Date();
    var currentHours = allDate.getHours();
    var currentMinutes = allDate.getMinutes();
    var currentSeconds = allDate.getSeconds();
    console.log(currentHours,currentMinutes,currentSeconds)

    hour.style.transform =`rotate(${(currentHours/12)*360}deg)`;
    min.style.transform =`rotate(${(currentMinutes/60)*360}deg)`;
    sec.style.transform =`rotate(${(currentSeconds/60)*360}deg)`;

}
getClock();
setInterval(getClock,1000)