// Get the current UTC time
function getUtcTime() {
    const date = new Date();
    const utcTime = date.toUTCString().replace("GMT", "UTC");
    return utcTime;
  }
  
  // Create a function to update the time display
  function update_time() {
    const currentTime = getUtcTime();
    document.getElementById("current-time").innerHTML = currentTime;
  }
  
  // Use a timer to call the update function every second
  setInterval(update_time, 1000);