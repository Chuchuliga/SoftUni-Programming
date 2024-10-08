function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function areaAndVolumeCalculator(area, vol, boxesAsJSON) {
  const boxes = JSON.parse(boxesAsJSON);

  const result = boxes.map((box) => ({
    area: area.call(box),
    volume: vol.call(box),
  }));

  return result;
}

console.log(areaAndVolumeCalculator(area, vol, `[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]`));
// [
//   { area: 2, volume: 20 },
//   { area: 49, volume: 490 },
//   { area: 10, volume: 100 },
// ];