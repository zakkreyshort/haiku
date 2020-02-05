import { Haiku } from './../src/haiku.js'; 

describe ('Haiku', () => {
    test('should show value from form', () => {
        let haiku = new Haiku("");
        expect(haiku.line1).toEqual("");
    });
});