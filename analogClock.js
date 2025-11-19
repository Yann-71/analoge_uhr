/**
 * Analog Clock Application
 * Displays current time with hour, minute, and second in live time
 * 
 */

/**
 * Initializes the analog clock
 * Sets up event listeners and starts the clock update cycle
 */
function initializeClock() {
  updateClockHands();
  setInterval(updateClockHands, 1000);
  window.addEventListener('resize', updateClockSize);
}

/**
 * Updates the rotation of all clock hands based on current time
 */
function updateClockHands() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  
  setHandRotation('second-hand', secondDegrees);
  setHandRotation('minute-hand', minuteDegrees);
  setHandRotation('hour-hand', hourDegrees);
}

/**
 * Sets the rotation of a clock hand
 * @param {string} handId - The ID of the clock hand element
 * @param {number} degrees - The rotation angle in degrees
 */
function setHandRotation(handId, degrees) {
  const hand = document.getElementById(handId);
  if (hand) {
    hand.style.transform = `rotate(${degrees}deg)`;
  }
}

/**
 * Updates clock size on window resize for responsiveness
 */
function updateClockSize() {
  const clock = document.getElementById('analog-clock');
  if (clock) {
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.8;
    clock.style.maxWidth = `${size}px`;
  }
}

// Start the clock when DOM is ready
document.addEventListener('DOMContentLoaded', initializeClock);