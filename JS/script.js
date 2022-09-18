// Header Section
let links = document.querySelectorAll(".header .container .links ul li");

links.forEach(function (e) {
  e.addEventListener("click", function () {
    links.forEach(function (e) {
      e.classList.remove("active");
    });

    this.classList.add("active");
  });
});
