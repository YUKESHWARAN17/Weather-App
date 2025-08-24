import React, { useState } from "react";
//import { useState } from "react";
import axios from "axios";

function Weather() {
    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61aafb4f77be7b72dcf6d6bc06d45d22`)

        weatherdata.then(function (success) {
            console.log(success.data.weather[0].main)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)


        })

    }

    return (
        <div className="p-20 text-center">
            <div className="bg-gray-300 p-10 rounded-md">
                <h1 class="text-4xl font-bold">
                    <span class=" text-violet-600">Weather</span>
                    <span class="text-red-600"> Report</span>
                </h1>

                <p className="text-2xl  m-2">Check your city weather here!</p>
                <input onChange={handleCity} type="text" placeholder="Enter the city name" className=" p-2 mt-2 border border-black rounded" />
                <div class="flex justify-center">
                    <button class="px-4 py-2 bg-green-500 text-white rounded m-2" onClick={getWeather} > Get Report</button>
                </div>

                <div className="text-center">
                    <h1><b>WEATHER :  </b>{weather}</h1>
                    <p><b>TEMPERATURE : </b>{temp}</p>
                    <p><b>DESCRIPTION : </b>{desc}</p>
                </div>

            </div>


        </div>
    )
};

export default Weather;