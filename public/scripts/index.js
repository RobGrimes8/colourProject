var topColor;
var bottomColor;

window.onload = function() {
    topColor = getRandomColor();
    bottomColor = getRandomColor();
    $("#color1").val(topColor);
    $("#color2").val(bottomColor);
    colorUpdate();
}

$('#color1').change(function() { // <-- use change event
    topColor = $(this).val();
    colorUpdate();
});

$('#color2').change(function() { // <-- use change event
    bottomColor = $(this).val()
    colorUpdate();
});

$(".gradientShow").click(function() {
    copyFunction();
});

function colorUpdate() {
    $(".gradientShow").css("background", "linear-gradient(" + topColor + ", " + bottomColor + ")");
    $("#color1Label").text(topColor);
    $("#color2Label").text(bottomColor);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copyFunction() {

    const el = document.createElement('textarea');
    el.value = "background: linear-gradient(" + topColor + ", " + bottomColor + ");";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);


    /* Alert the copied text */
    alert("Copied the value: '" + el.value + "'");
}

$("#hexColor").keyup(function() {
    if ($("#hexColor").val().length == 6 || $("#hexColor").val().length == 3) {
        var fullHex = "#" + $("#hexColor").val();
        var rgbValue = hexToRGB(fullHex);
        $(".rgbResult").text(rgbValue);
        $("#hexToRgbShow").css("background-color", fullHex);
    }
});

$(".rgbGroup").keyup(function() {
    var r = $("#rgbColor1").val();
    var g = $("#rgbColor2").val();
    var b = $("#rgbColor3").val();
    if (r !== "" && r < 256 && g < 256 && b < 256) {
        var rgbVal = "rgb(" + r + "," + g + "," + b + ")";
        $(".hexResult").text(RGBToHex(rgbVal));
        $("#rgbToHexShow").css("background-color", rgbVal);
    }
});

function hexToRGB(h) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    return "rgb(" + +r + "," + +g + "," + +b + ")";
}

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}