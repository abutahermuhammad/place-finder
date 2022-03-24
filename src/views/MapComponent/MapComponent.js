import Map, { Marker } from "react-map-gl";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// Set your mapbox token here
const MapComponent = ({ longitude, latitude }) => {
	return (
		<>
			<div className="m_map">
				<Map
					initialViewState={{
						scrollZoom: false,
						longitude: longitude,
						latitude: latitude,
						zoom: 10
					}}
					style={{ width: "100vw", height: "100vh", zIndex: 0 }}
					mapStyle="mapbox://styles/mapbox/streets-v9"
					mapboxAccessToken="pk.eyJ1IjoiYWJ1dGFoZXIxODAiLCJhIjoiY2wxM3cyeWQ1MHByaDNrbjF2dXVhNHRkYiJ9.98rVkMTSQufmhnYjHaUy-g"
				>
					<Marker
						longitude={longitude}
						latitude={latitude}
						pitchAlignment="map"
						anchor="bottom"
					>
						<FaMapMarkerAlt />
					</Marker>
				</Map>
			</div>
		</>
	);
};

export default MapComponent;
