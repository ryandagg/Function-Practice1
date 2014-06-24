// #1 Good
var tripleFive = function() {
	for(var i = 0; i < 3; i++) {
		console.log("Face!");
	}
};

// #2 Good
var lastLetter = function(str) {
	return str[str.length - 1];
};

// #3 Good
var square = function(num) {
	return num * num;
};

// #4 Good
var negate = function(num) {
	return num * -1;
};

// #5 Good
var toArray = function(n1, n2, n3) {
	return [n1, n2, n3];
};

// #6 Good
var statsWithA = function(str) {
	return str[0] === 'a';
};

// #7 Good
var excite = function(str) {
	return str + "!!!";
};

// #8 Good
var sun = function(str) {
	return str.match(/sun/) != null;
};

// #9 Good
var tiny = function(num) {
	return 0 < num && num < 1;
};

// #9 Not Working; Only true when num <= 0
// var tiny = function(num) {
// 	return 0 < num < 1;
// };

// #10 Good
var getSeconds = function(time) {
	var min = Number(time.substring(0,2))
	var sec = Number(time.substring(3,5))
	return min * 60 + sec;
};