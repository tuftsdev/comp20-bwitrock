
var map;
function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
                center: {lat: 42.352271, lng: -71.05524200000001},
                zoom: 8
        });
        console.log("in initMap")
        //var map = document.getElementById("map");
        //map.innerHTML = "hello";
}