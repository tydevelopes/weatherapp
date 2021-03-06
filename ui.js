class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.cloud = document.getElementById('w-cloud');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.region}`;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_f}℉(${weather.current.temp_c}℃)`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_f}℉(${weather.current.feelslike_c}℃)`;
    this.cloud.textContent = `Cloud: ${weather.current.cloud}`;
    this.wind.textContent = `Wind: ${weather.current.wind_mph}mph ${weather.current.wind_dir}`;
  }
}