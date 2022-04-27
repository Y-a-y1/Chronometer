const timer = document.getElementById('Stopwatch')
var miliseconds = 0
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
let startTimeout 

function stopTimer() {
    stopTimerCycle()
    if (stoptime == false) {
        stoptime = true;
    }
}
function timerCycle() {
    if (stoptime == false) {
        miliseconds = parseInt(miliseconds)
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        
        miliseconds = miliseconds +5

        if (miliseconds == 1000) {
            sec = sec + 1;
            miliseconds = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec + ':' + miliseconds

       startTimeout = setTimeout("timerCycle()", 1)
    }
}

function resetTimer() {
    stopTimerCycle()
    stopTimer()
    timer.innerHTML = '00:00:00:000';
    stoptime = true
    miliseconds = 0
    hr = 0
    sec = 0
    min = 0
}

function stopTimerCycle() {
    clearTimeout(startTimeout)
}