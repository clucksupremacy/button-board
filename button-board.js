let button_click = 0;

function add_counter() {
    button_click++;
    if (button_click == 9) {
        document.getElementById("secretButton").style.display = "inline-block";
    }
}