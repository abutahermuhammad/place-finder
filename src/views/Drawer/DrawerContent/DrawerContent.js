const DrawerContent = ({ place }) => {
	console.log("Place: ", place);

	return (
		<>
			<div className="m_drawer-content">
				<h4>{place.address}</h4>
				<p className="">
					<strong>City: </strong>
					{place.city}
				</p>
				<p className="postcode">Postcode: {place.postCode}</p>
				<div className="content-inner">
					<span className="variant-text">College</span>
					<span>
						Place Code :{" "}
						<span className="variant-text">DSSR5023 </span>
					</span>
				</div>
			</div>
		</>
	);
};

export default DrawerContent;
