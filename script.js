document.getElementById("default").click();

function term(evt, termName) {
    var i, infobox, navlink;
    infobox = document.getElementsByClassName("infobox");
    for (i = 0; i < infobox.length; i++) {
        infobox[i].style.display = "none";
    }
    navlink = document.getElementsByClassName("navlink");
    for (i = 0; i < navlink.length; i++) {
        navlink[i].className = navlink[i].className.replace(" active", "");
    }
    document.getElementById(termName).style.display = "block";
    evt.currentTarget.className += " active";
}