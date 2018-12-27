class Weather {
  constructor(query) {
    this.apiKey = '3138b7b7f05b4ddd810202132182612';
    this.query = query;
  }

  // Fetch weather from API
  async getWeather() {
    const weatherURL = `https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.query}`
    const response = await fetch(weatherURL);
    const data = await response.json();

    return data;
  }

  // Change weather location
  changeLocation(query) {
    this.query = query;
  }
}


/**
 * Query parameter based on which data is sent back. It could be following:

Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
city name e.g.: q=Paris
US zip e.g.: q=10001
UK postcode e.g: q=SW1
Canada postal code e.g: q=G2J
metar:<metar code> e.g: q=metar:EGLL
iata:<3 digit airport code> e.g: q=iata:DXB
auto:ip IP lookup e.g: q=auto:ip
IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1

 */