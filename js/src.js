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

  $("#quiz_form").on("submit", function (e) {
    e.preventDefault()
    total = 0;
    right_ans = [1, 2, 3, 4, 1, 2]
    ans = [
      +this.answer1.value,
      +this.answer2.value,
      +this.answer3.value,
      +this.answer4.value,
      +this.answer5.value,
      +this.answer6.value
    ]
    for (let i = 0; i < 6; i++) {
      if (right_ans[i] === ans[i]) {
        total++;
      }
    }
    console.log(this.answer1.value)
    console.log(this.answer2.value)
    console.log(this.answer3.value)
    console.log(this.answer4.value)
    console.log(this.answer5.value)
    console.log(this.answer6.value)
    console.log(right_ans)
    console.log(ans)
    console.log(total)

    if (total >= 4) {
      $("#quiz_passed").show();
    } else {
      $("#quiz_failed").show();
      // $("#quiz_failed").removeClass("d-none");
    }
    this.reset();
  })
});