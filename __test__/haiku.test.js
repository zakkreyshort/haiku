import { Haiku } from './../src/haiku.js'; 

describe ('Haiku', () => {
    let haiku;
    const line1 = 'Hello there';
    const line2 = 'This is a haikue';
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
    test('should remove silent vowels, such as e at the end', () => {
        haiku.silentVowels(line2)
        expect(haiku.charactersAfterSiltentVow).toEqual("This is a haiku");
    });
    test('should detect double-vowels and remove one', () => {
        let this1 = haiku.silentVowels(line2);
        let this2 = haiku.replaceVowels(this1);
        expect(this2).toEqual("This is a haxku")
    });

    test('should count vowels to return syllable count', () => {
        let this1 = haiku.silentVowels(line2);
        let this2 = haiku.replaceVowels(this1);
        let this3 = haiku.syllableCounter(this2);
        expect(haiku.numberOfSyllables).toEqual(5);
    })
});
