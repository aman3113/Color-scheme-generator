const hexEl = document.querySelector("#color-picker");
const modeEl = document.querySelector("#color-type");
const colorDisplay = document.querySelector(".color-display");
const hexFooter = document.querySelector(".hex-footer");
const submitBtn = document.querySelector("#getColor-btn");

submitBtn.addEventListener("click", function () {
  let modeValue = modeEl.options[modeEl.selectedIndex].value.toLowerCase();
  let hexValue = hexEl.value.slice(1);
  let url = `
  https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeValue}&count=5
  `;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let colorArray = data.colors;
      let html = "";
      let code = "";
      for (let i = 0; i < colorArray.length; i++) {
        html += `
       <div class="color-image" style="background-color : ${colorArray[i].hex.value}">
       </div>
       `;
        code += `
       <div class="hex-code">
       ${colorArray[i].hex.value}
       </div>
       `;
      }
      colorDisplay.innerHTML = html;
      hexFooter.innerHTML = code;
    });
});
