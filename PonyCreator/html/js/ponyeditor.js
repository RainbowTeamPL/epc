function setRandom() {
    setBodyColor1(getRandomColor());
    setBodyColor2(getRandomColor());
    setEyeColor(getRandomColor());
    setHairColor1(getRandomColor());
    setTailColor1(getRandomColor());
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

function setHairColor1(color) {
    $("#ponyPart_hair1").children("g").children("path#assetcolor_1").attr("style", "fill: " + color + ";");
    hairpicker1.spectrum("set", color);
}

function setTailColor1(color) {
    $("#ponyPart_tail1").children("g").children("path#assetcolor_1").attr("style", "fill: " + color + ";");
    tailpicker1.spectrum("set", color);
}

//
//functions
//

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copyHairLeft() {
    setHairColor1(tailpicker1.spectrum("get"));
}

function copyHairRight() {
    setTailColor1(hairpicker1.spectrum("get"));
}

function copyBodyLeft() {
    setBodyColor1(bodypicker2.spectrum("get"));
}

function copyBodyRight() {
    setBodyColor2(bodypicker1.spectrum("get"));
}

//
//pickers
//

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

var hairpicker1 = $("#hairPicker1").spectrum({
    preferredFormat: "rgb",
    //flat: true,
    color: getRandomColor(),
    clickoutFiresChange: true,
    showInput: true,
    showButtons: false,

    move: function (color) {
        setHairColor1(color.toRgbString());
    }
});

var tailpicker1 = $("#tailPicker1").spectrum({
    preferredFormat: "rgb",
    //flat: true,
    color: getRandomColor(),
    clickoutFiresChange: true,
    showInput: true,
    showButtons: false,

    move: function (color) {
        setTailColor1(color.toRgbString());
    }
});