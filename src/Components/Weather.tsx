import * as React from "react";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
export default function Weather(props) {
  const [city, setcity] = React.useState("");
  const handleInput = (event) => {
    setcity(event.target.value);
    console.log("hi");
  };
  const fetchData = async (cityName) => {
    try {
      setTimeout(async () => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e0a8172f24cd2b1812afd40a1ea9bd5c`
        );
        console.log(response.data);
        props.setData(response.data);
        props.setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      props.setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setIsLoading(true);
    fetchData(city);
    console.log("Surbhi here");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter city:
          <input type="text" value={city} onChange={handleInput} />
        </label>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}
