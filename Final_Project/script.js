document.addEventListener("DOMContentLoaded", function () {
    navBar();
  });

function navBar() {
    document.getElementById("top-nav").innerHTML = `
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="faq.html">FAQ</a>
        <a href="contact.html">Contact</a>
        <a href="japan.html">Japan</a>
        <a href="taiwan.html">Taiwan</a>
        <a href="congo.html">Congo</a>
        <a href="thailand.html">Thailand</a>
        `;
}