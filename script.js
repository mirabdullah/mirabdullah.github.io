// Add any interactivity here if needed
console.log("Bio website loaded!");
function openMenu() {
  document.getElementById("sideMenu").style.left = "0";
  document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.left = "-250px";
  document.getElementById("mainContent").style.marginLeft = "0";
}
