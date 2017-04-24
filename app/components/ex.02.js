"use-strict";
import 'isomorphic-fetch';
import * as u from '../lib/ke-utils';

const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';

console.log('running: ex.02.js');

/* A little more complexity

   This example use a more complex API call be is otherwise the same as ex.01

   It returns the full api result as a JSON object
*/

function getWeather(city) {
  return fetch(`${openweathermapURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`)
    .then((response) => {
      return response.json();
    })
}

getWeather('dublin')
  .then((weather) => {
    console.log('ex.02 result: ', weather);
  })
