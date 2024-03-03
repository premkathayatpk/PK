function showPage(pageId) {
  // Hide all sections
  let pages = document.querySelectorAll('.page');
  pages.forEach(function (page) {
    page.style.display = 'none';
  });

  // Show the selected section
  var selectedpage = document.getElementById(pageId);
  if (selectedpage) {
    selectedpage.style.display = 'block';
  }
}
showPage('home');

