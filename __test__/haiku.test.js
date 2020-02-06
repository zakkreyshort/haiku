
import { Haiku } from './../src/haiku.js';
import { Line } from './../src/line.js';


describe ('Haiku', () => {
	let line1 = new Line('An old silent pond')
	let line2 = new Line('A frog jumps into the pond')
	let line3 = new Line('into the chestnut')
	let haiku = new Haiku(line1, line2, line3)
	test('should show line 1 and 3 as having 5 syllables', () => {

		// line1 
		let this1 = line1.silentVowels();
		let this2 = line1.replaceVowels(this1);
		let this3 = line1.syllableCounter(this2);
		console.log(line1.line);

		// line2
		let this4 = line2.silentVowels();
		let this5 = line2.replaceVowels(this4);
		let this6 = line2.syllableCounter(this5);
		console.log(line2.line);

		// line3
		let this7 = line3.silentVowels();
		let this8 = line3.replaceVowels(this7);
		let this9 = line3.syllableCounter(this8);
		console.log(line3.line);

		expect(haiku.isHaiku()).toEqual(true)
	});
});
