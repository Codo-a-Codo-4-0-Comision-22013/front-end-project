import "./darkmode.css";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const DarkMode = ( {isOn}) => {
  const { dark, toggleDark } = useContext(ThemeContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    toggleDark(e, dark);
  };

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input checked={isOn} onChange={handleOnClick} type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;