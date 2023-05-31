import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <h2>Weather Data</h2>
        <h2>{props.data.name}</h2>
        <h3>Main Weather Information</h3>
        <p>Temperature: {props.data.main.temp}</p>
        <p>Feels Like: {props.data.main.feels_like}</p>
        <p>Minimum Temperature: {props.data.main.temp_min}</p>
        <p>Maximum Temperature: {props.data.main.temp_max}</p>
        <p>Pressure: {props.data.main.pressure}</p>

        <h3>Weather Details</h3>
        <ul>
          {props.data.weather.map((item, index) => (
            <li key={index}>
              <h4>{item.main}</h4>
              <p>{item.description}</p>
              <img
                src={`https://openweathermap.org/img/w/${item.icon}.png`}
                alt="Weather Icon"
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
