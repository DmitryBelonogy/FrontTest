function getCity(long, latd) {
	let GOOGLE_API_KEY = 'AIzaSyDa7DCL2NO9KMPd9DYVk_u3u0wCbm0XXFY';
  return new Promise((resolve, reject) => {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latd + ',' + long + '&key=' + GOOGLE_API_KEY)
		.then((req) => {
			return req.json();
		})
		.then((data) => {
			let locationName = data.results[0].address_components[2].long_name;
      resolve(locationName);
		});
  })	
}

export default getCity;