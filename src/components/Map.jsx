import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../slices/locationsSlice";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// withGoogleMap は react コンポーネントを引数に取り、react コンポーネントをリターンする。こういったものを「高階コンポーネント (Higher Order Components)」と呼ぶ。
const MyMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.key}
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

// ここではコードを短くするためにオブジェクトの分割代入をしている。
export default function Map() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(fetchLocations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyMap
      className="test"
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      onMapLoad={() => {}}
      onMapClick={() => {}}
      markers={locations}
      onMarkerRightClick={() => {}}
    />
  );
}
