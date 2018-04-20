let getForecastByLatLng = (long, latd) => {
	return new Promise((resolv, reject) => {
		fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d113af5f82393ef553f48314ae9f42e8/${long},${latd}?lang=ru&units=si`)
		.then(r => r.json())
		.then(data => {
			resolv(data);
		});
	})
	
};

export default getForecastByLatLng;