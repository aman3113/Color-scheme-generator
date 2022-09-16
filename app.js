const hexEl = document.querySelector("#color-picker");
const modeEl = document.querySelector("#color-type");
modeEl.addEventListener("input", function () {
  console.log(modeEl.Value);
});

// fetch(" https://www.thecolorapi.com/scheme?")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
