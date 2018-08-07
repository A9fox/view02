function timer() {
	var today = new Date(),
		eventDate = new Date("August 17, 2018 11:00");


	var todayTime = today.getTime(),
		eventTime = eventDate.getTime(),
		remTime = eventTime - todayTime;

	var seconds = Math.floor(remTime/1000),
		minutes = Math.floor(seconds/60),
		hours = Math.floor(minutes/60),
		days = Math.floor(hours/24);


	hours = hours % 24;
	minutes%= 60;
	seconds%= 60;

	hours = (hours < 10) ? "0"+ hours : hours + "";
	minutes = (minutes < 10) ? "0"+ minutes : minutes + "";
	seconds = (seconds < 10) ? "0"+ seconds : seconds + "";

	document.getElementById('timerDays').innerHTML = days;
	document.getElementById('hourFirst').innerHTML = hours[0];
	document.getElementById('hourSecond').innerHTML = hours[1];
	document.getElementById('minuteFirst').innerHTML = minutes[0];
	document.getElementById('minuteSecond').innerHTML = minutes[1];
	document.getElementById('secondFirst').innerHTML = seconds[0];
	document.getElementById('secondSecond').innerHTML = seconds[1];

}



timer();

setInterval(timer, 1000);
