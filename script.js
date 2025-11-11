//your JS code here. If required.
const updateTime = document.getElementById("timer")
let currDate = new Date()
setInterval(()=>{
	currDate = new Date()
	updateTime.innerHTML = currDate.toLocaleString();
},1000)
