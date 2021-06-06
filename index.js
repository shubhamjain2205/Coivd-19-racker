function updateMap() {
    console.log("Updatingmap with realtime data")
    fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp)
            rsp.forEach(element => {
                latitude = element.countryInfo.lat;
                longitude = element.countryInfo.long;

                cases = element.active;
                if (cases > 1000000) {
                    color = "rgb(255,0,0)";
                }

                else if (cases > 100000) {
                    color = "rgb(266,101,0)";
                }

                else if (cases > 10000) {
                    color = "rgb(208,255,0)";
                }
                else {
                    color = "rgb(50,170,0)";
                }

              

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

let interval = 20000;
setInterval(updateMap(), interval);


