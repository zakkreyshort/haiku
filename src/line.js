export class Line {

  constructor (line) {
    this.line = line
    this.numberOfSyllables = 0;
    this.characters = [];
    this.words = [];
    this.characters = [];
    this.charactersAfterSiltentVow = [];
    this.charactersAfterReplacingVow = [];
    this.vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  }

  silentVowels() {
		this.words = this.line.split(" ");
		let characters = this.characters;
		let words = this.words;
		let wordArr = []; 
		words.forEach(function(word) {
			characters = word.split("");
			if ((characters[characters.length -1]) === "e") {
        // unless it is the only vowel
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
    let wordArr = [];
    

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