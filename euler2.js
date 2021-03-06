//Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
//By starting with 1 and 2, the first 10 terms will be:

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
//find the sum of the even-valued terms.
function fibo() {
var fibSum = 0;
var tmp = 0;
var total = 0;
var toSum = [];
var x = 0;
var y = 1;

for(var i = 0; i < 4000000000; i++){

	if (fibSum < Number.MAX_SAFE_INTEGER) {
			tmp = x + y; 
			x = y;
			y = tmp;

		if(tmp%2 == 0){
			fibSum = fibSum + tmp;
			toSum[0] = fibSum;
		}

	} else { 
		toSum.push(fibSum);
		fibSum = 0;
	}
}

toSum.forEach(function(element,index,array){
	total += (element * Math.pow(10,-100));
});


}

function fiboDisp() {
	//The script runs so slowly that waiting for it can crash the browser.
	$('.fibo').html('<span class="bold"><a href="https://projecteuler.net/problem=2">Question 2:</a></span> The total I got is: (4.728731434505853e+208)^100');

}


