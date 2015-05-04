//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var num = 600851475143;
var i=2;

while(i <= num) {
	if(num%i == 0 && num/i !== 1){
		num = num/i;
	} else {
		i++;
	}
}

console.log('The largest prime factor of 600851475143 is: ',num);

