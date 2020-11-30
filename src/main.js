// Sticky navigation

let navBar = $(".navbar");
$(window).scroll(function () {
  //   console.log(window.innerHeight);
  //   console.log($(".section-2").offset().top);
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navBar.addClass("sticky");
  } else {
    navBar.removeClass("sticky");
  }
});
//Counter animation
let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 7000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};
let a = 0;
$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect h1");
  }
});
