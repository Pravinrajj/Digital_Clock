# Digital_Clock
## Date:
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Digital Clock</title>
</head>
<body>
    <div class="container">
    <h1>Digital Clock</h1>
    <p class="subtitle" style="margin-bottom: 0;">Live Digital Clock</p>
    <div id="clock" style="margin-top: 2px;"></div>
    <span id="apm"></span>
    <div id="date"></div>
    <button id="toggle">Switch to 24-Hour</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```css
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #1e1e2f;
    color: #f0f0f0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 20%;
    text-align: center;
    background: #2c2c3f;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

#clock {
    font-size: 60px;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 20px 0;
    transition: color 0.3s ease;
    display: inline-block;
}

#apm {
    font-size: 20px;
    margin-bottom: 10px;
}

#date {
    font-size: 18px;
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    font-weight: 600;
    background-color: #4db4abdf;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #19bfb1;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
}
```
## JS Code:
```
const clock = document.getElementById("clock");
const apm = document.getElementById("apm");
const dateEl = document.getElementById("date");
const toggle = document.getElementById("toggle");

let is24Hour = false;

function updateClock() {
    const now = new Date();
    
    let h = now.getHours();
    console.log(h);
    const m = now.getMinutes().toString().padStart(2, "0");
    const s = now.getSeconds().toString().padStart(2, "0");

    let per = "";
    if (!is24Hour) {
        h = h % 12 || 12;
        per = h >= 12 ? "PM" : "AM";
    }

    const Hour = h.toString().padStart(2, "0");
    clock.innerHTML = `${Hour}<span class="colon">:</span>${m}<span class="colon">:</span>${s}`;
    apm.textContent = is24Hour ? "" : per;

    const day = now.toLocaleDateString(undefined, {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    dateEl.textContent = day;
}
setInterval(updateClock,1000);
updateClock();

toggle.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggle.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateClock();
});
```
## Output:
<img width="1350" height="664" alt="image" src="https://github.com/user-attachments/assets/b6f81cca-7ea4-4b7a-ac18-32bfc5c61c35" />

## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
