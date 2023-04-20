import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import axios from "axios";
import CarsList from "./components/CarsList";
import Checkout from "./components/Checkout";
import { Route, Routes } from "react-router-dom";

export interface CarDetail {
  car: string;
  car_color: string;
  car_model: string;
  car_model_year: number;
  car_vin: string;
  id: number;
  price: string;
}

function App() {
  const [carsList, setCarsList] = useState<CarDetail[]>([]);
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  useEffect(() => {
    axios
      .create({
        baseURL: "https://myfakeapi.com/api/cars/",
        headers: {
          head: "Content-Type: application/json",
        },
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzIiwicGFzc3dvcmQiOiIxMjMiLCJ3ZWJzaXRlIjoid3d3Lm15ZmFrZWFwaS5jb20iLCJpYXQiOjE1NzM1NDMzNjcsImV4cCI6MTU3MzU0NTE2N30.95fFJcUIOsTVLrTNxSVdk4loPQnwWx9tBGJIb19o65",
        },
      })
      .get("")
      .then((res) => {
        setCarsList(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              setLocation={setLocation}
              setDropOffDate={setDropOffDate}
              setPickUpDate={setPickUpDate}
            />
          }
        />
        <Route path="/carslist" element={<CarsList carsList={carsList} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
