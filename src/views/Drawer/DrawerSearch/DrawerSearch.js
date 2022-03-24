import { useState } from "react";

const DrawerSearch = ({ className, setPlace, places, setPlaces }) => {
	const [searchPlace, setSearchPlace] = useState("");

	const searchHandler = (e, query) => {
		e.preventDefault();
		let url = `https://barikoi.xyz/v1/api/search/autocomplete/MzExNzoyVzlQNlc4VFpE/place?q=${searchPlace}`;

		fetch(url)
			.then((res) => res.json())
			.then((date) => setPlaces(date.places));
	};
	console.log(places);

	return (
		<>
			<form
				className="m_search-form"
				onSubmit={(e) => searchHandler(e, searchPlace)}
			>
				<input
					type="text"
					placeholder="Search your destination"
					className="m_form-place"
					value={searchPlace}
					onChange={(e) => setSearchPlace(e.target.value)}
				/>
				<input type="submit" value="Search" className="m_form-submit" />
			</form>

			<div className="m_search-resuelt">
				{places &&
					places.map((el) => (
						<div
							className="m_search-resuelt-item"
							key={el.id}
							onClick={() => {
								setPlace(el);
								setPlaces([]);
							}}
						>
							<h4>{el.address}</h4>
						</div>
					))}
			</div>
		</>
	);
};

export default DrawerSearch;
