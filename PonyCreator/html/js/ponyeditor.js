function setRandom() {
    setBodyColor1(getRandomColor());
    setBodyColor2(getRandomColor());
    //and the list goes on...
}

function setBodyColor1(color) {
    $("#ponyPart_body").children("g").children("path#assetcolor_1").attr("style", "fill: " + color + ";");
}

function setBodyColor2(color) {
    $("#ponyPart_body").children("g").children("path#assetcolor_2").attr("style", "fill: " + color + ";");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}