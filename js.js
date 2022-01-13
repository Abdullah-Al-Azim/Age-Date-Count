let resultShow = document.getElementById("result___text");
function ageINDays(){
    let birthYear = prompt("type your Birth Year bro...");
    const year = new Date();
    let currentYear = year.getFullYear();
    let totalDays = (currentYear - birthYear) * 365;
    let mainresult = resultShow.innerHTML = "You are" + " " + totalDays + " " + "days old!!";
}

function reset(){
    resultShow.style.display = "none";
}