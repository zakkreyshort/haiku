

export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
				this.characters = [];
				this.words = [];
				this.wordArr = [];
				this.dipth = [];
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

	}


	replaceVowels (line){
		this.words = line.split(" ");
		let characters = this.characters;
		let vowels = this.vowels;
		let words = this.words;
		let wordArr = this.wordArr;

		words.forEach(function(word){
			characters = word.split("");
			for(let i = 0; i < characters.length; i++){
				if (vowels.includes(characters[i])){
					if (vowels.includes(characters[i-1])) {
					// characters[i]
					characters[i] = "x";
					// let rep = characters[i].replace(characters[i], "x");
				}
			}
		}
		characters = characters.join("");
		// console.log("characters:",characters);
		wordArr.push(characters);
	})
	this.characters = wordArr.join(" ");
	}

// 	doubleVowels(line){
// 		this.words = line.split(" ");
// 		let characters = this.characters;
// 		let vowels = this.vowels;
// 		let words = this.words;
// 		let wordArr = this.wordArr; 
		
		
// 		words.forEach(function(word) {
// 			characters = word.split("");
// 			for (let i = 0; i < characters.length; i++) {
// 				// push current character into wordArr
// 				wordArr.push(characters[i]);
// 				if (vowels.includes(characters[i])) {
					
// 					if (vowels.includes(characters[i-1])) {
// 						// wordArr.splice(characters[i], vowels);
// 						var index = wordArr.indexOf(vowels);
// 						if (index !== -1) {
// 							wordArr[index] = x 
// 						}
// 						console.log('after',wordArr)

// 						// wordArr.splice(0, vowels);
// 						// wordArr.push(characters);
						
// 						// remove character from array 
// 						// console.log(wordArr)
						
// 					} else {
// 					};
// 				};
				
// 			};
// 			// console log = 4 arrays split by character
// 		});
// 		// this.characters = wordArr.join("");
// 		// console.log(this.characters)
// 		// console.log(characters); CL = array with haiku
//
 	// }
};
