export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.characters = [];
        this.numberOfVowels = 0;
    }
    
    countVowels(line){
        this.characters = line.split("");
    
        for(let i = 0; i < this.characters.length; i++){
            const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
            if(vowels.includes(this.characters[i])){
                this.numberOfVowels++;
            }
        }
        // return this.numberOfVowels;
};
}


