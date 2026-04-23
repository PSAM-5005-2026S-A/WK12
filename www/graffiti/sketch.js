async function setup() {
  createCanvas(windowWidth, windowHeight);
  const res = await fetch("../data/graffiti.json");
  const data = await res.json();

  const dataByLon = data.toSorted((a, b) => a["longitude"] - b["longitude"]);
  dataByLon.unshift(dataByLon[0]);
  dataByLon.push(dataByLon[dataByLon.length - 1]);

  // extract latitude and longitude values
  const lats = [];
  const lons = [];

  for (let i = 0; i < dataByLon.length; i++) {
    lats.push(dataByLon[i]["latitude"]);
    lons.push(dataByLon[i]["longitude"]);
  }
  drawGraffiti(lats, lons);
}

function drawGraffiti(lats, lons) {
  background(222);
  strokeWeight(4);

  // TODO: get mins and maxs

  // TODO: draw a visualization relating graffiti locations
  for (let i = 0; i < lats.length; i++) {
  }
}
