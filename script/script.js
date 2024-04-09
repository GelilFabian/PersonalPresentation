let texts = ["Web Developer", "Gym guy", "Photographer"];
let script = 0;
let charIndex = 0;
let isErasing = false;

function updateText() {
    let textElement = document.getElementById("animatedText");
    if (!isErasing && charIndex < texts[script].length) {
        textElement.innerHTML += texts[script][charIndex];
        charIndex++;
    } else if (isErasing && charIndex >= 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        charIndex--;
    }

    if (charIndex === texts[script].length) {
        isErasing = true;
        setTimeout(updateText, 2000);
    } else if (charIndex === 0 && isErasing) {
        isErasing = false;
        script = (script + 1) % texts.length;
        setTimeout(updateText, 1);
    } else {
        setTimeout(updateText, 50);
    }
}

updateText();

function navOpen() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}