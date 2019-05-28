(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#date_picker').flatpickr({
      //日本語化
      "locale": "ja",
      //時間追加
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  });
})(jQuery, window);
