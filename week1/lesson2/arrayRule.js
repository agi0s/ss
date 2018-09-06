/*
[1,56,3,8,0]; => [56,3,0,1,8]
*/
var arr = [1,56,3,8,0]; 

function sortByRule(array) {
	array = array.sort( (a, b) => {
		return a < b
	});

	var i = 0,
		newArr = [];

	array.forEach( (elem, index) => {

		let lastIndex = array[array.length - 1 - i];

		newArr.push(elem);
	});
	return newArr;
}

sortByRule(arr);