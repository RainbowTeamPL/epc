function setRandom() {
    setBodyColor1(getRandomColor());
    setBodyColor2(getRandomColor());
    setEyeColor(getRandomColor());
    //and the list goes on...
}

function setBodyColor1(color) {
    $("#ponyPart_body").children("g").children("path#assetcolor_1").attr("style", "fill: " + color + ";");
    bodypicker1.spectrum("set", color);
}

function setBodyColor2(color) {
    $("#ponyPart_body").children("g").children("path#assetcolor_2").attr("style", "fill: " + color + ";");
    bodypicker2.spectrum("set", color);
}

function setEyeColor(color) {
    $("#ponyPart_eyes1").children("g").children("path#assetcolor_1").attr("style", "fill: " + color + ";");
    eyepicker1.spectrum("set", color);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var bodypicker1 = $("#bodyPicker1").spectrum({
    preferredFormat: "rgb",
    //flat: true,
    color: getRandomColor(),
    clickoutFiresChange: true,
    showInput: true,
    showButtons: false,

    move: function (color) {
        setBodyColor1(color.toRgbString());
    }
});

var bodypicker2 = $("#bodyPicker2").spectrum({
    preferredFormat: "rgb",
    //flat: true,
    color: getRandomColor(),
    clickoutFiresChange: true,
    showInput: true,
    showButtons: false,

    move: function (color) {
        setBodyColor2(color.toRgbString());
    }
});

var eyepicker1 = $("#eyePicker1").spectrum({
    preferredFormat: "rgb",
    //flat: true,
    color: getRandomColor(),
    clickoutFiresChange: true,
    showInput: true,
    showButtons: false,

    move: function (color) {
        setEyeColor(color.toRgbString());
    }
});