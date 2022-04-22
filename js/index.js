$(function (){
  // ハンバーガーメニュー
  $("#wrapper").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("#humburger").slideDown();
    } else {
      $("#humburger").slideUp();
    }
  });
  // スクロール設定
    $(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 500; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });
      $(function () {
        $('.work-coffee').hover(function () {
            $('.work-detail', this).animate({
                top: "0px"
            }, 500);
        }, function () {
            $('.work-detail', this).animate({
                top: "350px",
                background: "#fff"
            }, 800);
        });
    });
    $(function () {
      $('.work-rice').hover(function () {
          $('.work-detail', this).animate({
              top: "0px"
          }, 500);
      }, function () {
          $('.work-detail', this).animate({
              top: "350px"
          }, 800);
      });
  });
      
      
});


