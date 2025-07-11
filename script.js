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