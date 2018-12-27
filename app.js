// Init storage object
const storage = new Storage;
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);
// Init ui object
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  // Set location in local storage
  storage.setLocationData(city);
  
  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}