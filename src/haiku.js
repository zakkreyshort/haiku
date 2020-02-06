import { Line } from '../src/line.js'; 

export class Haiku {
  constructor(line1, line2, line3) {
      this.line1 = line1;
      this.line2 = line2;
      this.line3 = line3;
      this.lineValues = [];
      this.characters = [];
      this.charactersAfterSiltentVow = [];
      this.charactersAfterReplacingVow = [];
      this.words = [];
  }

  // these line inputs are holding the number of syllables already
  /// start here after making sure all the tests work
  isHaiku() {
    this.lineValues.push(this.line1.numberOfSyllables, this.line2.numberOfSyllables, this.line3.numberOfSyllables)
    console.log(this.line1.numberOfSyllables);
    console.log(this.line2.numberOfSyllables);
    console.log(this.line3.numberOfSyllables);
    
    if (this.lineValues[0] == 5 && this.lineValues[1] == 7 && this.lineValues[2] == 5) {
      return true
    } else {
      return false 
    }
  }
  };

