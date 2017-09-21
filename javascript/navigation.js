/**
  * TODO
  * rotate the arrow (or rather change the class of a li)
  * make the menu block not in nonmobile version (fixed by using display = "" instead of none)
  *
*/
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
    event.currentTarget.style.display = "";
  }

  function expandSubMenu(event){
    var submenu = event.currentTarget;
    if(submenu.id == "organisationsbutton"){
      var organisationsubmenu = document.querySelector('.subnav-organisations');
      expand(organisationsubmenu);
      subMenuArrowCheck(submenu.firstElementChild.firstChild);
    }
    else if(submenu.id == "conventionsbutton"){
      var coventionsubmenu = document.querySelector('.subnav-conventions');
      expand(coventionsubmenu);
      subMenuArrowCheck(submenu.firstElementChild.firstChild);


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
  function subMenuArrowCheck(arrow){
    if(arrow.classList.contains("fa-arrow-right"))
    {
      arrow.className = "fa fa-arrow-down";
    }
    else {
      arrow.className = "fa fa-arrow-right";
    }
  }
});
