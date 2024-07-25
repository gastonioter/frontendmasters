function upper(strings,...values) {

	console.log(strings);
	console.log(values);
	/* 
	strings as Array always has one more element than values,
	so a use [i] as index of the strings Array and 
	[i-1] to acces the values array. 
	*/

	let output = '';

	for(let i = 0; i < strings.length;i++){
		console.log(strings[i]);

		if(i>0){ 
			console.log(values[i-1]);
			output += String(values[i-1]).toUpperCase();
		}

		output += strings[i];
	}

	return output;
	


}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";
console.log(upper`Hello ${name} (@${twitter}), welcome to ${topic}!`);


//console.log(
//	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
//	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!");