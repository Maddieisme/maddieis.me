//navbar handler
function topnav() {
    var x = document.getElementById("navLinks");
    var y = document.getElementById("menu");
    var z = document.getElementById("nav")
    if (x.style.display === "block") {
        x.style.display = "none";
        y.classList.remove("material-icons-round")
        y.innerText = "menu";
        y.classList.remove("underline");
        y.style.fontSize = "19px";
        y.style.width = "50px";
        y.style.borderRadius = "13px"
        y.style.margin = "22px";
        y.style.padding = "10px";
        y.classList.add('frostedglass');
        y.style.backgroundColor = "rgba(--blackbg .5)";
        z.classList.remove('frostedglass');
        z.style.height = "0";
    } else {
        x.style.display = "block";
        y.classList.add("material-icons-round");
        y.innerText = "close";
        y.classList.add("underline");
        y.style.fontSize = "24px";
        y.style.padding = "30px";
        y.style.margin = "0"
        y.style.backgroundColor = "rgba(--blackbg .5)";
        x.style.paddingTop = "0";
        y.style.borderRadius = "0";
        z.style.backgroundColor = "rgba(--blackbg .5)";
        z.style.width = "100%";
        z.style.height = "100%";
        y.classList.remove("frostedglass");
        z.classList.add('frostedglass');
    }
}
async function init() {
    const json = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&page=1&nowplaying="true"&user=mattstar45&api_key=ea951fd34f50fdaf09f0c8e7bc8f184d&format=json');
    let { recenttracks } = await json.json();
    if (document.getElementById("url") != recenttracks.track[0].url) {

        document.getElementById("url").href = recenttracks.track[0].url;
        document.getElementById("album").src = recenttracks.track[0].image[3]["#text"];

        if (document.getElementById("trackname") != recenttracks.track[0]["name"]) { document.getElementById("trackname").innerText = recenttracks.track[0]["name"]; }
        if (document.getElementById("artist") != recenttracks.track[0].artist["#text"]) { document.getElementById("artist").innerText = `${recenttracks.track[0].artist["#text"]} - ${recenttracks.track[0].album["#text"]}`; }

    }
    setTimeout(init, 3000);
}