class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Miami';
  }

  getLocationData() {
    const storedCity = localStorage.getItem('city');
    if (storedCity) {
      this.city = storedCity;
    } else {
      this.city = this.defaultCity;
    }

    return {
      city: this.city
    };
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}