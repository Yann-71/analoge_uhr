
// gets time in seconds, minutes and hours and converts hours from 24 to 12 hour system
function updateClockHands() {
  const now = new Date(); 
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // Convert minutes, hours, and seconds and subtracts 90 degrees
  const secondDegrees = (seconds / 60) * 360 -90;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 -90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 -90;
  
 // converts minutes hours and seconds into degrees
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
}
// Updates the clock periodically
updateClockHands();
setInterval(updateClockHands, 1000);