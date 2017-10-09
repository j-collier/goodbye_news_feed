// collect fields
var newsfeed = document.querySelectorAll('[aria-label="News Feed"]');
var linkedinfeed = document.getElementByClassName('core-rail');

// hide fb feed if present
if(newsfeed.length != 0) {
  newsfeed[0].style.visibility = "hidden";
}

// hide linkedin feed if present
if(linkedinfeed.length != 0) {
  linkedinfeed[0].style.visibilty = "hidden";
}

