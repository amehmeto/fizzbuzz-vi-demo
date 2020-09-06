function isMultipleOf(multiple: number, number: number) {
	return number % multiple === 0
}

export function fizzbuzz(number: number): number | WordAnswer {
	if (isMultipleOf(3, number) && isMultipleOf(5, number))
		return WordAnswer.FIZZBUZZ
	if (isMultipleOf(3, number))
		return WordAnswer.FIZZ
	if (isMultipleOf(5, number))
		return WordAnswer.BUZZ
	return number
}

export enum WordAnswer {
	FIZZ = 'Fizz',
	BUZZ = 'Buzz',
	FIZZBUZZ = 'FizzBuzz',
}


/*
for (let i = 0 ; i <= 100 ; i++)
	console.log(fizzbuzz(i))
*/
