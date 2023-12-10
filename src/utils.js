function componentToHex(color) {
  let hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(red, green, blue) {
  return (
    "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue)
  );
}

export default rgbToHex;
