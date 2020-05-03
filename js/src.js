$(document).ready(function () {
  $("#navId a").click((e) => {
    e.preventDefault();
    $(this).tab("show");
  });

  $("#main_car").owlCarousel({
    loop: true,
    margin: 10,
    rewind: true,
    autoplay: true,
    // nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
