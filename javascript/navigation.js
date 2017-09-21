document.addEventListener("DOMContentLoaded", function(event) {

  var menubutton = document.getElementById('menubutton');
  menubutton.onclick = expandMenu;

  var conventionsbutton = document.getElementById('conventionsbutton');
  conventionsbutton.onclick = expandSubMenu;

  var organisationsbutton = document.getElementById('organisationsbutton');
  organisationsbutton.onclick = expandSubMenu

  function expandMenu(event) {
    var lia = document.querySelectorAll('li');
    for(i = 0; i < lia.length; i++)
    {
      var liaelement = lia[i];
      expand(liaelement)
    }
    event.currentTarget.style.display = "block";
  }

  function expandSubMenu(event){
    var submenu = event.currentTarget;
    if(submenu.id == "organisationsbutton"){
       var organisationsubmenu = document.querySelector('.subnav-organisations');
       expand(organisationsubmenu);
    }
    else if(submenu.id == "conventionsbutton"){
      var coventionsubmenu = document.querySelector('.subnav-conventions');
      expand(coventionsubmenu);
    }
  }

  //the general expand button
  function expand(menu)
  {
    var menudisplay = menu.style.display;
    if(menudisplay == '' || menudisplay == 'none')
    {
      menu.style.display = "block";
    }
    else {
      menu.style.display = "none";

    }
  }

  // check for class with the fa-arrow-right
  function subMenuArrowCheck(){

  }
});
