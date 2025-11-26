"use strict";

let cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];

function coolCities(arr) {
  return arr.filter((city) => city.temperature < 70);
}
console.log(coolCities(cities));
