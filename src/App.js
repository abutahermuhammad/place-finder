import "./styles.css";
import MapComponent from "./views/MapComponent/MapComponent";
import Drawer from "./views/Drawer/Drawer";
import DrawerToggler from "./views/DrawerToggler/DrawerToggler";
import { useState } from "react";

export default function App() {
	const [longitude, setLongitude] = useState("91.87210645526648");
	const [latitude, setLatitude] = useState("24.899226283916764");
	const [toggler, setToggler] = useState(false);
	const [places, setPlaces] = useState([]);
	const [place, setPlace] = useState({});
	const [theme, setTheme] = useState("light");

	return (
		<>
			<div className={theme}>
				<DrawerToggler
					toggleState={toggler}
					setToggleState={setToggler}
					theme={theme}
					setTheme={setTheme}
				/>
				<MapComponent
					longitude={place.longitude || longitude}
					latitude={place.latitude || latitude}
				/>
				<Drawer
					place={place}
					setPlace={setPlace}
					places={places}
					setPlaces={setPlaces}
					className={toggler ? "" : "not-active"}
				/>
			</div>
		</>
	);
}
