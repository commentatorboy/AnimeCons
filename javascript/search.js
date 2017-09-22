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

function checkkeypress(e) {
  if(e.keyCode == 13) {
    loadresult();
  } else {
    searchJSON();
  }
}

function searchJSON() {
  var query = searchbar.value;
  var result = findKeys(jsonfile, query);
}

function loadresult(){

}

function findKeys(json, key) {
  var result = [];
  for(var item in json){
    if (!json.hasOwnProperty(item)) continue;
    if(typeof json[item] == 'object') {
      result = result.concat(findKeys(json[item], key));
    } else if (json[item] == key) {
      result.push(item);
    }
  }
}
