//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function prime() {
var num = 600851475143;
var i=2;

while(i <= num) {
	if(num%i == 0 && num/i !== 1){
		num = num/i;
	} else {
		i++;
	}
}

$('.prime').html('<span class="bold"><a href="https://projecteuler.net/problem=3">Question 3:</a></span> The largest prime factor of 600851475143 is: '+num);

}
