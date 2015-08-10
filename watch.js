var time =[];
window.onload = function() {
	var r = Raphael("watch");
	//////////////////////////
	// создаем стрелки часов//
	//////////////////////////
	var seconds = r.rect(500,40,1,300).attr({
		fill: "black"
	});
	
	var minute = r.path("M 500,70 L 525,120 500,345 475,120Z").attr({
		fill: "rgb(204, 27, 40)",
		stroke: "black"
	});
	var hours = r.path("M 500,345 L 475,200 500,150 525,200Z").attr({
		fill: "rgb(204, 27, 40)",
		stroke: "black"
	});
	var bigR = r.circle(500, 350, 320);
	var center = r.circle(500, 350, 10).attr({
		cursor: "pointer",
		fill: "rgb(84, 206, 201)",
		stroke: "#fff"
	});
	//////////////////////////
	// создаем засечки часов//
	//////////////////////////
	var a = 0;
	function describeBox() {
		for(var i = 0; i < 60; i++) {
			if (i === 0 || i === 15 || i === 30 || i === 45) {
				var bBox = r.rect(500, 40, 1, 30).attr({
					stroke: "rgb(84, 206, 201)"
				});
				bBox.transform("r" + a +",500,350");
				a = a + 6;
			} else if(i===5 || i===10 || i===20 || i===25 || i===35 || i===40 || i===50 || i===55) {
				var bBox = r.rect(500, 40, 1, 20).attr({
					stroke: "rgb(84, 206, 201)"
				});
				bBox.transform("r" + a +",500,350");
				a = a + 6;	
			}else {
				var bBox = r.rect(500, 40, 1, 10).attr({
				stroke: "rgb(84, 206, 201)"
				});
				bBox.transform("r" + a +",500,350");
				a = a + 6;
			}
		}
	}
	//////////////////////////
	//    получаем время    //
	//////////////////////////
	var timer = setInterval(function getTime(h, m, s) {
		var time = new Date();
		var s = window.time[2] = time.getSeconds();
		var m = window.time[1] = time.getMinutes();
		var h = window.time[0] = time.getHours();
		seconds.transform("r" + s * 6 + ",500,350");
		minute.transform("r" + m * 6 + ",500,350");
		hours.transform("r" + h * 30 + ",500,350");
	},1000);
	describeBox();	
}


