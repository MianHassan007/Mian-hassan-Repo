function showContent(index) {
    const content = document.getElementsByClassName('subnav-content')[index];
    content.style.display = 'block';
  }
  
  function hideContent(index) {
    const content = document.getElementsByClassName('subnav-content')[index];
    content.style.display = 'none';
  }

  
// ------------------------------------------SIDEBAR----------------------------------------------------

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "450px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
