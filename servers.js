function readServerFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                $('.serveramount').html('I am in ' + allText + ' servers!<br>My server list:');
            }
        }
    }

    rawFile.send(null);
}

function readServerListFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var arrayOfLines = allText.split("\n");
                console.log(arrayOfLines);
                arrayOfLines = arrayOfLines.toString();
                console.log(arrayOfLines);
                $('.serverlist').html(arrayOfLines.replace(/,/g, '<br>').replace(/["']/g, ""));
            }
        }
    }

    rawFile.send(null);
}

$(document).ready(function () {
    readServerFile('servers.txt');
    readServerListFile('serverlist.txt');
});
