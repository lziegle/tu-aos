$(document).ready(function(){
	var lz_test = "added";
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker) {	
			console.log("tracker found");
			$(".tixnav").on("click", function(event){
				event.stopPropogation();
				event.stopImmediatePropogation();
				var evLabel = $(this).attr("id");
				console.log(evLabel);
				tracker.send("event", "nav", "click", evLabel);
			});
		}
	}
});
