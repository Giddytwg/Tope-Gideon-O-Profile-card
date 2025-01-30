// Function to display the current UTC time
function updateUTC() {
    const utcTime = new Date().toUTCString();
    document.getElementById('utc-time').textContent = utcTime;
  }
  
// fetch profile from github
async () => {
    const profileImage = await fetch()
}
  // Update the time on page load and every second
  window.onload = updateUTC;
  setInterval(updateUTC, 1000);