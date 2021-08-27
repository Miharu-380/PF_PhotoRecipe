// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.jscroll.min.js
//= require popper
//= require bootstrap-sprockets

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//ローディング画面の表示
/*global $*/
$(window).on('load',function(){
  $("#loading").delay(2500).fadeOut('slow');  //ローディング画面を2.5秒（2500ms）待機してからフェードアウト
});

// ハンバーガーメニュー
$(document).on('turbolinks:load', function() { // ブラウザバックでもturbolinksオフ
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.global-menu-sp').addClass('active');
        } else {
            $('.global-menu-sp').removeClass('active');
        }
    });
});


// 無限スクロールの処理
$(document).on('turbolinks:load', function() { 
    $(window).on('scroll', function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
              $('.jscroll').jscroll({
                contentSelector: '.scroll-list',
                nextSelector: 'span.next:last a'
              });
        }
    });
});

