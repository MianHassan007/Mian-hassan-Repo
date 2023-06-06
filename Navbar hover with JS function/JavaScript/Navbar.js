function showContent(index) {
    const content = document.getElementsByClassName('subnav-content')[index];
    content.style.display = 'block';
  }
  
  function hideContent(index) {
    const content = document.getElementsByClassName('subnav-content')[index];
    content.style.display = 'none';
  }