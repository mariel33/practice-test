var buttons = document.getElementsByTagName('button');

var salary = document.querySelector('.salary');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function () {
        if ((salary.innerHTML - this.dataset.value) < 0) {
            this.style.backgroundColor = "red";
        } else {
            this.style.backgroundColor = "green";
        }
    })

    buttons[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = "blue";
    })

    buttons[i].addEventListener('click', function () {
        salary.innerHTML = salary.innerHTML - this.dataset.value,
            this.innerHTML = "drafted",
            this.disabled = "disabled";
    })

}



var countDownDate = new Date("May 31, 2018 12:59:59").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60)) / (1000);
    var secondsRound = Math.round(seconds, -1);

    document.getElementById("hours").innerHTML = hours + " Hours ";
    document.getElementById("minutes").innerHTML = minutes + " Minutes ";
    document.getElementById("seconds").innerHTML = secondsRound + " Seconds"
}, 1000);





