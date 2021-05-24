$(document).ready(function(){
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker) {		
			//Top Navs
			$("#fbPremiumTixHomeTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumTixHomeTop");
			});
			
			$("#fbPremiumDigFAQTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumDigFAQTop");
			});
			
			$("#fbPremiumSeasonTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumSeasonTop");
			});
			
			$("#fbPremiumSingleTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumSingleTop");
			});
			
			$("#fbPremiumGroupTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumGroupTop");
			});
			
			$("#fbPremiumAwayTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumAwayTop");
			});
			
			$("#fbPremiumPartialTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumPartialTop");
			});
			
			$("#fbPremiumPromosTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumPromosTop");
			});
			
			$("#fbPremiumParkingTop").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumParkingTop");
			});
			
			//Bottom navs
			
			$("#fbPremiumTixHomeBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumTixHomeBtm");
			});
			
			$("#fbPremiumDigFAQBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumDigFAQBtm");
			});
			
			$("#fbPremiumSeasonBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumSeasonBtm");
			});
			
			$("#fbPremiumSingleBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumSingleBtm");
			});
			
			$("#fbPremiumGroupBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumGroupBtm");
			});
			
			$("#fbPremiumAwayBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumAwayBtm");
			});
			
			$("#fbPremiumPartialBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumPartialBtm");
			});
			
			$("#fbPremiumPromosBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumPromosBtm");
			});
			
			$("#fbPremiumParkingBtm").click(function(){
				tracker.send("event", "nav", "click", "fbPremiumParkingBtm");
			});
		}
	}
  
});
