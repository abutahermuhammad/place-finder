import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun } from "react-icons/fi";

const DrawerToggler = ({ toggleState, setToggleState, theme, setTheme }) => {
	const toggleHandler = () => {
		toggleState ? setToggleState(false) : setToggleState(true);
	};

	const themeHandler = () => {
		theme === "dark" && setTheme("light");
		theme === "light" && setTheme("dark");
	};

	const left = toggleState ? "500px" : "";

	return (
		<>
			<div className="m_toggler" style={{ left: left }}>
				<button onClick={toggleHandler}>
					<GiHamburgerMenu />
				</button>
				<button onClick={themeHandler}>
					<FiSun />
				</button>
			</div>
		</>
	);
};

export default DrawerToggler;
