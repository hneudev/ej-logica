function countPrimes(number) {
	let notPrimes = new Array(number);
	for (let i = 0; i < number; i++) {
		notPrimes[i] = false;
	}
	let res = 0;
	for (let i = 2; i < number; i++) {
		if (notPrimes[i] === false) {
			res++;
			for (let j = 2; i * j < number; j++) {
				notPrimes[i * j] = true;
			}
		}
	}
	return res;
};
console.log(countPrimes(50));
module.exports = countPrimes;