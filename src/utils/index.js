import axios from "axios";

export async function getMarkers() {
  const { data: locations } = await axios.get("/api/locations"); // ES6 で追加された分割代入とエイリアスを使用
  const markers = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
  }));
  return markers;
}
