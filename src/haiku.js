export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
				this.characters = [];
				this.words = [];
				this.numberOfVowels = 0;
				this.vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    }
    
    countVowels(line){
        this.characters = line.split("");
        for(let i = 0; i < this.characters.length; i++){
					if(this.vowels.includes(this.characters[i])){
						this.numberOfVowels++;
					}
        }
			};
			
	silentVowels(line) {
		this.words = line.split(" ");
		let characters = this.characters;
		let vowels = this.vowels;
		let words = this.words;
		this.words.forEach(function(word) {
			// console.log(word);
			characters = word.split("");
			if (vowels.includes(characters.length -1)) {
				characters.pop();
				console.log(characters);
				characters.join("");
				console.log(characters);
			}
			words.join("");
		})
	}
}


