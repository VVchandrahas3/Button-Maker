let CustomElement = document.getElementById("customButton");

function applyButton() {
    CustomElement.style.backgroundColor = document.getElementById("bgColorInput").value;
    CustomElement.style.color = document.getElementById("fontColorInput").value;
    CustomElement.style.fontSize = document.getElementById("fontSizeInput").value;
    CustomElement.style.fontWeight = document.getElementById("fontWeightInput").value;
    CustomElement.style.padding = document.getElementById("paddingInput").value;
    CustomElement.style.borderRadius = document.getElementById("borderRadiusInput").value;


}