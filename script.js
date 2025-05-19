window.onload = function () {
    var introBtn = document.getElementById("to-intro");
    var historyBtn = document.getElementById("to-history");
    var sitemapBtn = document.getElementById("to-sitemap");

    var intro = document.getElementById("intro");
    var history = document.getElementById("history");
    var sitemap = document.getElementById("sitemap");

    introBtn.onclick = function() {
        intro.style.display = "block";
        history.style.display = "none";
        sitemap.style.display = "none";
    }

    historyBtn.onclick = function() {
        intro.style.display = "none";
        history.style.display = "block";
        sitemap.style.display = "none";
    }

    sitemapBtn.onclick = function() {
        intro.style.display = "none";
        history.style.display = "none";
        sitemap.style.display = "block";
    }
    
}


