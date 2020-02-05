import { Haiku } from './../src/haiku.js'; 

describe ('Haiku', () => {
    let haiku;
    const line1 = 'Hello there';
    const line2 = 'This is a haiku';
    const line3 = 'Maybe, maybe not';
    beforeEach(() => {
        haiku = new Haiku(line1, line2, line3);
    });
    test('should show value from form', () => {
        expect(haiku.line1).toEqual("Hello there");
    });
    test('should detect number of vowels in input', () => {
        haiku.countVowels(line1)
        expect(haiku.numberOfVowels).toEqual(4);
    });
});
