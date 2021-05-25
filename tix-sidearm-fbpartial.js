$(document).ready(function(){
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker) {		
			//Top Navs
			$(".tixnav").on("click", function(event){
				event.stopPropogation();
				event.stopImmediatePropogation();
				var evLabel = $(this).attr("id");
				tracker.send("event", "nav", "click", evLabel);
			});
		}
	}
});
