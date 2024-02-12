import "./weatherdaily.css";
import sun from "../../images/sun.png";

const WeatherDaily = () => {
  // temp css
  return (
    <div className="daily-container bg-slate-300">
      <div className="daily-content">

        {/* potential basic layout */}
        <img src={sun} alt = "sun" />
        <div>temperature</div>
        <div>\/</div>
        </div>
    </div>
  );
};

export default WeatherDaily;
