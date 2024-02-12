import WeatherDaily from "../WeatherDaily/WeatherDaily";
import "./weatherweekly.css";

const WeatherWeekly = () => {
  const days = Array.from(Array(7));
  return (
    <div id="weather-weekly" className="weekly-container border-2">
      <h1>Weekly</h1>
      {days.map((_, i) => (
        <WeatherDaily key={`weather-${i}`} />
      ))}
    </div>
  );
};

export default WeatherWeekly;
