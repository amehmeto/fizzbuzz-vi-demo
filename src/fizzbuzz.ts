function personalForEach(fruits: string[], showFruit: Function) {
	for (let index = 0; index < fruits.length; index++) {
		showFruit(fruits[index]);
	}
}

const showFruitImplementation = (fruit: string) => console.log(fruit)

personalForEach(['🍌', '🍓'], showFruitImplementation)
