const timer = document.getElementById('Stopwatch')
let stoptime = true;
let startTimeout
let starttime
function startTimer() {
    if (stoptime == true) {
        stoptime = false
        starttime = new Date().getTime()
        timerCycle()
    }
}
function stopTimer() {
    stopTimerCycle()
    if (stoptime == false) {
        stoptime = true;
    }
}
function timerCycle() {
    if (stoptime == false) {
        var timeSincePress = new Date().getTime() - starttime
        sec = timeSincePress / 1000
        sec = math(sec)
        min = timeSincePress / 1000 / 60
        min = math(min)
        hr = timeSincePress / 1000 / 60 / 60
        hr = math(hr)
        ms = timeSincePress - sec * 1000
        sec = sec - min * 60
        min = min - hr * 60

        if (ms >= 1000) {
            ms = 999
        }
        sec = getFixedValue(sec, 10, '0')
        min = getFixedValue(min, 10, '0')
        hr = getFixedValue(hr, 10, '0')
        ms = getFixedValue(ms, 100, '0')
        ms = getFixedValue(ms, 10, '0')
console.log ("ms",ms)
        timer.innerHTML = hr + ':' + min + ':' + sec + ':' + ms

        startTimeout = setTimeout("timerCycle()", 1)
    }
}

function resetTimer() {
    stopTimerCycle()
    stopTimer()
    timer.innerHTML = '00:00:00:000';
    stoptime = true
    ms = 0
    hr = 0
    sec = 0
    min = 0
}

function stopTimerCycle() {
    clearTimeout(startTimeout)
}
function math(number) {
    return Math.floor(number)
}
function getFixedValue(giventime, biggerthan, addnumber) {
    if (giventime < biggerthan) {
        giventime = addnumber + giventime
    }
    return giventime
}