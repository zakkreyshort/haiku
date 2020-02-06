import { Line } from '../src/line.js'; 

describe ('Line', () => {
    let line = new Line('This is a haikue')
    test('should show value from form', () => {
        expect(line.line).toEqual("This is a haikue");
    });
    test('should remove silent vowels, such as e at the end', () => {
        line.silentVowels()
        expect(line.charactersAfterSiltentVow).toEqual("This is a haiku");
    });
    test('should detect double-vowels and remove one', () => {
        let this1 = line.silentVowels();
        line.replaceVowels(this1);
        expect(line.charactersAfterReplacingVow).toEqual("This is a haxku")
    });

    test('should count vowels to return syllable count', () => {
        let this1 = line.silentVowels();
        let this2 = line.replaceVowels(this1);
        let this3 = line.syllableCounter(this2);
        expect(this1).toEqual(5);
    });

});
