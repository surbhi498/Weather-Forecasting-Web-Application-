import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Switch from "@mui/material";
import { AppBar } from "@mui/material";
import ListGroup from "./Components/ListGroup";
import SearchAppBar from "./Components/AppBar";
import React from "react";
import OutlinedCard from "./Components/Padd";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Weather from "./Components/Weather";
function App() {
  const [data, setdata] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <Router>
      <div>
        <Weather setData={setdata} setIsLoading={setIsLoading} />
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <p>Loading...</p>
              ) : (
                data && <OutlinedCard data={data} />
              )
            }
          ></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
