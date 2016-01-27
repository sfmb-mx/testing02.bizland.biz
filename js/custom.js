function URLParser() {
    var x = decodeURIComponent(document.URL);
    var xsplit = x.split("");

    if (xsplit[39] == "?" ) {
        var newPathname = "";
        for (i = 44; i < xsplit.length; i++) {
            newPathname += xsplit[i];
        }

        var urlTextBox = document.getElementById("msg");
        urlTextBox.value = urlTextBox.value + newPathname;
    } else {
        document.getElementById("myuri").innerHTML = "Please enter a URL";
    }

    var nameTextBox = document.getElementById("name");
    nameTextBox.value = nameTextBox.value + "Our best customer";
}

// http://testing02.bizland.biz/cform.html?cur=
