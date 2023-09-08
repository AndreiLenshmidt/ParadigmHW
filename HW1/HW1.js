function sort_list_impperative(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (numbers[j] < numbers[j+1]) {
				const buff = numbers[j];
				numbers[j] = numbers[j+1];
				numbers[j+1] = buff;
			}
		}
	}
	console.log(numbers);
}
		
function sort_list_declarative(numbers) {
    return numbers.sort((a, b) => b - a);
}

let numbers = [1, 7, 4, 6, 8];
sort_list_impperative(numbers);		
console.log(sort_list_declarative(numbers));