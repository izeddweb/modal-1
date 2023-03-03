// Set Variable

let buttons = document.querySelectorAll(".btn");
let divs = document.querySelectorAll("div[data-name]");

// Set Function

buttons.forEach(function (button) {
  let dataButton = button.getAttribute("data-name");
  button.onclick = function () {
    buttons.forEach(function (button) {
      button.classList.remove("clicked");
      divs.forEach(function (div) {
        let dataDiv = div.getAttribute("data-name");
        dataButton === dataDiv
          ? div.setAttribute("class", "show")
          : dataButton === "all"
          ? div.setAttribute("class", "show")
          : div.setAttribute("class", "dont-show");
      });
    });
    button.classList.add("clicked");
  };
});
