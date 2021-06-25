const alarmSubmit = document.getElementById("alarmSubmit");

// Add an Event Listener to the Submit Button
alarmSubmit.addEventListener("click", setAlarm);

var audio = new Audio(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);

// Function to Play the Alarm Ring Tone
function ringBell() {
  audio.play();
}

// Function will run whenever Alarm is set
function setAlarm(e) {
  e.preventDefault(); // Page will not reload
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  now = new Date();
  let timeToAlarm = alarmDate - now; // Future time - Present time
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      ringBell();
    }, timeToAlarm);
  }
}
