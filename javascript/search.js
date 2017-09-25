var searchbar = document.getElementById('search');
searchbar.onfocus = loadJsonFile;
searchbar.onkeypress = checkkeypress;
var jsonfile;

function loadJsonFile(){
  var url = 'http://www.hamun.internet-guiden.dk/animecons/search_content.json'
  var request = new XMLHttpRequest();

  request.open('GET', url);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    jsonfile = request.response;
  }
}

/* check if keypress was an enter */
function checkkeypress(e) {
  if(e.keyCode == 13) {
    loadresult(searchbar.value);
  } else {
    searchJSON();
  }
}

function searchJSON() {
  var result = findKeys(searchbar.value);
  /* TODO show results underneath searchbar */
}

function loadresult(key){
  var regex = "/" + key + "/";
  for (var item in Object.keys(jsonfile)){
    if(regex.test(item)){
      window.location.href = jsonfile[item];
      return;
    }
  }
}

function findKeys(key) {
  var result = [];
  var regex = "/" + key + "/";
  var keys = Object.keys(jsonfile);
  for (var item in keys) {
    if(regex.test(item)) {
      result.push(item);
    }
  }
}
