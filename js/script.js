// tag h1 timer
const time = document.querySelector(".set-time h1");
let days = 10; // days
let hour = 24; // hours
let minutes = 59; // minutes
let seconds = 59; // seconds

// onload page event
window.addEventListener("load", () => {
    // interval
    setInterval(() => {
        // inner h1 timer
        time.innerHTML = `${days} : ${hour} : ${minutes} : ${seconds--}`;
        // conditionals
        if (seconds == '0') {
            seconds = 59;
            minutes--;
            if (minutes == '0') {
                minutes = 59;
                hour--;
                if (hour == '0') {
                    hour = 59;
                    days--;
                    if (days == '0') {
                        seconds = 0;
                        minutes = 0;
                        hour = 0;
                        days = 0;
                        data.style.color = "red";
                    }
                }
            }
        }
    }, 0999)
})