$(document).ready(function(){
  //Add Temple favicon
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://am-prod-client-files.ppub-tmaws.io/temple/s3fs-public/favicon_temple.ico';
  document.getElementsByTagName('head')[0].appendChild(link);

  //hide each input
  $('td[id^="specreqCell_"]').each(function(){$(this).css("visibility","hidden")});


  //create main input boxes


  //fill in value from main question to each indiv line
  function fillSH() {
    var SHinput = this.value;
    var SHlist = $('[name^="renewSH"]');
    for (i in SHlist) {
      SHlist[i].value = SHinput;
      }
  }
  });
