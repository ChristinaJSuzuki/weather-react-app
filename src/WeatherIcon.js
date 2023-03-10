import React from "react";
import overcastDay from "@bybas/weather-icons/design/fill/animation-ready/overcast-day.svg";
import overcastNight from "@bybas/weather-icons/design/fill/animation-ready/overcast-night.svg";
import cloudy from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import clearDay from "@bybas/weather-icons/design/fill/animation-ready/clear-day.svg";
import clearNight from "@bybas/weather-icons/design/fill/animation-ready/clear-night.svg";
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import partlyCloudyNight from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night.svg";
import rain from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import partlyCloudyDayRain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-rain.svg";
import partlyCloudyDaySnow from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-snow.svg";
import partlyCloudyNightSnow from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-snow.svg";
import thunderstormsDay from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms-day.svg";
import thunderstormsNight from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms-night.svg";
import mist from "@bybas/weather-icons/design/fill/animation-ready/mist.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyCloudyDay,
    "02n": partlyCloudyNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": overcastDay,
    "04n": overcastNight,
    "09d": rain,
    "09n": rain,
    "10d": partlyCloudyDayRain,
    "10n": partlyCloudyNightRain,
    "11d": thunderstormsDay,
    "11n": thunderstormsNight,
    "13d": partlyCloudyDaySnow,
    "13n": partlyCloudyNightSnow,
    "50d": mist,
    "50n": mist,
  };

  return <img src={codeMapping[props.code]} alt="{props.alt}" />;
}
