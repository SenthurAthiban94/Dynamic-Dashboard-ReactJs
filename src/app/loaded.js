window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}
document.addEventListener("DOMContentLoaded",function(event){
    var clientHeight = document.getElementById('header_nav').clientHeight;
    document.getElementById("baseContent").style.paddingTop = clientHeight;
    window.onresize = function(event) {
        var clientHeight = document.getElementById('header_nav').clientHeight;
        document.getElementById("baseContent").style.paddingTop = clientHeight;
        };
});