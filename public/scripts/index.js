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
    console.log(topColor + bottomColor);
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