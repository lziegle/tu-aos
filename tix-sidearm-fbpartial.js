$(document).ready(function(){
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker) {		
			//Top Navs
			$("#fbPartialTixHomeTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialTixHomeTop");
			});
			
			$("#fbPartialDigFAQTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialDigFAQTop");
			});
			
			$("#fbPartialSeasonTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialPartialTop");
			});
			
			$("#fbPartialSingleTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialSingleTop");
			});
			
			$("#fbPartialGroupTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialGroupTop");
			});
			
			$("#fbPartialAwayTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialAwayTop");
			});
			
			$("#fbPartialParkingTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialParkingTop");
			});
			
			$("#fbPartialPromosTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialPromosTop");
			});
			
			$("#fbPartialPremiumTop").click(function(){
				tracker.send("event", "nav", "click", "fbPartialPremiumTop");
			});
			
			//Bottom navs
			
			$("#fbPartialTixHomeBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialTixHomeBtm");
			});
			
			$("#fbPartialDigFAQBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialDigFAQBtm");
			});
			
			$("#fbPartialSeasonBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialPartialBtm");
			});
			
			$("#fbPartialSingleBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialSingleBtm");
			});
			
			$("#fbPartialGroupBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialGroupBtm");
			});
			
			$("#fbPartialAwayBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialAwayBtm");
			});
			
			$("#fbPartialParkingBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialParkingBtm");
			});
			
			$("#fbPartialPromosBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialPromosBtm");
			});
			
			$("#fbPartialPremiumBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPartialPremiumBtm");
			});
		}
	}
  
});
