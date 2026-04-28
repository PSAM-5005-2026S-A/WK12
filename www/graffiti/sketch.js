async function setup() {
  createCanvas(windowWidth-1, windowHeight-1);
  const res = await fetch("../data/graffiti.json");
  const data = await res.json();
  // console.log(data);

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
  console.log(lats);
  console.log(lons);
  drawGraffiti(lats, lons);
}

function drawGraffiti(lats, lons) {
  background(222);
  strokeWeight(2);

  // TODO: get mins and maxs
  const minLon = min(lons);
  const maxLon = max(lons);
  const minLat = min(lats);
  const maxLat = max(lats);

  // TODO: draw a visualization relating graffiti locations
  beginShape();
  for (let i = 0; i < lats.length; i++) {
    const x = map(lons[i], minLon, maxLon, 0, width);
    const y = map(lats[i], minLat, maxLat, height, 0);

    fill(0, 0, 0);
    ellipse(x, y, 4);
    curveVertex(x,y);
  }
  noFill();
  endShape(OPEN);
}
