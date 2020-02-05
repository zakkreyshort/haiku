

export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
				this.characters = [];
				this.words = [];
				this.wordArr = [];
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
		let wordArr = this.wordArr; 
		words.forEach(function(word) {
			characters = word.split("");
			if (vowels.includes(characters[characters.length -1])) {
				characters.pop();
			}
			characters = characters.join("");
			wordArr.push(characters);
		});
		this.characters = wordArr.join(" ");
		console.log(this.characters);
	}
};


