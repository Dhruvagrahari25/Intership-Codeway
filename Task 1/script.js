window.onload = function() {
  var Navbar = document.getElementById("navbar");
  var offsetHeight = Navbar.offsetHeight;
  var margin_Top = document.getElementById("AboutSection");
  margin_Top.style.setProperty('--margin_Top', offsetHeight + 'px');

  var toggle = document.getElementById("darkThemeToggle");
  var NavBar = document.getElementsByClassName("Navbar");
  var count = 0;
  toggle.onclick = function darkThemeToggleFunction(e) {
    e.preventDefault();
    if (count%2!=0) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("toggleSwitch").src = "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-toggle-thin.png"
    } else {
      NavBar.backgroundColor = "grey";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("toggleSwitch").src = "https://www.svgrepo.com/show/314805/toggle-on-solid.svg"
    }
    count++;
  }

}

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "Navbar") {
      x.className += " responsive";
  } else {
      x.className = "Navbar";
  }
}
