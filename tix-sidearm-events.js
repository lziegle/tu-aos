$(document).ready(function(){
	var lz_test = "added";
	var tracker = '';
	if ("ga" in window) {
		ga(function() {
			window.tracker = ga.getAll()[0];
		});
		if (window.tracker) {	
			$("#fbGroupDeposit").click(function(){
				var sourceValue = 'fb.group';
				var contentValue = 'btn.mid';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbGroupDeposit");
			});
			
			$("#fbAwayCincyBuy").click(function(){
				var sourceValue = 'fb.away';
				var contentValue = 'btn.card';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbAwayCincy");
			});
			
			$("#fbAwayUSFBuy").click(function(){
				var sourceValue = 'fb.away';
				var contentValue = 'btn.card';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbAwayUSF");
			});
			
			$("#fbAwayECUBuy").click(function(){
				var sourceValue = 'fb.away';
				var contentValue = 'btn.card';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbAwayECU");
			});
			
			$("#fbAwayTulsaBuy").click(function(){
				var sourceValue = 'fb.away';
				var contentValue = 'btn.card';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbAwayTulsa");
			});
			
			$("#fbAwayRutgersBuy").click(function(){
				var sourceValue = 'fb.away';
				var contentValue = 'btn.card';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbAwayRutgers");
			});
			
			$("#fbAwayAkronBuy").click(function(){
				var sourceValue = 'fb.away';
				var contentValue = 'btn.card';
			
				window.tracker.set('dimension2', sourceValue);
				window.tracker.set('dimension4', contentValue);
				window.tracker.send("event", "buy", "click", "fbAwayAkron");
			});
			
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
				console.log(evLabel);
				window.tracker.send("event", "nav", "click", evLabel);
			});
		}
	}
});
