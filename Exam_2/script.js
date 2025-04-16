// Use a JavaScript array to hold the names of items that you associate with the Spring season. Using a JavaScript loop print all those items on the screen, one item per line. 
const springArray = [
    "Sakura <span>aRr</span> (cherry blossoms)",
    "Ume (plum blossoms)",
    "Hanami (flower-viewing picnics)",
    "Shinryoku (fresh green leaves)",
    "Ichigo Daifuku (mochi with whole strawberry)",
    "Takenoko (bamboo shoots)",
    "Strawberries (ichigo)",
    "Sakura Mochi (cherry blossom rice cake)",
    "Sakura Wagashi (seasonal flower-shaped sweets)",
    "Yozakura (nighttime cherry blossom viewing)",
    "Haru Ichiban (first spring wind)"
  ];
let springArrayTxt = "";
let now = new Date();
let currentTime = now.toLocaleTimeString();

document.addEventListener("DOMContentLoaded", function () {
    createSpringArray();
    checkSpringArray();
    greetingMsg();
    displayWeekday();
});

function createSpringArray() {

    for (let x in springArray) {
        springArrayTxt += springArray[x] + "<br>"
    }
    document.getElementById("spring-array").innerHTML = springArrayTxt;
}

// Also check if the number of items in the array is more than 10, then have the website print "Many Spring items!" else print "Not too many Spring items!"
function checkSpringArray() {
    if (springArray.length < 11) {
        document.getElementById("spring-array-quantity-message").innerHTML = "<b>Not too many Spring items!</b>";
    } else {
        document.getElementById("spring-array-quantity-message").innerHTML = "<b>Many Spring items!</b>";
    }
}

// Use JavaScript if-else structure to check the time of the day and print an appropriate greeting message determined by time of the day, e.g. "Good Morning" for morning time, "Good afternoon" for afternoon time and "Good evening" for evening time.
function greetingMsg() {
    let hours = now.getHours();
    let greetingMsg = "";
    let greetingPrompt = "";
    if (hours < 12) {
        greetingPrompt = "Good Morning!"
    } else if (hours >= 18) {
        greetingPrompt = "Good Evening!"
    } else {
        greetingPrompt = "Good Afternoon!"
    }
    greetingMsg = "<b>" + greetingPrompt + " It is " + currentTime + "</b>.<br><i>Before 12pm the greeting 'Good Morning' is displayed.<br>Between 12pm and 6pm the greeting 'Good Afternoon!' is displayed.<br>After 6pm the greeting 'Good Evening!' is displayed.</i>";
	document.getElementById("greeting-msg").innerHTML = greetingMsg;
}

// Use JavaScript if-else structure to check the day of the week and print either "Happy Weekday" if it is a weekday, or "Happy Weekend" if it is a weekend.
function displayWeekday() {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    weekday = weekdays[now.getDay()];
    weekdayOrWeekEnd = ((now.getDay() === 0 || now.getDay() === 6) ? "Happy Weekend!" : "Happy Weekday!");
    document.getElementById("weekday").innerHTML = "<b>" + weekdayOrWeekEnd + " It's " + weekday + ".</b>";
}

// Place the webpage in a subfolder called exam_2 on your site, and then submit the link to the file.