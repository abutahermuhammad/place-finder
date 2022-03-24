import DrawerContent from "./DrawerContent/DrawerContent";
import DrawerSearch from "./DrawerSearch/DrawerSearch";

const Drawer = ({ className, place, setPlace, places, setPlaces }) => {
	return (
		<>
			<div className={`m_drawer ${className ? className : ""}`}>
				{/* Search Component */}
				<DrawerSearch
					places={places}
					setPlaces={setPlaces}
					setPlace={setPlace}
				/>

				{/* Content Component */}
				<DrawerContent place={place} />
			</div>
		</>
	);
};

export default Drawer;
