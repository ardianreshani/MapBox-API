const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYXJkaWFuMTMzIiwiYSI6ImNrdmZuOHhsaDFjYjEyeG1wczFnaXdvNGsifQ.N2fIEavMCD1lWa-vAKialw";

navigator.geolocation.getCurrentPosition(succsesLocation, errorLocation, {
  enableHighAccuracy: true,
});
function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 13,
  });
  const marker1 = new mapboxgl.Marker().setLngLat(centerPosition).addTo(map);
  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);
  map.addControl(
    new MapboxDirections({
      accessToken: MAPBOX_ACCESS_TOKEN,
    }),
    "top-left"
  );
}

function succsesLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  console.error("error");
}
