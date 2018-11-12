let database = [];

let newsfeed = [
	{
		username:"tobias",
		newsfeed:"bla bla bla"
	},
	{
		username:"bob",
		newsfeed:"tee teee teeee"
	},
	{
		username:"admin",
		newsfeed:"I am the admin"
	}
];

function isUserValid(username, password){
	let db = JSON.parse(localStorage.getItem('database'));
	console.log(db);
	if(db !== null){
		for (let i=0; i < db.length; i++) {
			if(db[i].username === username && db[i].password === password) {
				return true;
			}
		}
		return false;
	} else {
		return false;
	}

}

// for (var i=0; i < newsfeed.length; i++) {
// 	if (newsfeed[i].username === username) {
// 		console.log(newsfeed[i].newsfeed);
// 	} else {
// 		var newsfeedPromt = prompt("New Newsfeed:");
// 		var newsfeedInput = {};
// 		newsfeedInput.username = username;
// 		newsfeedInput.newsfeed = newsfeedPromt;
//
// 		newsfeed.push(newsfeedInput);
//
// 		for (var i=0; i < newsfeed.length; i++) {
// 			if (newsfeed[i].username === username) {
// 				console.log(newsfeed[i].newsfeed);
// 				return false;
// 			}
// 		}
// 	}
// }

function signIn(username, password){
	if(isUserValid(username, password)){
		for (let i=0; i < newsfeed.length; i++) {
			if (newsfeed[i].username !== username) {
				let paragraph = document.getElementById("newsfeed");

				let entry = document.createElement('p');

				entry.innerHTML = newsfeed[i].username + ': ' + newsfeed[i].newsfeed;
				paragraph.appendChild(entry);
			}
		}
		return false;
	} else {
		alert("Wrong username or password!!!");
	}

}

function isUserExist(username, password, mail){
	for (let i=0; i < database.length; i++) {
		if(database[i].username === username || database[i].mail === mail) {
			return true;
		}
	}
	return false;
}

function RegIn(username, password, mail){
	if(isUserExist(username, password, mail)){
		console.log("exesetiert");
	} else {

		//wird in database geschrieben
		let user = {};
		user.username = username;
		user.mail = mail;
		user.password = password;

		database.push(user);

		localStorage.setItem('database', JSON.stringify(database));

		let usernamePromt = prompt("What is your username?");
		let passwordPromt = prompt("What is your password?");

		signIn(usernamePromt, passwordPromt);
	}

}

/*-- Player Game --*/
const player = document.getElementsByClassName("player")[0];
const button_top = document.querySelector("#move_top");
const button_bottom = document.querySelector("#move_bottom");
const button_left = document.querySelector("#move_left");
const button_right = document.querySelector("#move_right");

console.log(player);

button_top.addEventListener("click", () => {
	let valueX = getTranslateXValue(player.style.transform);
	let valueY = getTranslateYValue(player.style.transform);

	let total = valueY - 50;

	player.style.transform = "translate(" + valueX +"px, "+ total +"px)";

	console.log(total);
	console.log(player.style.transform);
});

button_bottom.addEventListener("click", () => {
	let valueX = getTranslateXValue(player.style.transform);
	let valueY = getTranslateYValue(player.style.transform);

	let total = valueY + 50;
	player.style.transform = "translate(" + valueX +"px, "+ total +"px)";

	console.log(total);
	console.log(player.style.transform);
});

button_left.addEventListener("click", () => {
	let valueX = getTranslateXValue(player.style.transform);
	let valueY = getTranslateYValue(player.style.transform);

	let total = valueX - 50;
	player.style.transform = "translate(" + total +"px, "+ valueY +"px)";

	console.log(total);
	console.log(player.style.transform);
});

button_right.addEventListener("click", () => {
	let valueX = getTranslateXValue(player.style.transform);
	let valueY = getTranslateYValue(player.style.transform);

	let total = valueX + 50;
	player.style.transform = "translate(" + total +"px, "+ valueY +"px)";

	console.log(total);
	console.log(player.style.transform);
});


function getTranslateXValue(translateString){

	let n = translateString.indexOf("(");
	let n1 = translateString.indexOf(",");

	let res = parseInt(translateString.slice(n+1,n1-2));

	return res;
}
function getTranslateYValue(translateString){

	let n = translateString.indexOf(",");
	let n1 = translateString.indexOf(")");

	let res = parseInt(translateString.slice(n+1,n1-1));

	return res;
}

/*-- Draggeble Div--*/

//Make the DIV element draggagle:
dragElement(document.getElementById("player"));

function dragElement(elmnt) {
	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (elmnt) {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		console.log(e.clientX);
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

/*-- Mous Move effect --*/

document.onmousemove = (e) => {
	let p1 = e.clientX;
	let p2 = e.clientY;

	console.log(p1);
	console.log(p2);

	let node = document.createElement("div");

	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		color.toString();
	}


	let randomSize = Math.floor(Math.random() * Math.floor(20));

	node.style.height = randomSize + "px";
	node.style.width = randomSize + "px";
	node.style.top = p2 + "px";
	node.style.left = p1 + "px";
	node.style.position = "absolute";
	node.style.borderRadius = "50px";
	node.style.backgroundColor = color;

	document.querySelector("body").appendChild(node);


};



