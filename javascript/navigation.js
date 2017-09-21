document.addEventListener("DOMContentLoaded", function(event) {
  console.log("loaded");
  var menubutton = document.getElementById('menubutton');
  menubutton.onClick = expandMenu(menubutton);

  var conventionsbutton = document.getElementById('conventionsbutton');
  conventionsbutton.onClick = expandMenu(conventionsbutton);

  var organisationsbutton = document.getElementById('organisationsbutton');
  organisationsbutton.onClick = expandMenu(organisationsbutton);

  function expandMenu(button) {
    alert("expandMenu is called");
    if (button.style.display == 'none'){
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
});
