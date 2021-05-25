$(document).ready(function(){
	var lz_test = "added";
	var tracker = '';
	if ("ga" in window) {
		ga(function() {
			window.tracker = ga.getAll()[0];
		});
		if (window.tracker) {	
			console.log("tracker found");
			$("#fbSeasonBuyNow").click(function(){
				var sourceValue = 'fb.season';
				var contentValue = 'btn.top';
			
				tracker.set('dimension2', sourceValue);
				tracker.set('dimension4', contentValue);
				tracker.send("event", "buy", "click", "fbSeasonBuyNow");
			});
			
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
