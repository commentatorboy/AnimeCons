document.addEventListener("DOMContentLoaded", function(event) {
  console.log("loaded");
  var menubutton = document.getElementById('menubutton');
  menubutton.onclick = expandMenu;

  var conventionsbutton = document.getElementById('conventionsbutton');
  conventionsbutton.onclick = expandMenu;

  var organisationsbutton = document.getElementById('organisationsbutton');
  organisationsbutton.onclick = expandMenu

  function expandMenu(event) {

    if (this.style.display == 'none'){
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  }
});
