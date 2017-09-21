document.addEventListener("DOMContentLoaded", function(event) {
  console.log("loaded");
  var menubutton = document.getElementById('menubutton');
  menubutton.onclick = expandMenu;

  var conventionsbutton = document.getElementById('conventionsbutton');
  conventionsbutton.onclick = expandMenu;

  var organisationsbutton = document.getElementById('organisationsbutton');
  organisationsbutton.onclick = expandMenu

  function expandMenu(event) {
    debugger;
    alert("expandMenu is called");
    if (this.style.display == 'none'){
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
});
