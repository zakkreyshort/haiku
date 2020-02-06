

export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
				this.characters = [];
				this.charactersAfterSiltentVow = [];
				this.charactersAfterReplacingVow = [];
				this.words = [];
				this.wordArr = [];
				this.dipth = [];
        this.numberOfVowels = 0;
        this.numberOfSyllables = 0;
				this.vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    }
    
    countVowels(line){
        this.characters = line.split("");
        for(let i = 0; i < this.characters.length; i++){
					if(this.vowels.includes(this.characters[i])){
						this.numberOfVowels++;
					}
        }
        return this.numberOfVowels;
			};
			
	silentVowels(line) {
		this.words = line.split(" ");
		let characters = this.characters;
		let words = this.words;
		let wordArr = []; 
		words.forEach(function(word) {
			characters = word.split("");
			if ((characters[characters.length -1]) === "e") {
				characters.pop();
			}
			characters = characters.join("");
			wordArr.push(characters);
		});
    this.charactersAfterSiltentVow = wordArr.join(" ");
    return this.charactersAfterSiltentVow;
	}


	replaceVowels(line){
		this.words = line.split(" ");
		let characters = this.charactersAfterSiltentVow;
		let vowels = this.vowels;
		let words = this.words;
    let wordArr = this.wordArr;
    

		words.forEach(function(word){
			characters = word.split("");
			for(let i = 0; i < characters.length; i++){
				if (vowels.includes(characters[i])){
					if (vowels.includes(characters[i-1])) {
					characters[i] = "x";
				}
			}
		}
    characters = characters.join("");
		wordArr.push(characters);
  })
  this.charactersAfterReplacingVow = wordArr.join(" ");
  return this.charactersAfterReplacingVow;
  }
  
  syllableCounter(line){
    let characters = this.charactersAfterReplacingVow = line.split("");
        for(let i = 0; i < characters.length; i++){
					if(this.vowels.includes(characters[i])){
            this.numberOfSyllables++;
          };
        }
        return this.numberOfSyllables;
      }
    };
