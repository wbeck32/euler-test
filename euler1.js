//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
function sumMults() {

var sum = 0;

for (var i = 3; i < 1000; i++) {
	if (i%3 == 0 || i%5 == 0) {
		sum = sum+i;
	}
}
$('.sumMults').html('<span class="bold"><a href="https://projecteuler.net/problem=1">Question 1:</a></span> The sum of multiples of 3 and 5 less than 1000 is: '+sum);
}

