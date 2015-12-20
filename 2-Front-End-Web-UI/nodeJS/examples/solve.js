

var quad = require('./quadratic');

var prompt = require('prompt');

prompt.get(['pressReturn','ignoreThis','a','b','c'], 
function(err,result){
	if (err){ return onErr(err);}
	console.log('Command-line input recieved');
	console.log("a: " + result.a);
	console.log("b: " + result.b);
	console.log("c: " + result.c);

	quad(result.a, result.b, result.c, function(err,quadsolve){
		if (err){
			console.log('Error: ', err);
		} else {
			console.log("Roots are " + quadsolve.root1() + " " + quadsolve.root2());
		}
	});
});