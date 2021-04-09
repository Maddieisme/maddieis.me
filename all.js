//navbar handler
function topnav() {
var x = document.getElementById("navLinks");
var ico = document.getElementById("ico");
if (x.style.display === "block") {
  x.style.display = "none";
  ico.innerText = "menu";
  } else {
  x.style.display = "block";
  ico.innerText = "close";
  }
}
//music widget
async function init() {
  //change the url with your user and API key
  const json = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&page=1&nowplaying="true"&user=mattstar45&api_key=ea951fd34f50fdaf09f0c8e7bc8f184d&format=json');
  //assign output as recenttracks so we can use it
  let {
    recenttracks
  } = await json.json();
  //check if the url is diff
  //only run the other ifs if the url is dif
  if (document.getElementById("url") != recenttracks.track[0].url) {
    //at this point, we are specifying the inner html stuff
    //href url for art
    document.getElementById("url").href = recenttracks.track[0].url;
    //album art
    document.getElementById("album").src = recenttracks.track[0].image[3]["#text"];
    //trackname
    if (document.getElementById("trackname") != recenttracks.track[0]["name"]) {
      document.getElementById("trackname").innerText = recenttracks.track[0]["name"];
    }
    //artist & album title 
    if (document.getElementById("artist") != recenttracks.track[0].artist["#text"]) {
      document.getElementById("artist").innerText = `${recenttracks.track[0].artist["#text"]} - ${recenttracks.track[0].album["#text"]}`;
    }
  }
  //return a timeout so we can reload this
  return setTimeout(init, 3000);
  //tune the time if you want it quicker or slower (don't reccomend making it quicker)
}
