function getIPInfo() {
    fetch("https://freeipapi.com/api/json", {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result);
            document.getElementById("ipAddress").innerHTML = data.ipAddress;
            document.getElementById("coordinates").innerHTML = `${data.latitude}, ${data.longitude}`;
            document.getElementById("adressLocation").innerHTML = `${data.countryName}, ${data.cityName}, ${data.regionName}`;
            document.getElementById("isptimezone").innerHTML = `${data.timeZone}, ${data.timeZones[0]}`;
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            document.getElementById("lastUpdate").innerHTML = "<small>Last Update : " + today.toLocaleString() + "</small>";
        })
        .catch(error => console.log('error', error));
}


