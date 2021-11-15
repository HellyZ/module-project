const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

function capitalize(string) {
  return string
    .split(/\s/)
    .map(function (item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(" ");
}

export { animate, capitalize };
