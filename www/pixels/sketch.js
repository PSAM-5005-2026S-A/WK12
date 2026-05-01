let mImg;

function preload() {
  mImg = loadImage("https://raw.githubusercontent.com/PSAM-5005-2026S-A/5005-utils/refs/heads/main/datasets/image/flowers/00_001.png");
}

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1);
  mImg.loadPixels();

  const pixels = [];

  for (let i = 0; i < mImg.pixels.length; i += 4) {
    pixels.push([
      mImg.pixels[i + 0],
      mImg.pixels[i + 1],
      mImg.pixels[i + 2],
    ]);
  }

  drawPixels(pixels);
}

function drawPixels(pixels) {
  background(222);
  strokeWeight(2);

  image(mImg, 10, 10);

  // TODO: plot sorted colors
  const pixelsSorted = pixels.toSorted((a,b) => b[0] - a[0]);

  push();
  translate(20 + mImg.width, 10);
  for (let i = 0; i < pixelsSorted.length; i++) {
    const x = int(i % mImg.width);
    const y = int(i / mImg.width);
    const mc = pixelsSorted[i];
    stroke(mc[0], mc[1], mc[2]);
    point(x,y);
  }
  pop();

  // TODO: plot colors with x := f(R), y := f(G)
  push();
  translate(10, 20 + mImg.height);
  noStroke();
  fill(255);
  rect(0, 0, 2*mImg.width+10, 2*mImg.height+10);
  for (let i = 0; i < pixelsSorted.length; i++) {
    const mc = pixelsSorted[i];
    const x = map(mc[0], 0, 255, 0, 2*mImg.width+10);
    const y = map(mc[1], 0, 255, 0, 2*mImg.height+10);
    stroke(mc[0], mc[1], mc[2]);
    point(x,y);
  }
  pop();
}
