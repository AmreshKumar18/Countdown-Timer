var result = document.querySelectorAll('input');

function countDown() {
    let futureDate = new Date('21 Jan 2023 08:27:20 PM');
    let currentDate = new Date();
    let myDate = (futureDate - currentDate)/1000;

    let days = Math.floor(myDate/60/60/24);
    let hours = Math.floor(myDate/60/60)%24;
    let minutes = Math.floor(myDate/60)%60;
    let second = Math.floor(myDate)%60;

    if (myDate < 0) return;

    result[0].value = days;
    result[1].value = hours;
    result[2].value = minutes;
    result[3].value = second;
}
countDown()

setInterval(countDown, 1000)