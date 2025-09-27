function clock(){
    let clockElement = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = 'AM';

    if(hours > 12){
        hours = hours - 12;
        am_pm = 'PM'
    }

    clockElement.textContent = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)} ${am_pm}`;

}
setInterval(clock, 1000);
clock()