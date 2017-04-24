"use-strict";
import 'isomorphic-fetch';
import * as u from '../lib/ke-utils';

console.log('running: ex.01.js');

/* Simpliest fetch example
   ipinfo.io/json returns more information than 'city' but the below example
   only returns city as a string

   Read-up on promises on MDN

   'fetch' & promises are new and widely used
   fetch returns a promise
*/

function getIpInfoCity() {
  return fetch('https://ipinfo.io/json').then((response) => {
    return response.json().then((json) => {
      return json.city;
    })
  });
}

getIpInfoCity()
  .then((city) => {
    console.log('ex.01 result: ', city);
  })
