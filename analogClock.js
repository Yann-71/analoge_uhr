//analog clock with second, minutes and hours
 
function updateClockHands() {
  const now = new Date();  //
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
}

updateClockHands();
setInterval(updateClockHands, 1000);