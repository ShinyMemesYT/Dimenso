function readServerFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                $('.serveramount').html('I am in ' + allText + ' servers!');
            }
        }
    }

    rawFile.send(null);
}

$(document).ready(function () {
    readServerFile('servers.txt');
    $('embed').hide();
    $('.livechat').mouseenter(function () {
        $('embed').show();
    });
    $('.livechat').mouseleave(function () {
        $('embed').hide();

    });
});
