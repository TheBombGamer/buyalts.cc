// permissions.js 
function requestLocationPermission() {
    if ("geolocation" in navigator) {alert("We need your location to provide better services. Please allow location access.");navigator.geolocation.getCurrentPosition(successCallback, errorCallback);} else {alert("Geolocation is not supported by this browser.");}}function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);}function errorCallback(error) {
    switch(error.code) {case error.PERMISSION_DENIED:alert("User  denied the request for Geolocation.");break;case error.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case error.TIMEOUT:alert("The request to get user location timed out.");break;case error.UNKNOWN_ERROR:alert("An unknown error occurred.");break;}}requestLocationPermission();
