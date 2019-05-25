(function($, window) {
  $(function() {
    $('h2').show();
    $('#index').find('li').eq(0).fadeOut(1000).fadeIn(1000).fadeOUt(1000).fadeIn(1000);
  });

  $(function() {
    var title = $('h1').text();
    alert(title);
  });

  $(function() {
    // この中に処理を書きます
    $('h1').text('jQueryのtextメソッドで書き換え');
  });

  $(function() {
    // この中に処理を書きます
    $('h1').html('jQueryの<span class="title">htmlメソッド</span>で書き換え');
  });

  $(function() {
    // この中に処理を書きます
    $('#index').find('li').each(function() {
      // ループ内の処理
      alert($(this).text());
    });
  });

  //$(function() {
      // この中に処理を書きます
    //  $('ul#index').append('<li>メソッド</li>');
    //});

    $('#index').find('li').each(function() {
      // ループ内の処理
      alert($(this).text().length);
    });

    $(function() {
      // この中に処理を書きます
      $('ul#index').append('<li>メソッド</li>');
    });

    $('#index').find('li').each(function() {
      // ループ内の処理
      var count = ($(this).text().length);
      //alert(count);
      $(this).append("『");
      $(this).append(count);
      $(this).append("文字』");
    });
})(jQuery, window);
