$(document).ready(function(){
  //Add Temple favicon
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://am-prod-client-files.ppub-tmaws.io/temple/s3fs-public/favicon_temple.ico';
  document.getElementsByTagName('head')[0].appendChild(link);

  //hide each input & make boxes smaller
  $('td[id^="specreqCell_"]').each(function(){$(this).css("visibility","hidden")});
  $(".hideSpecialRequests").hide()


  //create main input boxes
  $('.ev_PayPlan').after('<tr><td colspan="8" style="padding-bottom: 1em;"><b>Would you like to enroll in an auto 12-Month Interest-Free Payment Plan starting for the 2022-23 Basketball Season?</b><select name="12monthauto" id="12monthauto"><option value="YES">YES</option><option value="NO" selected="">NO</option></select></td></tr>')

  //fill in value from main question to each indiv line
  $("#12monthauto").on('change', function(){
	var SHinput = this.value;
    var SHlist = $('[name^="renewSH"]');
    for (i in SHlist) {
      SHlist[i].value = "12mth: "+SHinput;
      }});
  });


