let activeShape = 1;
let activeColor = 1;
let activeMode = 1;

const colors = [
  "Arctic White",
  "Black",
  "Candy pink",
  "Light blue",
  "Passion purple",
  "Orange",
  "Iron red",
  "Ultramarine blue",
  "Yellow",
  "Neutral",
];
const shapes = [
  "Square",
  "Rectangle",
  "Round",
  "Square",
  "Star",
  "Oval",
  "Random",
];

const previousButton = document.querySelector(".previous-option");
const nextButton = document.querySelector(".next-option");

document.querySelector("#shape-" + activeShape).checked = true;
document.querySelector("#color-" + activeShape).checked = true;

checkMode(activeMode);
document.querySelector("#shape-mode").addEventListener("click", function () {
  checkMode(1);
  document.querySelector("#color-mode").classList.remove("active-mode");
  document.querySelector("#shape-mode").classList.add("active-mode");
});
document.querySelector("#color-mode").addEventListener("click", function () {
  checkMode(2);
  document.querySelector("#color-mode").classList.add("active-mode");
  document.querySelector("#shape-mode").classList.remove("active-mode");
});

document
  .querySelector(".option-wrapper h2+img")
  .addEventListener("click", function () {
    toggleModal();
  });

document
  .querySelector(".option-wrapper:nth-of-type(2) h2+img")
  .addEventListener("click", function () {
    toggleModal();
  });

document
  .querySelector(".option-wrapper:nth-of-type(3) h2+img")
  .addEventListener("click", function () {
    toggleModal();
  });

document.querySelector(".modal").addEventListener("click", function () {
  toggleModal();
});

function toggleModal() {
  document.querySelector("#head-note-desc").classList.toggle("show-modal");
}

function checkMode(x) {
  console.log(x);
  activeMode = x;
  if (activeMode == 1) {
    document.querySelector("#active-mode").textContent = "Change shape";
    previousButton.removeEventListener("click", previousColor);
    nextButton.removeEventListener("click", nextColor);
    previousButton.addEventListener("click", previousShape);
    nextButton.addEventListener("click", nextShape);
    document.querySelector(".options-colors").classList.add("hidden-option");
    document.querySelector(".options-shapes").classList.remove("hidden-option");
  } else if (activeMode == 2) {
    document.querySelector("#current-option").textContent =
      "Current color: " + colors[activeColor - 1];
    document.querySelector("#active-mode").textContent = "Change color";
    previousButton.removeEventListener("click", previousShape);
    nextButton.removeEventListener("click", nextShape);
    previousButton.addEventListener("click", previousColor);
    nextButton.addEventListener("click", nextColor);
    document.querySelector(".options-shapes").classList.add("hidden-option");
    document.querySelector(".options-colors").classList.remove("hidden-option");
  }
}

function previousShape() {
  activeShape = activeShape - 1;
  if (activeShape == 0) {
    activeShape = 7;
    document.querySelector("#shape-" + activeShape).checked = true;
  } else {
    document.querySelector("#shape-" + activeShape).checked = true;
  }
  updateShape(activeShape);
}

function nextShape() {
  activeShape = activeShape + 1;
  if (activeShape == 8) {
    activeShape = 1;
    document.querySelector("#shape-" + activeShape).checked = true;
  } else {
    document.querySelector("#shape-" + activeShape).checked = true;
  }
  updateShape(activeShape);
}

function previousColor() {
  activeColor = activeColor - 1;
  if (activeColor == 0) {
    activeColor = 10;
    document.querySelector("#color-" + activeColor).checked = true;
  } else {
    document.querySelector("#color-" + activeColor).checked = true;
  }
  updateColor(activeColor);
}

function nextColor() {
  activeColor = activeColor + 1;
  if (activeColor == 11) {
    activeColor = 1;
    document.querySelector("#color-" + activeColor).checked = true;
  } else {
    document.querySelector("#color-" + activeColor).checked = true;
  }
  updateColor(activeColor);
}

function updateShape(x) {
  document.querySelector(".editor-soap").src =
    "../assets/customise/shape-" + x + ".svg";
  document.querySelector("#current-option").textContent =
    "Current shape: " + shapes[x - 1];
}

function updateColor(x) {
  document.querySelector(".editor-soap").classList = "editor-soap color-" + x;
  document.querySelector("#current-option").textContent =
    "Current color: " + colors[x - 1];
}

document.querySelector("#shape-1").addEventListener("click", function () {
  radioShape(1);
});
document.querySelector("#shape-2").addEventListener("click", function () {
  radioShape(2);
});
document.querySelector("#shape-3").addEventListener("click", function () {
  radioShape(3);
});
document.querySelector("#shape-4").addEventListener("click", function () {
  radioShape(4);
});
document.querySelector("#shape-5").addEventListener("click", function () {
  radioShape(5);
});
document.querySelector("#shape-6").addEventListener("click", function () {
  radioShape(6);
});
document.querySelector("#shape-7").addEventListener("click", function () {
  radioShape(7);
});

function radioShape(x) {
  activeShape = x;
  document.querySelector(".editor-soap").src =
    "../assets/customise/shape-" + activeShape + ".svg";
  document.querySelector("#current-option").textContent =
    "Current shape: " + shapes[x - 1];
}

document.querySelector("#color-1").addEventListener("click", function () {
  radioColor(1);
});
document.querySelector("#color-2").addEventListener("click", function () {
  radioColor(2);
});
document.querySelector("#color-3").addEventListener("click", function () {
  radioColor(3);
});
document.querySelector("#color-4").addEventListener("click", function () {
  radioColor(4);
});
document.querySelector("#color-5").addEventListener("click", function () {
  radioColor(5);
});
document.querySelector("#color-6").addEventListener("click", function () {
  radioColor(6);
});
document.querySelector("#color-7").addEventListener("click", function () {
  radioColor(7);
});
document.querySelector("#color-8").addEventListener("click", function () {
  radioColor(8);
});
document.querySelector("#color-9").addEventListener("click", function () {
  radioColor(9);
});
document.querySelector("#color-10").addEventListener("click", function () {
  radioColor(10);
});

function radioColor(x) {
  activeColor = x;
  document.querySelector(".editor-soap").classList =
    "editor-soap color-" + activeColor;
  document.querySelector("#current-option").textContent =
    "Current color: " + colors[x - 1];
}

document
  .querySelector(".editor-ui div:last-of-type")
  .addEventListener("click", function () {
    checkPrices();
  });

function checkPrices() {
  const prdPrice = document.querySelector("#product-price");
  const optPrice = document.querySelector("#options-price");
  const totPrice = document.querySelector("#total-price");

  document;
}
