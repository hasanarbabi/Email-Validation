function mm() {

    var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var ink = document.getElementById('bb').value;

    if(ink.match(valid)) {
        document.getElementById('bb').style.borderColor = "green";

    } else {
        document.getElementById('bb').style.borderColor = "red";
    }
}

document.getElementById('bb').onkeyup = mm;