function ugradbar(){
    var scrolltop = document.documentElement.scrollTop;
    var scrollheight = document.documentElement.scrollHeight;
    var clintHeight = document.documentElement.clintHeight;
    var percentange = (scrolltop / (scrollheight - clintHeight)) * 100;
    document.getElementById('progressBar').style.width = percentange + '%';
}

window.addEventListener("scroll", ugradbar)