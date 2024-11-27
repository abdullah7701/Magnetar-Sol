const calculateY = (x) => {
  return (
    -0.1428571 +
    0.127381 * x -
    0.03392857 * Math.pow(x, 2) -
    0.004166667 * Math.pow(x, 3)
  );
};

export const calculateCardPosition = (index, parentYPosition) => {
  console.log(parentYPosition);
  const height = window.scrollY - parentYPosition + 480 - 450 * index;
  let x = 5 - height / 200;
  x = Math.max(-3.5 + index * 2.3, x);
  const y = calculateY(x);
  const rotationX = x / -120;
  const rotationY = x / 80;
  const rotationZ = 0;
  const isHighlighted = false;
  return { x, y, rotationX, rotationY, rotationZ, isHighlighted };
};
