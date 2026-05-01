async function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1);
  const res = await fetch("https://raw.githubusercontent.com/PSAM-5005-2026S-A/5005-utils/refs/heads/main/datasets/json/wines.json");
  const data = await res.json();

  // extract values for price and points
  const prices = [];
  const points = [];

  for (let i = 0; i < data.length; i++) {
    prices.push(data[i]["price"]);
    points.push(data[i]["points"]);
  }
  drawWines(prices, points);
}

function drawWines(prices, points) {
  background(0);
  noFill();
  stroke(190, 20, 255);

  const priceMin = min(prices);
  const priceMax = max(prices);
  const pointsMin = min(points);
  const pointsMax = max(points);

  // draw a visualization relating price to points
  for (let i = 0; i < prices.length; i++) {
    let x = map(points[i], pointsMin, pointsMax, 20, width - 20);
    let d = map(prices[i], priceMin, priceMax, 20, width - 20);
    ellipse(x, height / 2, d, d);
  }
}
