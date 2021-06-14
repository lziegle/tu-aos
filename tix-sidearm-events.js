$(document).ready(function(){
	var tracker = '';
	if ("ga" in window) {
		ga(function() {
			window.tracker = ga.getAll()[0];
		});
		if (window.tracker) {	
			$(".tix-itm").click(function(event){
				var evLabel = $(this).attr("id");
				var sourceValue = $(this).attr("data-source");
				var contentValue = $(this).attr("data-content");
				
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", evLabel);
			});
			
			$(".tixnav").click(function(event){
				// event.stopPropogation();
				// event.stopImmediatePropogation();
				var evLabel = $(this).attr("id");
				window.tracker.send("event", "nav", "click", evLabel);
			});
		}
	}
});
