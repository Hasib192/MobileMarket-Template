$(document).ready(function () {
  $(".category-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/HomePage_Left Arrow.png'>",
    // nextArrow: "<img class='a-left control-c prev slick-prev' src='./assets/images/HomePage_Right Arrow.png'>",
  });
});
