"use-strict";
import * as u from '../lib/ke-utils';
import Weather from './weather'


/*
   This example uses the same technique with fetch and promise and adds the
   following:
   > fetch/API call is in a separate module
   > uses both 2 fetches
     > getIpInfoCity() - gets the city and passes it to the next call
     > getWeather() - receives the city form getIpInfoCity() and uses it
       in its url to openweathermap.org
   > only weather is returned

   The nexted promises are used to ensure the cell to ipinfo is complete before
   the call to openweathermap is made

*/

console.log('running ex.03.js')

Weather('danville').then(function(json) {
  console.log('ex03 result: ', json);
});
