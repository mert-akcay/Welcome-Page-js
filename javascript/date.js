

const d = new Date();
let username = prompt("Adınızı Giriniz :")
let welcome_text = document.querySelector('#hello')
let day_text = document.querySelector('#day')
let time_text = document.querySelector('#time')
let last_text = document.querySelector('#last')


let dayCurrent = d.getDay();
let currentDay;


switch (dayCurrent) {
    case 1:
        currentDay = "Monday"
    case 2:
        currentDay = "Tuesday"
    case 3:
        currentDay = "Wednesday"
    case 4:
        currentDay = "Thursday"
    case 5:
        currentDay = "Friday"
    case 6:
        currentDay = "Saturday"
    case 7:
        currentDay = "Friday"
}
console.log(typeof username)

if (username.length === 0) {
    time_text.classList.add('d-none')
    welcome_text.innerHTML = `You have to give me a proper name!`
}
else if (username.length <= 2) {
    time_text.classList.add('d-none')
    welcome_text.innerHTML = `Sorry, your name is too short...`
}
else if (Number(username)) {
    time_text.classList.add('d-none')
    welcome_text.innerHTML = `Sorry, this is not a name...`
}
else{
    welcome_text.innerHTML = `Hello ${username}, Welcome !`
    day_text.innerHTML = `Today is, ${currentDay}.`
    last_text.classList.replace('d-none','d-xs')
}   



