var $appsDownloadBtn = $('.apps-download-btn');
var $appDownloadLinks = $('#app-download-links');

var $navMenuBtn = $('.navbar-menu-btn');
var $navMenu = $('#main-nav-links');

$appsDownloadBtn.on('click', function() {
  if ($appDownloadLinks.css('display') == 'none') {
    $appDownloadLinks.css('display', 'block');
  } else {
    $appDownloadLinks.css('display',  'none');
  }
});

$navMenuBtn.on('click', function() {
  if ($navMenu.css('height') == '0px') {
    $navMenu.css('height', 'auto');
  } else {
    $navMenu.css('height',  '0px');
  }
});
