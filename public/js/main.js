var $appsDownloadBtn = $('.apps-download-btn');
var $appDownloadLinks = $('#app-download-links');

$appsDownloadBtn.on('click', function() {
  console.log();
  if ($appDownloadLinks.css('display') == 'none') {
    $appDownloadLinks.css('display', 'block');
  } else {
    $appDownloadLinks.css('display',  'none');
  }
});
