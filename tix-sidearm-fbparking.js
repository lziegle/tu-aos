$(document).ready(function(){
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker) {		
			//Top Navs
			$("#fbParkingTixHomeTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingTixHomeTop");
			});
			
			$("#fbParkingDigFAQTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingDigFAQTop");
			});
			
			$("#fbParkingSeasonTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingSeasonTop");
			});
			
			$("#fbParkingSingleTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingSingleTop");
			});
			
			$("#fbParkingGroupTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingGroupTop");
			});
			
			$("#fbParkingAwayTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingAwayTop");
			});
			
			$("#fbParkingPartialTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingPartialTop");
			});
			
			$("#fbParkingPromosTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingPromosTop");
			});
			
			$("#fbParkingPremiumTop").click(function(){
				tracker.send("event", "nav", "click", "fbParkingPremiumTop");
			});
			
			//Bottom navs
			
			$("#fbParkingTixHomeBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingTixHomeBtm");
			});
			
			$("#fbParkingDigFAQBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingDigFAQBtm");
			});
			
			$("#fbParkingSeasonBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingSeasonBtm");
			});
			
			$("#fbParkingSingleBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingSingleBtm");
			});
			
			$("#fbParkingGroupBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingGroupBtm");
			});
			
			$("#fbParkingAwayBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingAwayBtm");
			});
			
			$("#fbParkingPartialBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingPartialBtm");
			});
			
			$("#fbParkingPromosBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingPromosBtm");
			});
			
			$("#fbParkingPremiumBtm").click(function(){
				tracker.send("event", "nav", "click", "fbParkingPremiumBtm");
			});
		}
	}
  
});
