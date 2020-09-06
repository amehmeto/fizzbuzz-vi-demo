import { fizzbuzz, WordAnswer } from './fizzbuzz'

describe('Fizzbuzz Suite', () => {
	it.each([
		[1],
		[2],
		[4],
	])('should return input as the output when random (ex: %s)', (input) => {
		expect(fizzbuzz(input)).toBe(input)
	})

	it.each([
		[3],
		[6],
		[9],
		[12],
	])('should return Fizz when is multiple of 3 (ex: %s)', (input) => {
		expect(fizzbuzz(input)).toBe(WordAnswer.FIZZ)
	})

	it.each([
		[5],
		[10],
	])('should return Buzz when is multiple of 5 (ex: %s', (input) => {
		expect(fizzbuzz(input)).toBe(WordAnswer.BUZZ)
	})


	it.each([
		[15],
	])('should return FizzBuzz when is a simultaneous multiple of 3 and 5 (ex: %s', (input) => {
		expect(fizzbuzz(input)).toBe('FizzBuzz')
	})
})
