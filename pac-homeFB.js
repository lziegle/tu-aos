  //Add Temple favicon
  console.log("initial");
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://am-prod-client-files.ppub-tmaws.io/temple/s3fs-public/favicon_temple.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
  
  var games = getElementsByClassName('cust-HomeGame');
  for (item in games) {
    item.ClassList.add("btn btn-primary btn-sm btn-block");
    console.log(item);
    console.log('read');
  }

;
  
