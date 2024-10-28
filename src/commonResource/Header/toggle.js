import $ from "jquery";
if ($(window).width() <= 768) {
  $(".header-links-wrapper").addClass("someClass");
} else {
  $(".header-links-wrapper").removeClass("someClass");
}

$(window).on("resize", function (event) {
  if ($(window).width() <= 768) {
    $(".header-links-wrapper").addClass("someClass");
  } else {
    $(".header-links-wrapper").removeClass("someClass");
    $(".header-links-wrapper ul").show();
  }
});
// Footer collapse functionality
$(document).on("click", ".someClass h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
});
