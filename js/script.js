// PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');

$(function () {

  $('.card-caption').on('click', 'a', function (e) {
    e.stopPropagation();
  });

  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  var headerInner = $('#header .inner');

  //ページトップへもどる
  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

});
