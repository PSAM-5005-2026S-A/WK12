let mImg;

function preload() {
  mImg = loadImage("https://raw.githubusercontent.com/PSAM-5005-2026S-A/5005-utils/refs/heads/main/datasets/image/flowers/00_001.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  noStroke();

  // TODO: plot sorted colors
  // TODO: plot colors with x := f(R), y := f(G)

  for (let i = 0; i < pixels.length; i++) {
    const x = int(i % mImg.width);
    const y = int(i / mImg.width);
  }
}
