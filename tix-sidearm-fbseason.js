$(document).ready(function(){
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker) {
			$("#fbSeasonBuyNow").click(function(){
				var sourceValue = 'fb.season';
				var contentValue = 'btn.top';
			
				tracker.set('dimension2', sourceValue);
				tracker.set('dimension4', contentValue);
				tracker.send("event", "buy", "click", "fbSeasonBuyNow");
			};
			
			//Top Navs
			$("#fbSeasonTixHomeTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonTixHomeTop");
			};
			
			$("#fbSeasonDigFAQTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonDigFAQTop");
			};
			
			$("#fbSeasonPartialTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonPartialTop");
			};
			
			$("#fbSeasonSingleTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonSingleTop");
			};
			
			$("#fbSeasonGroupTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonGroupTop");
			};
			
			$("#fbSeasonAwayTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonAwayTop");
			};
			
			$("#fbSeasonParkingTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonParkingTop");
			};
			
			$("#fbSeasonPromosTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonPromosTop");
			};
			
			$("#fbSeasonPremiumTop").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonPremiumTop");
			};
			
			//Bottom navs
			
			$("#fbSeasonTixHomeBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonTixHomeBtm");
			};
			
			$("#fbSeasonDigFAQBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonDigFAQBtm");
			};
			
			$("#fbSeasonPartialBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonPartialBtm");
			};
			
			$("#fbSeasonSingleBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonSingleBtm");
			};
			
			$("#fbSeasonGroupBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonGroupBtm");
			};
			
			$("#fbSeasonAwayBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonAwayBtm");
			};
			
			$("#fbSeasonParkingBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonParkingBtm");
			};
			
			$("#fbSeasonPromosBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonPromosBtm");
			};
			
			$("#fbSeasonPremiumBtm").click(function(){
				tracker.send("event", "nav", "click", "fbSeasonPremiumBtm");
			};
		}
	}
  
};
