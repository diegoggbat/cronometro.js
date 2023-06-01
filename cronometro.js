const minutesEl = document.querySelector("#minutos");
const secondsEl = document.querySelector("#segundos");
const milesecondsEl = document.querySelector("#milesimos");
const startbtnEl = document.querySelector("#startbtn");
const pausebtnEl = document.querySelector("#pausebtn");
const resumebtnEl = document.querySelector("#resumebtn");
const resetbtnEl = document.querySelector("#restbtn");


let interval;
let minutos = 0;
let segundos = 0;
let milesimos = 0;
let ispaused = false;

startbtnEl.addEventListener("click", startTimer);
pausebtnEl.addEventListener("click", pauseTimer);
resumebtnEl.addEventListener("click", resumeTimer);
resetbtnEl.addEventListener("click", resetTimer)
  
function startTimer(){
   
    interval = setInterval(() => {
            if(!ispaused){
                milesimos += 10;
    
                if(milesimos === 1000) {
                    segundos++;
                    milesimos = 0;
                }
                if(segundos === 60){
                    minutos++;
                    segundos = 0;
                }
                minutesEl.textContent = formatTime(minutos);
                secondsEl.textContent = formatTime(segundos);
                milesecondsEl.textContent = formatMilesegundos(milesimos);
    
            }
    },10);
    startbtnEl.style.display = "none";
    pausebtnEl.style.display = "block";
}
function pauseTimer(){
    ispaused = true;
    pausebtnEl.style.display = "none";
    resumebtnEl.style.display = "block"
}
function resumeTimer(){
    ispaused = false;
    pausebtnEl.style.display = "block";
    resumebtnEl.style.display = "none";
}
function resetTimer(){
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    milesimos = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milesecondsEl.textContent = "000";

    startbtnEl.style.display = "block";
    pausebtnEl.style.display = "none";
    resumebtnEl.style.display = "none"


}



function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
function formatMilesegundos(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time
}